<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import ScreenUtil from "@/utils/screenUtil";
import "@/3d/fixGltf";

export default {
  name: "App",
  mounted() {
    ScreenUtil.setRem();
    window.onresize = ScreenUtil.setRem;
  }
}
</script>

<style lang="scss">
html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #333333;
}
</style>
