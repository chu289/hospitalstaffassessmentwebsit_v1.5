<template>
	<div class="total-pie">
		<h2 class="total-pie-text">本館1F門診櫃台</h2>
		<v-chart class="piechart1" :option="option1"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館1F住院櫃台</h2>
		<v-chart class="piechart2" :option="option2"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館1F急診櫃台</h2>
		<v-chart class="piechart3" :option="option3"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館3F門診櫃台</h2>
		<v-chart class="piechart4" :option="option4"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">一分館1F門診櫃台</h2>
		<v-chart class="piechart5" :option="option5"></v-chart>
	</div>
</template>

<script>
import * as echarts from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
	TitleComponent,
	TooltipComponent,
	LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, watch, defineComponent } from "vue";

echarts.use([
	CanvasRenderer,
	PieChart,
	TitleComponent,
	TooltipComponent,
	LegendComponent,
]);

export default defineComponent({
	name: "total_pie_chart",
	components: {
		VChart,
	},
	provide: {
		[THEME_KEY]: "white", //dark
	},
	props: ["score1", "score2", "score3", "score4", "score5"],
	setup(props) {
		const option1 = ref({});
		const option2 = ref({});
		const option3 = ref({});
		const option4 = ref({});
		const option5 = ref({});

		function reAssign() {
			option1.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
					// formatter: "{a} <br/>{b} : {c} ({d}%)",
				},
				series: [
					{
						name: "本館1F門診櫃台",
						type: "pie",
						radius: "80%",
						center: ["50%", "60%"],
						data: [
							{ value: props.score1[0], name: "1" },
							{ value: props.score1[1], name: "2" },
							{ value: props.score1[2], name: "3" },
							{ value: props.score1[3], name: "4" },
							{ value: props.score1[4], name: "5" },
						],

						itemStyle: {
							normal: {
								color: function (colors) {
									const colorList = [
										"#B5EAEA",
										"#FFAAA7",
										"#91cd77",
										"#64D0DA",
										"#F6DC66",
										"#BAFFB4",
									];
									return colorList[colors.dataIndex];
								},
							},
						},

						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: "rgba(0, 0, 0, 0.5)",
							},
						},
					},
				],
			};

      option2.value = {
        tooltip: {
				trigger: "item",
				formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
			},
			series: [
				{
					name: "本館1F住院櫃台",
					type: "pie",
					radius: "80%",
					center: ["50%", "60%"],
					data: [
						{ value: props.score2[0], name: "1" },
						{ value: props.score2[1], name: "2" },
						{ value: props.score2[2], name: "3" },
						{ value: props.score2[3], name: "4" },
						{ value: props.score2[4], name: "5" },
					],

					itemStyle: {
						normal: {
							color: function (colors) {
								const colorList = [
									"#B5EAEA",
									"#FFAAA7",
									"#91cd77",
									"#64D0DA",
									"#F6DC66",
									"#BAFFB4",
								];
								return colorList[colors.dataIndex];
							},
						},
					},

					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: "rgba(0, 0, 0, 0.5)",
						},
					},
				},
			],
      }

      option3.value = {
        tooltip: {
				trigger: "item",
				formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
			},
			series: [
				{
					name: "本館1F急診櫃台",
					type: "pie",
					radius: "80%",
					center: ["50%", "60%"],
					data: [
						{ value: props.score3[0], name: "1" },
						{ value: props.score3[1], name: "2" },
						{ value: props.score3[2], name: "3" },
						{ value: props.score3[3], name: "4" },
						{ value: props.score3[4], name: "5" },
					],

					itemStyle: {
						normal: {
							color: function (colors) {
								const colorList = [
									"#B5EAEA",
									"#FFAAA7",
									"#91cd77",
									"#64D0DA",
									"#F6DC66",
									"#BAFFB4",
								];
								return colorList[colors.dataIndex];
							},
						},
					},

					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: "rgba(0, 0, 0, 0.5)",
						},
					},
				},
			],
      }

      option4.value = {
        tooltip: {
				trigger: "item",
				formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
			},
			series: [
				{
					name: "本館3F門診櫃台",
					type: "pie",
					radius: "80%",
					center: ["50%", "60%"],
					data: [
						{ value: props.score4[0], name: "1" },
						{ value: props.score4[1], name: "2" },
						{ value: props.score4[2], name: "3" },
						{ value: props.score4[3], name: "4" },
						{ value: props.score4[4], name: "5" },
					],

					itemStyle: {
						normal: {
							color: function (colors) {
								const colorList = [
									"#B5EAEA",
									"#FFAAA7",
									"#91cd77",
									"#64D0DA",
									"#F6DC66",
									"#BAFFB4",
								];
								return colorList[colors.dataIndex];
							},
						},
					},

					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: "rgba(0, 0, 0, 0.5)",
						},
					},
				},
			],
      }

      option5.value = {
        tooltip: {
				trigger: "item",
				formatter: "{a} <br/>{b} : {c} ({d}%)",
			},
			series: [
				{
					name: "一分館1F門診櫃台",
					type: "pie",
					radius: "80%",
					center: ["50%", "60%"],
					data: [
						{ value: props.score5[0], name: "1" },
						{ value: props.score5[1], name: "2" },
						{ value: props.score5[2], name: "3" },
						{ value: props.score5[3], name: "4" },
						{ value: props.score5[4], name: "5" },
					],

					itemStyle: {
						normal: {
							color: function (colors) {
								const colorList = [
									"#B5EAEA",
									"#FFAAA7",
									"#91cd77",
									"#64D0DA",
									"#F6DC66",
									"#BAFFB4",
								];
								return colorList[colors.dataIndex];
							},
						},
					},

					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: "rgba(0, 0, 0, 0.5)",
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

		return { option1, option2, option3, option4, option5 };
	},
});
</script>
<style src="./style.css">

</style>
