<template>
  <div class="home">
    <img class="demo" :src="require('@/assets/demo.webp')" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {}
});
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}

.demo {
  width: 100%;
  height: 100%;
}
</style>
