<template>
    <div class="total-pie">
        <h2 class="total-pie-text">行政部門</h2>
        <v-chart class="piechart1" :option="option1" ></v-chart>
    </div>
    <div class="total-pie">
        <h2 class="total-pie-text">檢驗部門</h2>
        <v-chart class="piechart2" :option="option2" ></v-chart>
    </div>
        <div class="total-pie">
        <h2 class="total-pie-text">檢查部門</h2>
        <v-chart class="piechart3" :option="option3" ></v-chart>
    </div>
        <div class="total-pie">
        <h2 class="total-pie-text">藥劑部門</h2>
        <v-chart class="piechart4" :option="option4" ></v-chart>
    </div>
    
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
import { ref, defineComponent } from 'vue'

echarts.use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

export default defineComponent({
  name: 'total_pie_chart',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'white', //dark
  },
  props: ['score1', 'score2', 'score3', 'score4'],
  setup(props) {
    const option1 = ref({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}分 : {c}次 ({d}%)',
      },
      series: [
        {
          name: '行政部門',
          type: 'pie',
          radius: '80%',
          center: ['50%', '60%'],
          data: [
            { value: props.score1[0], name: '1' },
            { value: props.score1[1], name: '2' },
            { value: props.score1[2], name: '3' },
            { value: props.score1[3], name: '4' },
            { value: props.score1[4], name: '5' },
            // { value: 10, name: '1' },
            // { value: 20, name: '2' },
            // { value: 30, name: '3' },
            // { value: 40, name: '4' },
            // { value: 50, name: '5' },
          ],

          itemStyle: {
            normal: {
              color: function (colors) {
                const colorList = [
                  '#B5EAEA',
                  '#FFAAA7',
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
    })

    const option2 = ref({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}分 : {c}次 ({d}%)',
      },
      series: [
        {
          name: '檢驗部門',
          type: 'pie',
          radius: '80%',
          center: ['50%', '60%'],
          data: [
            { value: props.score2[0], name: '1' },
            { value: props.score2[1], name: '2' },
            { value: props.score2[2], name: '3' },
            { value: props.score2[3], name: '4' },
            { value: props.score2[4], name: '5' },
            // { value: 10, name: '1' },
            // { value: 20, name: '2' },
            // { value: 30, name: '3' },
            // { value: 40, name: '4' },
            // { value: 50, name: '5' },
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
    })
    const option3 = ref({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}分 : {c}次 ({d}%)',
      },
      series: [
        {
          name: '檢查部門',
          type: 'pie',
          radius: '80%',
          center: ['50%', '60%'],
          data: [
            { value: props.score3[0], name: '1' },
            { value: props.score3[1], name: '2' },
            { value: props.score3[2], name: '3' },
            { value: props.score3[3], name: '4' },
            { value: props.score3[4], name: '5' },
            //             { value: 10, name: '1' },
            // { value: 20, name: '2' },
            // { value: 30, name: '3' },
            // { value: 40, name: '4' },
            // { value: 50, name: '5' },
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
    })
    const option4 = ref({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}分 : {c}次 ({d}%)',
      },
      series: [
        {
          name: '藥劑部門',
          type: 'pie',
          radius: '80%',
          center: ['50%', '60%'],
          data: [
            { value: props.score4[0], name: '1' },
            { value: props.score4[1], name: '2' },
            { value: props.score4[2], name: '3' },
            { value: props.score4[3], name: '4' },
            { value: props.score4[4], name: '5' },
            //             { value: 10, name: '1' },
            // { value: 20, name: '2' },
            // { value: 30, name: '3' },
            // { value: 40, name: '4' },
            // { value: 50, name: '5' },
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
    })

    return {option1, option2, option3, option4 }
  },
})
</script>
<style src="./style.css"></style>
