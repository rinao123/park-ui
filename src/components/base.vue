<template>
  <div class="base">
    <div class="left">
      <div class="top">
        <Park />
      </div>
      <div class="bottom">
        <Device />
      </div>
    </div>
    <div class="middle">
      <Map />
    </div>
    <div class="right">
      <div class="top">
        <Pest />
      </div>
      <div class="bottom">
        <Camera />
      </div>
    </div>
  </div>
</template>

<script>
import Park from "@/components/park.vue";
import Device from "@/components/device.vue";
import Pest from "@/components/pest.vue";
import Camera from "@/components/camera.vue";
import Map from "@/components/map.vue";

export default {
  name: "Base",
  components: {
    Park,
    Device,
    Pest,
    Camera,
    Map
  }
}
</script>

<style scoped lang="scss">
@import "../styles/color.scss";

.base {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 96px;
  width: 876px;
}

.middle {
  margin: 0 64px;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 96px;
  width: 876px;
}

.top {
  display: flex;
  margin-top: 17px;
}

.bottom {
  margin-top: 29px;
}
</style>
