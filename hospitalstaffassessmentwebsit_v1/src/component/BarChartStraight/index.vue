<template>
  <v-chart :option="option" @click="clickBar" />
</template>

<script>
import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, watch, defineComponent } from "vue";

echarts.use([TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

export default defineComponent({
  name: "bar_chart_Straight",
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "white", //dark
  },
  props: ["optionData1", "optionData2"],
  setup(props, context) {
    // console.log("bar_chart_Straight重新渲染");
    const option = ref({});

    function reAssign() {
      console.log(props);
      option.value = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          textStyle: {
            fontSize: 20,
          },
        },
        legend: {},
        grid: {
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {
              name: "員工-直長條圖",
              title: "",
            },
          },
          itemSize: 35,
        },
        xAxis: {
          type: "category",
          data: ["當前資料", "比對資料"],
          axisLabel: { fontSize: 30, color: "#818181" },
        },
        yAxis: {
          type: "value",
          axisLabel: { fontSize: 20 },
          max: 5,
        },
        series: [
          {
            type: "bar",
            data: [
              {
                value: props.optionData1["average"],
                itemStyle: {
                  color: "#64D0DA",
                },
              },
              {
                value: props.optionData2["average"],
                itemStyle: {
                  color: "#F6DC66",
                },
              },
            ],
            barWidth: "50%",
            itemStyle: {
              color: "#64D0DA",
            },
            label: {
              show: true,
              position: "insideTop",
              fontSize: 30,
              color: "#545454",
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
      //避免optionData1和optionData2成為undefind的時候重新渲染，應該在主程式跳頁
      if (props.optionData1 && props.optionData2) {
        reAssign();
      }
    });

    return { option, clickBar };
  },
});
</script>

<style src="./style.css"></style>
