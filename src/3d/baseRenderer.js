import * as Cesium from "cesium";
import "@/3d/polylineTrailMaterial";
import cesiumConfig from "@/3d/cesiumConfig";
import baseConfig from "@/3d/baseConfig";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default class BaseRenderer {
    constructor() {
        this.loaded = false;
        this.initialHeading = 0;
    }

    init = () => {
        Object.assign(window, { CESIUM_BASE_URL: "/static/cesium/" });
        Cesium.Ion.defaultAccessToken = cesiumConfig.accessToken;
        this.viewer = new Cesium.Viewer("map3d", {
            animation: false,
            baseLayerPicker: false,
            vrButton: false,
            geocoder: false,
            navigationHelpButton: false,
            navigationInstructionsInitiallyVisible: false,
            fullscreenButton: false,
            homeButton: false,
            infoBox: false,
            sceneModePicker: false,
            selectionIndicator: false,
            timeline: false,
            useBrowserRecommendedResolution: false
        });
        this.viewer.cesiumWidget.creditContainer.style.display = "none";
        this.park = new Cesium.Cesium3DTileset({ url: baseConfig.modelUrl });
        this.viewer.scene.primitives.add(this.park);
        this.viewer.zoomTo(this.park);
        if (!this.loaded) {
            const helper = new Cesium.EventHelper();
            helper.add(this.park.allTilesLoaded, this.onLoaded);
        }
    }

    onLoaded = () => {
        if (this.loaded) {
            return;
        }
        this.addTags();
        this.addLines();
        this.tour();
        this.listenClick();
        this.loaded = true;
    }

    addTags = () => {
        if (!this.viewer || !this.park) {
            return;
        }
        this.park.root.children.forEach((tile, index) => {
            if (!this.viewer) {
                return;
            }
            this.viewer.entities.add({
                position: tile.boundingSphere.center,
                label: Object.assign(baseConfig.label, {
                    text: `测试名称${index + 1}`, 
                    pixelOffset: new Cesium.Cartesian2(0, -(tile.boundingSphere.radius + 5))
                })
            });
        });
    }

    addLines = () => {
        if (!this.viewer || !this.park) {
            return;
        }
        baseConfig.lines.forEach((item) => {
            item.lines.forEach((line) => {
                const entity = new Cesium.Entity({
                    polyline: {
                        positions: line,
                        width: item.width,
                        clampToGround: true,
                        material: new Cesium.PolylineTrailMaterial(item.color, item.milliseconds)
                    }
                });
                this.viewer.entities.add(entity);
            });
        });
    }

    tour = () => {
        if (!this.viewer || !this.park) {
            return;
        }
        this.destination = this.park.root.boundingSphere.center;
        this.destination.y += baseConfig.tour.height;
        this.initialHeading = this.viewer.camera.heading;
        this.viewer.clock.multiplier = baseConfig.tour.multiplier;
        this.viewer.clock.shouldAnimate = true;
        this.viewer.clock.onTick.addEventListener(this.onTick);
    }

    onTick = () => {
        if (!this.viewer || !this.park || !this.destination) {
            return;
        }
        const pitch = Cesium.Math.toRadians(baseConfig.tour.pitchAngle);
        const delTime = Cesium.JulianDate.secondsDifference(this.viewer.clock.currentTime, this.viewer.clock.startTime);
        const heading = Cesium.Math.toRadians(delTime * baseConfig.tour.headingPerFrame) + this.initialHeading;
        this.viewer.scene.camera.setView({
            destination: this.destination,
            orientation: {
                pitch: pitch,
                heading: heading
            }
        });
    }

    listenClick = () => {
        if (!this.viewer) {
            return;
        }
        const handler = new Cesium.ScreenSpaceEventHandler(this.viewer.canvas);
        handler.setInputAction((event) => {
            if (!this.viewer || !event) {
                return;
            }
            const earthPosition = this.viewer.scene.pickPosition(event.position);
            console.log(earthPosition);
            this.createPoint(earthPosition);
        }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
    }

    createPoint = (worldPosition) => {
        if (!this.viewer) {
            return;
        }
        this.viewer.entities.add({
            position: worldPosition,
            point: {
                color: Cesium.Color.RED,
                pixelSize: 5
            }
        });
    }
}