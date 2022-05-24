<template>
 <!-- <div class="legend-box">
    <div class="legend1">
      <div class="text">5分</div>
      <div class="box"></div>
    </div>
    <div class="legend legend2">
      <div class="text">4分</div>
      <div class="box"></div>
    </div>
    <div class="legend legend3">
      <div class="text">3分</div>
      <div class="box"></div>
    </div>
    <div class="legend legend4">
      <div class="text">2分</div>
      <div class="box"></div>
    </div>
    <div class="legend legend5">
      <div class="text">1分</div>
      <div class="box"></div>
    </div>
  </div> -->
  <v-chart :option="option" @click="clickBar" />
</template>

<script>
import * as echarts from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, watch, defineComponent } from 'vue'
// import func from '../../../vue-temp/vue-editor-bridge'

echarts.use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

export default defineComponent({
  name: 'pie_chart',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'white', //dark
  },
  props: ['score'],
  setup(props) {
    const option = ref({});
    // const score = ref([335, 310, 234, 135, 1548])
    // const option = ref({
    //   title: {
    //     // text: "Traffic Sources",
    //     left: 'center',
    //   },
    //   tooltip: {
    //     trigger: 'item',
    //     formatter: '{a} <br/>{b} : {c} ({d}%)',
    //   },
    //   // legend: {
    //   //   orient: 'vertical',
    //   //   left: 'left',
    //   //   // data: ["5", "4", "3", "2", "1"]
    //   //   data: [
    //   //     score.value[0],
    //   //     score.value[1],
    //   //     score.value[2],
    //   //     score.value[3],
    //   //     score.value[4],
    //   //   ],
    //   // },
    //   series: [
    //     {
    //       name: 'Traffic Sources',
    //       type: 'pie',
    //       radius: '55%',
    //       center: ['50%', '60%'],
    //       data: [
    //         // { value: 335, name: "5" },
    //         // { value: 310, name: "4" },
    //         // { value: 234, name: "3" },
    //         // { value: 135, name: "2" },
    //         // { value: 1548, name: "1" }
    //         { value: props.score[0], name: "1" },
    //         { value: props.score[1], name: "2" },
    //         { value: props.score[2], name: "3" },
    //         { value: props.score[3], name: "4" },
    //         { value: props.score[4], name: "5" },
    //       ],

    //       itemStyle: {
    //         normal: {
    //           color: function (colors) {
    //             const colorList = [
    //               '#B5EAEA',
    //               '#FFAAA7',
    //               '#91cd77',
    //               '#64D0DA',
    //               '#F6DC66',
    //               '#BAFFB4',
    //             ]
    //             return colorList[colors.dataIndex]
    //           },
    //         },
    //       },

    //       emphasis: {
    //         itemStyle: {
    //           shadowBlur: 10,
    //           shadowOffsetX: 0,
    //           shadowColor: 'rgba(0, 0, 0, 0.5)',
    //         },
    //       },
    //     },
    //   ],
    // })

    function reAssign() {
      option.value = {
      title: {
        // text: "Traffic Sources",
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}分 : {c}次 ({d}%)',
      },
      // legend: {
      //   orient: 'vertical',
      //   left: 'left',
      //   // data: ["5", "4", "3", "2", "1"]
      //   data: [
      //     score.value[0],
      //     score.value[1],
      //     score.value[2],
      //     score.value[3],
      //     score.value[4],
      //   ],
      // },
      series: [
        {
          // name: 'Traffic Sources',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            // { value: 335, name: "5" },
            // { value: 310, name: "4" },
            // { value: 234, name: "3" },
            // { value: 135, name: "2" },
            // { value: 1548, name: "1" }
            { value: props.score[0], name: "1" },
            { value: props.score[1], name: "2" },
            { value: props.score[2], name: "3" },
            { value: props.score[3], name: "4" },
            { value: props.score[4], name: "5" },
          ],

          itemStyle: {
            normal: {
              color: function (colors) {
                const colorList = [
                  '#B5EAEA',
                  '#FFAAA7',
                  '#91cd77',
                  '#64D0DA',
                  '#F6DC66',
                  '#BAFFB4',
                ]
                return colorList[colors.dataIndex]
              },
            },
          },

          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }
    }

    reAssign()

    watch(props, () => {
      reAssign();
    });

    return { option }
  },
})
</script>

<style src="./style.css"></style>
<style scoped>
/* .chart {
  height: 100vh;
} */
/* .legend-box{
  width: 60px;
  height: 30px;
  display: flex;
    margin: 0 auto;
}
.legend{
  width: 70px;
  height: 10px;
  margin-left: 5px;
  margin-top: 5px;
}
.legend1{
  background: #B5EAEA;
}
.legend2{
  background: #FFAAA7;
}
.legend3{
  background: #64D0DA;
}
.legend4{
  background: #F6DC66;
}
.legend5{
  background: #BAFFB4;
} */
</style>
