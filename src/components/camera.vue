<template>
  <div class="camera">
    <div class="header">
      <div class="title">
        <span class="title-text">种植基地视频监控</span>
      </div>
      <div class="icon">
        <img class="icon-image" src="../assets/box.png" />
      </div>
    </div>
    <div class="content">
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
      <img class="camera-image" src="../assets/camera3.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Camera"
}
</script>

<style scoped lang="scss">
@import "../styles/color.scss";

.camera {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 373px;
  background-color: rgba(99, 117, 131, 0.3);
  border-radius: 4px;

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 34px;

    .title {
      display: flex;
      align-items: center;
      width: 837px;
      height: 100%;
      background-color: $active-color;
      border-radius: 4px;
    }

    .title-text {
      margin-left: 12px;
      font-family: Microsoft YaHei UI;
      font-size: 22px;
      color: $black
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      background-color: $active-color;
      border-radius: 4px;
    }

    .icon-image {
      width: 22px;
      height: 21px;
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex: 1;
  }

  .camera-image {
    margin-top: 10px;
    margin-left: 10px;
    width: 207px;
    height: 99px;
  }
}
</style>
