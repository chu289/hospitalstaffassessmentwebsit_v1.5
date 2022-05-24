<template>
  <v-chart :option="option" @click="clickBar" />
</template>

<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

import VChart, { THEME_KEY } from "vue-echarts";
import { ref, watch, defineComponent } from "vue";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

export default defineComponent({
  name: "line_chart",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "white", //dark
  },
  props: ["optionData1", "optionData2", "date1", "date2", "mode"],
  setup(props, context) {
    // console.log("lineChart重新渲染");
    const option = ref({});

    function reAssign() {
      option.value = {
        tooltip: {
          trigger: "axis",
          formatter: function (param) {
            let text = `<div class="tooltip">
            <div>${param[0].name}</div>
            <div>${param[0].marker}${props.date1[0].replace(
              /-/g,
              "/"
            )}-${props.date1[1].replace(/-/g, "/")}： ${param[0].value}</div>
            <div>${param[1].marker}${props.date2[0].replace(
              /-/g,
              "/"
            )}-${props.date2[1].replace(/-/g, "/")}： ${param[1].value}</div>
            </div>`;
            return text;
          },
          textStyle: {
            fontSize: 20,
          },
        },
        legend: {
          data: ["當前資料", "比對資料"],
          top: "5%",
          // bottom: "5%",
          itemWidth: 50,
          itemHeight: 20,
          textStyle: {
            fontSize: 20,
          },
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
          top: "15%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {
              name: props.mode == 1 ? "全院統計-折線圖" : "部門統計-折線圖",
              title: "",
            },
          },
          itemSize: 35,
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: Object.values(props.optionData1).map((e) => {
            return e.name;
          }),
          axisLabel: {
            show: Object.keys(props.optionData1).length <= 5,
            fontSize: 15,
            color: "#3B3B3B",
          },
        },
        yAxis: {
          type: "value",
          max: 5,
          axisLabel: { fontSize: 30, color: "#3B3B3B" },
        },
        series: [
          {
            name: "當前資料",
            type: "line",
            data: Object.values(props.optionData1).map((e) => {
              return e.average;
            }),
            itemStyle: {
              color: "#64D0DA",
            },
          },
          {
            name: "比對資料",
            type: "line",
            data: Object.values(props.optionData2).map((e) => {
              return e.average;
            }),
            itemStyle: {
              color: "#F6DC66",
            },
          },
        ],
      };
    }
    reAssign();

    function clickBar(param) {
      console.log(param);
      console.log(Object.keys(props.optionData1)[param.dataIndex]);
      context.emit("barClick", Object.keys(props.optionData1)[param.dataIndex]);
    }

    watch(props, () => {
      reAssign();
    });

    return { option, clickBar };
  },
});
</script>

<style src="./style.css"></style>
