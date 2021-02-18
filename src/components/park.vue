<template>
  <div class="park">
    <div class="header">
      <div class="title">
        <img class="title-icon" src="../assets/ball.png" />
        <span class="title-text">广东十记果业有限公司（示范园区A1）</span>
        <img class="dropdown" src="../assets/down.png" />
      </div>
      <div class="icon">
        <img class="icon-image" src="../assets/box.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Park"
}
</script>

<style scoped lang="scss">
@import "../styles/color.scss";

.park {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 394px;
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

    .title-icon {
      margin-left: 12px;
      width: 20px;
      height: 20px;
    }

    .title-text {
      margin-left: 16px;
      font-family: Microsoft YaHei UI;
      font-size: 22px;
      color: $black
    }

    .dropdown {
      margin-left: 30px;
      width: 20px;
      height: 11px;
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
}
</style>
