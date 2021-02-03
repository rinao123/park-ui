<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ScreenUtil from "@/utils/screenUtil";

export default Vue.extend({
  name: "App",
  components: {},
  mounted() {
    window.onresize = ScreenUtil.setRem;
    ScreenUtil.setRem();
  }
});
</script>

<style lang="scss">
html {
  display: flex;
  width: 100%;
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #333333;
}

#app {
  display: flex;
  width: 3840px;
  height: 1080px;
}
</style>
