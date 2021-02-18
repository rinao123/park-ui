import * as Cesium from "cesium";

function PolylineTrailMaterial(color, duration) {
    this._definitionChanged = new Cesium.Event();
    this._color = undefined;
    this._colorSubscription = undefined;
    this.color = color;
    this.duration = duration;
    this._time = (new Date()).getTime();
}

Object.defineProperties(PolylineTrailMaterial.prototype, {
    isConstant: {
        get: function () {
            return false;
        }
    },
    definitionChanged: {
        get: function () {
            return this._definitionChanged;
        }
    },
    color: Cesium.createPropertyDescriptor("color")
});

PolylineTrailMaterial.prototype.getType = function () {
    return "PolylineTrail";
}

PolylineTrailMaterial.prototype.getValue = function (time, result) {
    if (!Cesium.defined(result)) {
        result = {};
    }
    result.color = Cesium.Property.getValueOrClonedDefault(this._color, time, Cesium.Color.WHITE, result.color);
    result.image = Cesium.Material.PolylineTrailImage;
    result.time = (((new Date()).getTime() - this._time) % this.duration) / this.duration;
    return result;
}

PolylineTrailMaterial.prototype.equals = function (other) {
    return this === other || (other instanceof PolylineTrailMaterial && Cesium.Property.equals(this._color, other._color))
};

Cesium.PolylineTrailMaterial = PolylineTrailMaterial;
Cesium.Material.PolylineTrailType = "PolylineTrail";
Cesium.Material.PolylineTrailImage = "/static/texture/color.png";
Cesium.Material.PolylineTrailSource = "czm_material czm_getMaterial(czm_materialInput materialInput)\n\
{\n\
    czm_material material = czm_getDefaultMaterial(materialInput);\n\
    vec2 st = materialInput.st;\n\
    vec4 colorImage = texture2D(image, vec2(fract(st.s - time), st.t));\n\
    material.alpha = colorImage.a * color.a;\n\
    material.diffuse = (colorImage.rgb+color.rgb)/2.0;\n\
    return material;\n\
}";

Cesium.Material._materialCache.addMaterial(Cesium.Material.PolylineTrailType, {
    fabric: {
        type: Cesium.Material.PolylineTrailType,
        uniforms: {
            color: new Cesium.Color(1.0, 0.0, 0.0, 0.5),
            image: Cesium.Material.PolylineTrailImage,
            time: 0
        },
        source: Cesium.Material.PolylineTrailSource
    },
    translucent: function () {
        return true;
    }
});
