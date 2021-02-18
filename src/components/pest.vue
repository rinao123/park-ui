<template>
  <div class="pest">
    <div class="header">
      <div class="title">
        <span class="title-text">当前基地视像及虫情监测</span>
      </div>
      <div class="icon">
        <img class="icon-image" src="../assets/box.png" />
      </div>
    </div>
    <div class="content">
      <div class="left">
        <img class="top" src="../assets/camera1.jpg" />
        <div class="bottom">
          <img class="image" src="../assets/camera2.jpg" />
          <img class="image" src="../assets/camera2.jpg" />
        </div>
      </div>
      <div class="right">
        <div class="table">
          <div class="row title">
            <span class="column1 title-text">病虫名</span>
            <span class="column2 title-text">密度</span>
            <span class="column3 title-text">建议措施</span>
          </div>
          <div class="row warning">
            <span class="column1 value-text warning">蚧壳虫</span>
            <span class="column2 value-text warning">10</span>
            <span class="column3 value-text warning">发现虫情，请处理</span>
          </div>
          <div class="row even">
            <span class="column1 value-text">红蜘蛛</span>
            <span class="column2 value-text">0</span>
            <span class="column3 value-text">暂无异常</span>
          </div>
          <div class="row odd">
            <span class="column1 value-text">果蝇</span>
            <span class="column2 value-text">3</span>
            <span class="column3 value-text">建议采取预防措施</span>
          </div>
          <div class="row even">
            <span class="column1 value-text">锈蜘蛛</span>
            <span class="column2 value-text">8</span>
            <span class="column3 value-text">建议采取预防措施</span>
          </div>
          <div class="row odd">
            <span class="column1 value-text">潜叶蛾</span>
            <span class="column2 value-text">0</span>
            <span class="column3 value-text">暂无异常</span>
          </div>
        </div>
        <div class="chart" id="chart" />
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Pest",
  mounted() {
    setTimeout(() => {
      const dom = document.getElementById("chart");
      const chart = echarts.init(dom);
      const option = this.getOption();
      chart.setOption(option);
    }, 0);
  },
  methods: {
    getOption() {
      const option = {
        textStyle: {color: "#ffffff"},
        tooltip: {trigger: "axis"},
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          containLabel: true
        },
        legend: {
          icon: "pin",
          textStyle: {
            color: "#ffffff",
          },
          data: ["当年情况", "往年情况"]
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["1月", "2月", "3月", "4月", "5月"]
          },
        ],
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "当年情况",
            type: "line",
            areaStyle: {},
            emphasis: {focus: "series"},
            z: 10,
            data: [300, 200, 200, 200, 300]
          },
          {
            name: "往年情况",
            type: "line",
            areaStyle: {},
            emphasis: {focus: "series"},
            data: [500, 310, 320, 400, 400]
          }
        ]
      };
      return option;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../styles/color.scss";

.pest {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 451px;
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
      color: $black;
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
    width: 100%;
    flex: 1;

    .left {
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      margin-left: 23px;
      width: 406px;

      .top {
        width: 100%;
        height: 212px;
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 14px;
        width: 100%;

        .image {
          width: 195px;
          height: 158px;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      margin-top: 16px;
      margin-left: 16px;
      width: 408px;

      .table {
        display: flex;
        flex-direction: column;
        width: 100%;

        .row {
          display: flex;
          align-items: center;
          width: 100%;
          height: 35px;
        }

        .column1 {
          margin-left: 23px;
          width: 80px;
        }

        .column2 {
          margin-left: 10px;
          width: 60px;
        }

        .column3 {
          margin-left: 10px;
          flex: 1;
        }

        .row.title {
          background-color: #535353;
        }

        .row.odd {
          background-color: #353f46;
        }

        .row.even {
          background-color: #666666;
        }

        .row.warning {
          background-color: #66cc33;
        }

        .title-text {
          font-family: Microsoft YaHei UI;
          font-size: 22px;
          color: $white;
        }

        .value-text {
          font-family: Microsoft YaHei UI;
          font-size: 20px;
          color: $white;
        }

        .value-text.warning {
          color: #ff6666;
        }
      }

      .chart {
        margin-top: 21px;
        width: 408px;
        height: 158px;
      }
    }
  }
}
</style>
