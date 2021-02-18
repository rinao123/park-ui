<template>
  <div class="map">
    <div class="content">
      <Map3D />
      <div class="ui">
        <MapUI />
      </div>
    </div>
    <img class="corner-top-left" src="../assets/corner.png" />
    <img class="corner-top-right" src="../assets/corner.png" />
    <img class="corner-bottom-left" src="../assets/corner.png" />
    <img class="corner-bottom-right" src="../assets/corner.png" />
  </div>
</template>

<script>
import Map3D from "@/components/map3D.vue";
import MapUI from "@/components/mapUI.vue";

export default {
  name: "Map",
  components: {
    Map3D,
    MapUI
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/color.scss";

.map {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1766px;
  height: 868px;
  background-color: rgba(99, 117, 131, 0.3);
  border-radius: 4px;

  .content {
    position: relative;
    display: flex;
    width: 1726px;
    height: 828px;
  }

  .ui {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.corner-top-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 11px;
  height: 12px;
}

.corner-top-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 11px;
  height: 12px;
  transform: rotate(90deg);
}

.corner-bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 11px;
  height: 12px;
  transform: rotate(270deg);
}

.corner-bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 11px;
  height: 12px;
  transform: rotate(180deg);
}
</style>
