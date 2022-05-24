<template>
	<div class="total-pie">
		<h2 class="total-pie-text">本館B1放射科櫃台</h2>
		<v-chart class="piechart1" :option="option1"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館B1_CT檢查室</h2>
		<v-chart class="piechart2" :option="option2"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館B1_MRI放射科櫃台</h2>
		<v-chart class="piechart3" :option="option3"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">二分館1F_640檢查室</h2>
		<v-chart class="piechart4" :option="option4"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">二分館B1_檢查室</h2>
		<v-chart class="piechart5" :option="option5"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">二分館5F_檢查室</h2>
		<v-chart class="piechart6" :option="option6"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">二分館1F_內視鏡檢查室</h2>
		<v-chart class="piechart7" :option="option7"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館1F_內視鏡檢查室</h2>
		<v-chart class="piechart8" :option="option8"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館3F_婦產科檢查室</h2>
		<v-chart class="piechart9" :option="option9"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館3F_耳鼻喉科檢查室</h2>
		<v-chart class="piechart10" :option="option10"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">二分館B1眼科檢查室</h2>
		<v-chart class="piechart11" :option="option11"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館3F肌電圖室</h2>
		<v-chart class="piechart12" :option="option12"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館B1心臟超音波檢查室</h2>
		<v-chart class="piechart13" :option="option13"></v-chart>
	</div>
	<div class="total-pie">
		<h2 class="total-pie-text">本館B1核子醫學科檢查室</h2>
		<v-chart class="piechart14" :option="option14"></v-chart>
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
	props: ["score1", "score2", "score3", "score4", "score5", "score6", "score7", "score8", "score9", "score10", "score11", "score12", "score13", "score14"],
	setup(props) {
		const option1 = ref({});
		const option2 = ref({});
		const option3 = ref({});
		const option4 = ref({});
		const option5 = ref({});
        const option6 = ref({});
        const option7 = ref({});
        const option8 = ref({});
        const option9 = ref({});
        const option10 = ref({});
        const option11 = ref({});
        const option12 = ref({});
        const option13 = ref({});
        const option14 = ref({});

		function reAssign() {
			option1.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "本館B1放射科櫃台",
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
						name: "本館B1_CT檢查室",
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
			};

			option3.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "本館B1_MRI放射科櫃台",
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
			};

			option4.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "二分館1F_640檢查室",
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
			};

			option5.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "二分館B1_檢查室",
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
			};
            
            option6.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "二分館5F_)檢查室",
						type: "pie",
						radius: "80%",
						center: ["50%", "60%"],
						data: [
							{ value: props.score6[0], name: "1" },
							{ value: props.score6[1], name: "2" },
							{ value: props.score6[2], name: "3" },
							{ value: props.score6[3], name: "4" },
							{ value: props.score6[4], name: "5" },
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

            option7.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "二分館1F_內視鏡檢查室",
						type: "pie",
						radius: "80%",
						center: ["50%", "60%"],
						data: [
							{ value: props.score7[0], name: "1" },
							{ value: props.score7[1], name: "2" },
							{ value: props.score7[2], name: "3" },
							{ value: props.score7[3], name: "4" },
							{ value: props.score7[4], name: "5" },
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

            option8.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "本館1F_內視鏡檢查室",
						type: "pie",
						radius: "80%",
						center: ["50%", "60%"],
						data: [
							{ value: props.score8[0], name: "1" },
							{ value: props.score8[1], name: "2" },
							{ value: props.score8[2], name: "3" },
							{ value: props.score8[3], name: "4" },
							{ value: props.score8[4], name: "5" },
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

            option9.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "本館3F_婦產科檢查室",
						type: "pie",
						radius: "80%",
						center: ["50%", "60%"],
						data: [
							{ value: props.score9[0], name: "1" },
							{ value: props.score9[1], name: "2" },
							{ value: props.score9[2], name: "3" },
							{ value: props.score9[3], name: "4" },
							{ value: props.score9[4], name: "5" },
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

            option10.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "本館3F_耳鼻喉科檢查室",
						type: "pie",
						radius: "80%",
						center: ["50%", "60%"],
						data: [
							{ value: props.score10[0], name: "1" },
							{ value: props.score10[1], name: "2" },
							{ value: props.score10[2], name: "3" },
							{ value: props.score10[3], name: "4" },
							{ value: props.score10[4], name: "5" },
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

            option11.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "二分館B1眼科檢查室",
						type: "pie",
						radius: "80%",
						center: ["50%", "60%"],
						data: [
							{ value: props.score11[0], name: "1" },
							{ value: props.score11[1], name: "2" },
							{ value: props.score11[2], name: "3" },
							{ value: props.score11[3], name: "4" },
							{ value: props.score11[4], name: "5" },
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

            option12.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "本館3F肌電圖室",
						type: "pie",
						radius: "80%",
						center: ["50%", "60%"],
						data: [
							{ value: props.score12[0], name: "1" },
							{ value: props.score12[1], name: "2" },
							{ value: props.score12[2], name: "3" },
							{ value: props.score12[3], name: "4" },
							{ value: props.score12[4], name: "5" },
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

            option13.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "本館B1心臟超音波檢查室",
						type: "pie",
						radius: "80%",
						center: ["50%", "60%"],
						data: [
							{ value: props.score13[0], name: "1" },
							{ value: props.score13[1], name: "2" },
							{ value: props.score13[2], name: "3" },
							{ value: props.score13[3], name: "4" },
							{ value: props.score13[4], name: "5" },
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

            option14.value = {
				tooltip: {
					trigger: "item",
					formatter: "{a} <br/>{b}分 : {c}次 ({d}%)",
				},
				series: [
					{
						name: "本館B1核子醫學科檢查室",
						type: "pie",
						radius: "80%",
						center: ["50%", "60%"],
						data: [
							{ value: props.score14[0], name: "1" },
							{ value: props.score14[1], name: "2" },
							{ value: props.score14[2], name: "3" },
							{ value: props.score14[3], name: "4" },
							{ value: props.score14[4], name: "5" },
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

		}

		reAssign();

		watch(props, () => {
			reAssign();
		});

		return { option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12, option13, option14 };
	},
});
</script>
<style>
.total-pie {
	height: 450px;
	width: 500px;
	display: flex;
	justify-content: center;
	position: relative;
}

x-vue-echarts.echarts.piechart1,
x-vue-echarts.echarts.piechart2,
x-vue-echarts.echarts.piechart3,
x-vue-echarts.echarts.piechart4,
x-vue-echarts.echarts.piechart5,
x-vue-echarts.echarts.piechart6,
x-vue-echarts.echarts.piechart7,
x-vue-echarts.echarts.piechart8,
x-vue-echarts.echarts.piechart9,
x-vue-echarts.echarts.piechart10,
x-vue-echarts.echarts.piechart11,
x-vue-echarts.echarts.piechart12,
x-vue-echarts.echarts.piechart13,
x-vue-echarts.echarts.piechart14 {
	width: 400px;
	height: 400px;
	display: flex;
	/* justify-content: center; */
	/* align-items: center; */
	/* margin: auto 60px; */
	margin-top: 50px;
}
.total-pie-text {
	position: absolute;
	top: 15%;
}
</style>
