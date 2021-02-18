<template>
  <div class="map3d" id="map3d">

  </div>
</template>

<script>
import BaseRenderer from "@/3d/baseRenderer";

export default {
  name: "Map3D",
  mounted() {
    setTimeout(() => {
      const renderer = new BaseRenderer();
      renderer.init();
    }, 0);
  }
}
</script>

<style scoped lang="scss">
.map3d {
  width: 100%;
  height: 100%;
}
</style>
