<template>
  <div class="map-ui">
    <div class="left">
      <span class="title">种植基地概况</span>
      <div class="growing-area">
        <div class="growing-area-left">
          <span class="growing-area-title">种植面积</span>
          <div class="growing-area-value">
            <span class="growing-area-value-num">1,200</span>
            <span class="growing-area-value-unit">亩</span>
          </div>
        </div>
        <div class="growing-area-chart" id="growing-area-chart" />
      </div>
      <div class="yield">
        <span class="yield-title">种植面积</span>
        <div class="yield-value">
          <span class="yield-value-num">4,000</span>
          <span class="yield-value-unit">吨</span>
        </div>
      </div>
      <div class="sales-volume">
        <span class="sales-volume-title">各品种销量</span>
        <div class="sales-volume-chart" id="sales-volume-chart" />
      </div>
      <div class="sales">
        <span class="sales-title">销售额</span>
        <div class="sales-value">
          <span class="sales-value-num">1,680.5</span>
          <span class="sales-value-unit">万元</span>
        </div>
        <span class="sales-text">各品种销售额</span>
        <div class="sales-chart" id="sales-chart" />
      </div>
    </div>
    <div class="top-right">
      <span class="top-right-title">数字无人农业</span>
      <div class="top-right-chart" id="top-right-chart" />
    </div>
    <div class="weather">
      <span class="weather-text">SAT</span>
      <img class="weather-icon" src="../assets/rain.png" />
      <span class="weather-text">26℃~22℃</span>
    </div>
    <div class="uav">
      <div class="uav-messages" id="uav-messages">
        <span
          class="uav-message"
          v-for="(message, index) in messages"
          :key="index"
          >{{ message }}</span
        >
      </div>
      <div class="uav-icons">
        <img class="uav-icon" src="../assets/uav.png" />
        <img class="uav-icon" src="../assets/uav.png" />
        <img class="uav-icon" src="../assets/uav.png" />
      </div>
    </div>
    <div class="expert">
      <div class="expert-container">
        <div class="expert-left">
          <img class="expert-image" src="../assets/expert.jpg" />
          <span class="expert-name">隋中泉</span>
          <span class="expert-title">病虫害防治</span>
        </div>
        <div class="expert-right">
          <span class="suggest-title">建议次数</span>
          <div class="suggest-time">
            <span class="suggest-time-value">425</span>
            <span class="suggest-time-unit">次</span>
          </div>
          <span class="accept-rate-title">采纳率</span>
          <div class="accept-rate-chart" id="accept-rate-chart" />
          <div class="btn-contact">
            <span class="btn-contact-text">联系专家</span>
          </div>
        </div>
      </div>
      <div class="expert-corner">
        <span class="expert-corner-text">专家团队</span>
      </div>
    </div>
    <div class="farm-work">
      <div class="farm-work-container">
        <div class="plant">
          <span class="plant-title">品质管控</span>
          <img class="plant-image" src="../assets/plant.jpg" />
          <span class="plant-name">沙田柚</span>
        </div>
        <div class="soil-info">
          <div class="soil-info-header">
            <div class="soil-info-cell">
              <span class="soil-info-header-text">管理项</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-header-text">管理项</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-header-text">管理项</span>
            </div>
          </div>
          <div class="soil-info-odd">
            <div class="soil-info-cell">
              <span class="soil-info-text">湿度</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-text">65-75</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-text">%</span>
            </div>
          </div>
          <div class="soil-info-even">
            <div class="soil-info-cell">
              <span class="soil-info-text">土壤温度</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-text">22-32</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-text">℃</span>
            </div>
          </div>
          <div class="soil-info-odd">
            <div class="soil-info-cell">
              <span class="soil-info-text">土壤湿度</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-text">75-100</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-text">%</span>
            </div>
          </div>
          <div class="soil-info-even">
            <div class="soil-info-cell">
              <span class="soil-info-text">土壤EC</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-text">0-180</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-text">mS/cm</span>
            </div>
          </div>
          <div class="soil-info-odd">
            <div class="soil-info-cell">
              <span class="soil-info-text">土壤pH</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-text">6.71-7.29</span>
            </div>
            <div class="soil-info-cell">
              <span class="soil-info-text" />
            </div>
          </div>
        </div>
        <div class="farm-work-record">
          <span class="farm-work-record-title"
            >农事记录 （沙田柚-001号园）</span
          >
          <div class="farm-work-record-progress">
            <div class="farm-work-record-progress-column">
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text">农事....</span>
              <span class="farm-work-record-progress-text">农事....</span>
              <div class="farm-work-record-progress-triangle" />
            </div>
            <div
              class="farm-work-record-progress-column"
              :style="{ marginLeft: '29px' }"
            >
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text">农事....</span>
              <div class="farm-work-record-progress-triangle" />
            </div>
            <div
              class="farm-work-record-progress-column"
              :style="{ marginLeft: '20px' }"
            >
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text">农事....</span>
              <span class="farm-work-record-progress-text"></span>
              <div class="farm-work-record-progress-triangle" />
            </div>
            <div
              class="farm-work-record-progress-column"
              :style="{ marginLeft: '12px' }"
            >
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text"></span>
              <div class="farm-work-record-progress-triangle disabled" />
            </div>
            <div
              class="farm-work-record-progress-column"
              :style="{ marginLeft: '85px' }"
            >
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text">农事....</span>
              <div class="farm-work-record-progress-triangle disabled" />
            </div>
            <div
              class="farm-work-record-progress-column"
              :style="{ marginLeft: '11px' }"
            >
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text">农事....</span>
              <span class="farm-work-record-progress-text"></span>
              <div class="farm-work-record-progress-triangle disabled" />
            </div>
            <div
              class="farm-work-record-progress-column"
              :style="{ marginLeft: '59px' }"
            >
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text">农事....</span>
              <div class="farm-work-record-progress-triangle disabled" />
            </div>
            <div
              class="farm-work-record-progress-column"
              :style="{ marginLeft: '20px' }"
            >
              <span class="farm-work-record-progress-text">农事....</span>
              <span class="farm-work-record-progress-text">农事....</span>
              <span class="farm-work-record-progress-text"></span>
              <div class="farm-work-record-progress-triangle disabled" />
            </div>
            <div
              class="farm-work-record-progress-column"
              :style="{ marginLeft: '14px' }"
            >
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text">农事....</span>
              <div class="farm-work-record-progress-triangle disabled" />
            </div>
            <div
              class="farm-work-record-progress-column"
              :style="{ marginLeft: '8px' }"
            >
              <span class="farm-work-record-progress-text"></span>
              <span class="farm-work-record-progress-text">农事....</span>
              <span class="farm-work-record-progress-text"></span>
              <div class="farm-work-record-progress-triangle disabled" />
            </div>
            <div class="farm-work-record-progress-bar" />
            <div class="farm-work-record-progress-bar-active" />
          </div>
        </div>
        <div class="manager">
          <span class="manager-title">管理员</span>
          <img class="manager-image" src="../assets/manager.jpg" />
          <span class="manager-text">姓名：张三</span>
          <span class="manager-text">电话：12345678901</span>
        </div>
      </div>
      <div class="farm-work-corner">
        <span class="farm-work-corner-text">农事管理</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "MapUI",
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.initGrowingAreaChart();
      this.initSalesVolumeChart();
      this.initSalesChart();
      this.initTopRightChart();
      this.initAcceptRateChart();
    }, 0);
    this.startMessageTimer();
  },
  beforeDestroy() {
    this.clearMessageTimer();
  },
  methods: {
    initGrowingAreaChart() {
      const dom = document.getElementById("growing-area-chart");
      const chart = echarts.init(dom);
      const option = this.getGrowingAreaOption();
      chart.setOption(option);
    },
    initSalesVolumeChart() {
      const dom = document.getElementById("sales-volume-chart");
      const chart = echarts.init(dom);
      const option = this.getSalesVolumeOption();
      chart.setOption(option);
    },
    initSalesChart() {
      const dom = document.getElementById("sales-chart");
      const chart = echarts.init(dom);
      const option = this.getSalesOption();
      chart.setOption(option);
    },
    initTopRightChart() {
      const dom = document.getElementById("top-right-chart");
      const chart = echarts.init(dom);
      const option = this.getTopRightOption();
      chart.setOption(option);
    },
    initAcceptRateChart() {
      const dom = document.getElementById("accept-rate-chart");
      const chart = echarts.init(dom);
      const option = this.getAcceptRateOption();
      chart.setOption(option);
    },
    getGrowingAreaOption() {
      const option = {
        tooltip: { trigger: "item" },
        series: [
          {
            type: "pie",
            radius: ["80%", "100%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
              formatter: "{d}%\n{b}",
              fontSize: 24,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 24,
                color: "#ffffff",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 19, name: "沙田柚", itemStyle: { color: "#ecc139" } },
              { value: 22, name: "三红蜜柚", itemStyle: { color: "#926997" } },
              { value: 29, name: "金柚", itemStyle: { color: "#639a72" } },
              { value: 20, name: "红宝石", itemStyle: { color: "#b4235d" } },
              { value: 10, name: "胡柚", itemStyle: { color: "#7eb0c2" } },
            ],
          },
        ],
      };
      return option;
    },
    getSalesVolumeOption() {
      const option = {
        textStyle: { color: "#ffffff" },
        tooltip: { trigger: "axis" },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          containLabel: true,
        },
        legend: {
          icon: "pin",
          textStyle: {
            color: "#ffffff",
          },
          data: ["沙田柚", "金柚", "三红蜜柚", "红宝石"],
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2016", "2017", "2018", "2019", "2020"],
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "沙田柚",
            type: "line",
            smooth: true,
            itemStyle: { color: "#ff9900" },
            emphasis: { focus: "series" },
            data: [261, 20, 170, 100, 262],
          },
          {
            name: "金柚",
            type: "line",
            smooth: true,
            itemStyle: { color: "#00ff00" },
            emphasis: { focus: "series" },
            data: [70, 110, 70, 56, 150],
          },
          {
            name: "三红蜜柚",
            type: "line",
            smooth: true,
            itemStyle: { color: "#3399ff" },
            emphasis: { focus: "series" },
            data: [262, 112, 168, 100, 280],
          },
          {
            name: "红宝石",
            type: "line",
            smooth: true,
            itemStyle: { color: "#ff6666" },
            emphasis: { focus: "series" },
            data: [0, 0, 168, 0, 0],
          },
        ],
      };
      return option;
    },
    getSalesOption() {
      const option = {
        textStyle: { color: "#ffffff" },
        tooltip: { trigger: "axis" },
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          containLabel: true,
        },
        legend: {
          icon: "pin",
          textStyle: {
            color: "#ffffff",
          },
          data: ["沙田柚", "金柚", "三红蜜柚", "红宝石"],
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["2016", "2017", "2018", "2019", "2020"],
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: "沙田柚",
            type: "line",
            smooth: true,
            itemStyle: { color: "#ff9900" },
            emphasis: { focus: "series" },
            data: [261, 20, 170, 100, 262],
          },
          {
            name: "金柚",
            type: "line",
            smooth: true,
            itemStyle: { color: "#00ff00" },
            emphasis: { focus: "series" },
            data: [70, 110, 70, 56, 150],
          },
          {
            name: "三红蜜柚",
            type: "line",
            smooth: true,
            itemStyle: { color: "#3399ff" },
            emphasis: { focus: "series" },
            data: [262, 112, 168, 100, 280],
          },
          {
            name: "红宝石",
            type: "line",
            smooth: true,
            itemStyle: { color: "#ff6666" },
            emphasis: { focus: "series" },
            data: [0, 0, 168, 0, 0],
          },
        ],
      };
      return option;
    },
    getTopRightOption() {
      const option = {
        textStyle: { color: "#ffffff" },
        color: "#65a064",
        radar: {
          shape: "circle",
          axisName: {
            textStyle: { color: "#ffffff" },
          },
          splitLine: { show: false },
          splitArea: { show: false },
          indicator: [
            { name: "施肥", max: 100 },
            { name: "除虫", max: 100 },
            { name: "监测", max: 100 },
            { name: "采收", max: 100 },
            { name: "运输", max: 100 },
            { name: "种植", max: 100 },
          ],
        },
        series: {
          type: "radar",
          areaStyle: {},
          data: [
            {
              value: [100, 65, 80, 70, 75, 50],
            },
          ],
        },
      };
      return option;
    },
    getAcceptRateOption() {
      const option = {
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          containLabel: true,
        },
        series: {
          type: "gauge",
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false,
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: true,
            itemStyle: {
              color: "#0995f3",
            },
          },
          axisLine: {
            lineStyle: {
              width: 4,
            },
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          data: [
            {
              detail: {
                offsetCenter: [0, 0],
              },
              value: 73,
            },
          ],
          detail: {
            fontSize: 10,
            color: "#66CC33",
            formatter: "{value}%",
          },
        },
      };
      return option;
    },
    startMessageTimer() {
      this.clearMessageTimer();
      this.messageUpdateCount = 0;
      this.updateMessage();
      this.messageTimer = setInterval(this.updateMessage, 1000);
    },
    updateMessage() {
      const messages = [
        "“xa-001号无人机”投入使用时间",
        "2021年1月",
        "“xa-001号无人机”投入使用时间",
        "2021年1月",
        "“PE-001号无人机”暂无异常",
        "“PE-002号无人机”暂无异常",
        "“PE-003号无人机”暂无异常",
      ];
      const index = this.messageUpdateCount % messages.length;
      if (this.messages.length > 10) {
        this.messages.shift();
      }
      this.messages.push(messages[index]);
      this.messageUpdateCount++;
      const dom = document.getElementById("uav-messages");
      if (dom) {
        dom.scrollTo({ top: dom.clientHeight });
      }
    },
    clearMessageTimer() {
      if (this.messageTimer) {
        clearInterval(this.messageTimer);
        this.messageTimer = null;
      }
    }
  },
};
</script>

<style scoped lang="scss">
@import "../styles/color.scss";

.map-ui {
  position: relative;
  width: 100%;
  height: 100%;

  .left {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 443px;
    height: 100%;
    background-color: rgba(99, 117, 131, 0.6);

    .title {
      align-self: center;
      margin-top: 14px;
      font-family: Microsoft YaHei UI;
      font-size: 26px;
      color: $white;
    }

    .growing-area {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
    }

    .growing-area-left {
      display: flex;
      flex-direction: column;
      margin-left: 43px;
    }

    .growing-area-title {
      font-family: Microsoft YaHei UI;
      font-size: 28px;
      color: $white;
    }

    .growing-area-value {
      display: flex;
      margin-top: 10px;
    }

    .growing-area-value-num {
      font-family: DINPro;
      font-size: 48px;
      font-weight: bold;
      color: $white;
    }

    .growing-area-value-unit {
      margin-top: 20px;
      margin-left: 30px;
      font-family: Microsoft YaHei UI;
      font-size: 24px;
      color: $white;
    }

    .growing-area-chart {
      margin-right: 43px;
      width: 123px;
      height: 123px;
    }

    .yield {
      display: flex;
      flex-direction: column;
      margin-left: 43px;
    }

    .yield-title {
      font-family: Microsoft YaHei UI;
      font-size: 28px;
      color: $white;
    }

    .yield-value {
      display: flex;
      margin-top: 10px;
    }

    .yield-value-num {
      font-family: DINPro;
      font-size: 48px;
      font-weight: bold;
      color: $white;
    }

    .yield-value-unit {
      margin-top: 20px;
      margin-left: 30px;
      font-family: Microsoft YaHei UI;
      font-size: 24px;
      color: $white;
    }

    .sales-volume {
      display: flex;
      flex-direction: column;
      margin-top: 15px;
    }

    .sales-volume-title {
      margin-left: 43px;
      font-family: Microsoft YaHei UI;
      font-size: 18px;
      color: $white;
    }

    .sales-volume-chart {
      margin-top: 16px;
      margin-left: 20px;
      width: 403px;
      height: 151px;
    }

    .sales {
      display: flex;
      flex-direction: column;
      margin-top: 15px;
    }

    .sales-title {
      margin-left: 43px;
      font-family: Microsoft YaHei UI;
      font-size: 28px;
      color: $white;
    }

    .sales-value {
      display: flex;
      margin-top: 10px;
      margin-left: 43px;
    }

    .sales-value-num {
      font-family: DINPro;
      font-size: 48px;
      font-weight: bold;
      color: $white;
    }

    .sales-value-unit {
      margin-top: 20px;
      margin-left: 30px;
      font-family: Microsoft YaHei UI;
      font-size: 24px;
      color: $white;
    }

    .sales-text {
      margin-left: 43px;
      font-family: Microsoft YaHei UI;
      font-size: 18px;
      color: $white;
    }

    .sales-chart {
      margin-top: 9px;
      margin-left: 20px;
      width: 403px;
      height: 151px;
    }
  }

  .top-right {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 224px;
    height: 219px;
    background-color: rgba(99, 117, 131, 0.3);
    border-radius: 4px;
  }

  .top-right-title {
    margin-top: 10px;
    font-family: Microsoft YaHei UI;
    font-size: 18px;
    color: $white;
  }

  .top-right-chart {
    margin-top: 8px;
    width: 184px;
    height: 170px;
  }

  .weather {
    position: absolute;
    top: 10px;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 200px;
  }

  .weather-text {
    font-family: Microsoft YaHei UI;
    font-size: 18px;
    color: $white;
  }

  .weather-icon {
    margin: 0 10px;
    width: 33px;
    height: 29px;
  }

  .uav {
    position: absolute;
    top: 220px;
    right: 0;
    display: flex;
    height: 236px;
    overflow: hidden;
  }

  .uav-messages {
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  .uav-message {
    margin-bottom: 20px;
    width: 100%;
    font-size: 14px;
    color: $white;
    text-align: end;
  }

  .uav-icons {
    display: flex;
    flex-direction: column;
    margin-left: 6px;
  }

  .uav-icon {
    margin-bottom: 10px;
    width: 82px;
    height: 72px;
  }

  .expert {
    position: absolute;
    top: 484px;
    right: 0;
    width: 207px;
    height: 173px;
  }

  .expert-container {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 203px;
    height: 148px;
    background-color: rgba(51, 51, 51, 0.7);
    border: 2px solid #3399cc;
    border-radius: 4px;
  }

  .expert-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 7px;
  }

  .expert-image {
    margin-top: 18px;
    width: 64px;
    height: 74px;
    border: 1px solid #fdfdfd;
    object-fit: cover;
  }

  .expert-name {
    margin-top: 5px;
    font-family: Microsoft YaHei UI;
    font-size: 18px;
    color: $white;
  }

  .expert-title {
    margin-top: 5px;
    font-family: Microsoft YaHei UI;
    font-size: 12px;
    color: $white;
  }

  .expert-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 36px;
  }

  .suggest-title {
    font-family: Microsoft YaHei UI;
    font-size: 14px;
    color: $white;
  }

  .suggest-time {
    display: flex;
    margin-top: 2px;
  }

  .suggest-time-value {
    font-family: Microsoft YaHei UI;
    font-size: 18px;
    color: #0099ff;
  }

  .suggest-time-unit {
    margin-top: 3px;
    font-family: Microsoft YaHei UI;
    font-size: 14px;
    color: $white;
  }

  .expert-corner {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 73px;
    height: 25px;
    background-color: #333333;
    border: 2px solid #3399cc;
    border-radius: 8px 0 8px 0;
  }

  .expert-corner-text {
    font-family: Microsoft YaHei UI;
    font-size: 14px;
    color: $white;
  }

  .accept-rate-title {
    margin-top: 2px;
    font-family: Microsoft YaHei UI;
    font-size: 14px;
    color: $white;
  }

  .accept-rate-chart {
    width: 48px;
    height: 48px;
  }

  .btn-contact {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 24px;
    background-color: #66cc33;
    border-radius: 4px;
  }

  .btn-contact-text {
    font-family: Microsoft YaHei UI;
    font-size: 12px;
    color: $white;
  }

  .farm-work {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1244px;
    height: 184px;
  }

  .farm-work-container {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 1240px;
    height: 156px;
    background-color: rgba(99, 117, 131, 0.3);
    border: 2px solid #3399cc;
    border-radius: 8px;
  }

  .plant {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 15px;
  }

  .plant-title {
    margin-top: 16px;
    font-family: Microsoft YaHei UI;
    font-size: 16px;
    color: $white;
  }

  .plant-image {
    margin-top: 2px;
    width: 96px;
    height: 91px;
    border: 1px solid #fdfdfd;
    object-fit: cover;
  }

  .plant-name {
    margin-top: 2px;
    font-family: Microsoft YaHei UI;
    font-size: 16px;
    color: #ffcc33;
  }

  .soil-info {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 24px;
    width: 230px;
  }

  .soil-info-header {
    display: flex;
    width: 100%;
    height: 33px;
    background-color: $black;
  }

  .soil-info-odd {
    display: flex;
    width: 100%;
    height: 22px;
    background-color: #353f46;
  }

  .soil-info-even {
    display: flex;
    width: 100%;
    height: 22px;
    background-color: #666666;
  }

  .soil-info-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
  }

  .soil-info-header-text {
    font-family: Microsoft YaHei UI;
    font-size: 16px;
    color: $white;
  }

  .soil-info-text {
    font-family: Microsoft YaHei UI;
    font-size: 12px;
    color: $white;
  }

  .farm-work-record {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }

  .farm-work-record-title {
    margin-top: 12px;
    margin-left: 14px;
    font-family: Microsoft YaHei UI;
    font-size: 16px;
    color: $white;
  }

  .farm-work-record-progress {
    display: flex;
    margin-top: 2px;
    margin-left: 14px;
  }

  .farm-work-record-progress-column {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .farm-work-record-progress-text {
    margin-bottom: 12px;
    height: 14px;
    font-family: Microsoft YaHei UI;
    font-size: 14px;
    color: $white;
  }

  .farm-work-record-progress-triangle {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 17px solid #0099ff;
    z-index: 2;
  }

  .farm-work-record-progress-triangle.disabled {
    border-bottom: 17px solid #64bbf0;
  }

  .farm-work-record-progress-bar {
    position: absolute;
    bottom: 34px;
    left: 29px;
    width: 620px;
    height: 2px;
    background-color: #fcfcfc;
  }

  .farm-work-record-progress-bar-active {
    position: absolute;
    bottom: 34px;
    left: 29px;
    width: 140px;
    height: 2px;
    background-color: #0099ff;
  }

  .manager {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 36px;
  }

  .manager-title {
    font-family: Microsoft YaHei UI;
    font-size: 16px;
    color: $white;
  }

  .manager-image {
    margin-top: 4px;
    width: 88px;
    height: 83px;
    border: 1px solid #fdfdfd;
    object-fit: cover;
  }

  .manager-text {
    margin-top: 2px;
    font-family: Microsoft YaHei UI;
    font-size: 16px;
    color: $white;
  }

  .farm-work-corner {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 119px;
    height: 36px;
    background: #333333;
    border: 2px solid #3399cc;
    border-radius: 8px 0 8px 0;
  }

  .farm-work-corner-text {
    font-family: Microsoft YaHei UI;
    font-size: 24px;
    color: $white;
  }
}
</style>
