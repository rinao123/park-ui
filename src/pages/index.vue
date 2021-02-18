<template>
  <div class="index">
    <div class="content">
      <Base />
    </div>
  </div>
</template>

<script>
import Base from "@/components/base.vue";

export default {
  name: "Index",
  components: {
    Base
  }
}
</script>

<style scoped lang="scss">
@import "../styles/color.scss";

.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3840px;
  height: 1080px;
  background: url("../assets/bg.jpg");
  background-size: cover;
}

.content {
  display: flex;
  margin-top: 148px;
  width: 100%;
  flex: 1;
}
</style>