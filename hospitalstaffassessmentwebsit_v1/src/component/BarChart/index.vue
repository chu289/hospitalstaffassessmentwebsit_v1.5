<template>
  <v-chart :option="option" :init-options="initOptions" @click="clickBar" />
</template>

<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, watch, defineComponent } from "vue";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
]);

export default defineComponent({
  name: "bar_chart",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "white", //dark
  },
  props: ["optionData", "mode"],
  setup(props, context) {
    // console.log("barChart重新渲染");
    const initOptions = ref({});
    const option = ref({});

    function reAssign() {
      initOptions.value = {
        height: Object.keys(props.optionData).length * 70 + 100,
      };
      option.value = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (param) {
            let text = `<div class="tooltip"><div>${param[0].marker}${
              param[0].name
            }</div>
          <div>平均分數&emsp;${param[0].value}</div>
          <div>評分次數&emsp;${
            Object.values(props.optionData)[param[0].dataIndex].times
          }</div></div>`;
            return text;
          },
          textStyle: {
            fontSize: 20,
          },
        },
        legend: {},
        grid: {
          left: "1%",
          right: "5%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {
              name: props.mode == 1 ? "全院統計-長條圖" : "部門統計-長條圖",
              title: "",
            },
          },
          itemSize: 35,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.1],
          axisLabel: { fontSize: 20 },
          max: 5,
        },
        yAxis: {
          type: "category",
          data: Object.values(props.optionData).map((e) => {
            return e.name;
          }),
          axisLabel: { fontSize: props.mode == 1 ? 40 : 30, color: "#818181" },
          inverse: true,
        },
        series: [
          {
            type: "bar",
            data: Object.values(props.optionData).map((e) => {
              return e.average;
            }),
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "#6FEEFA", // color at 0%
                  },
                  {
                    offset: 1,
                    color: "#5CBFB5", // color at 100%
                  },
                ],
                global: false, // default is false
              },
            }, //"#64D0DA"
            label: {
              show: true,
              position: "insideRight",
              fontSize: props.mode == 1 ? 25 : 20,
              color: "#FFFFFF",
            },
          },
        ],
      };
    }
    reAssign();

    function clickBar(param) {
      console.log(Object.keys(props.optionData)[param.dataIndex]);
      context.emit("barClick", Object.keys(props.optionData)[param.dataIndex]);
    }

    watch(props, () => {
      reAssign();
    });

    return { option, initOptions, clickBar };
  },
});
</script>

<style src="./style.css"></style>
