<template>
	<div class="backstage">
		<div class="Bheader">
			<div class="Bheader_text">
				<h4>起迄日</h4>
				<h4>選擇地區</h4>
				<h4>選擇員工</h4>
			</div>
			<!-- 選擇器 -->
			<div class="Bheader_select">
				<div class="input_date">
					<div class="Bheader_select_datebox">
						<input
							type="date"
							v-model="date[0]"
							:max="date[1]"
							required
						/>
						<!-- @change="dateChange($event)" -->
					</div>
					<div class="input_date_line"></div>
					<div class="Bheader_select_datebox">
						<input
							type="date"
							v-model="date[1]"
							:min="date[0]"
							required
						/>
					</div>
				</div>

				<div class="Bheader_select_box">
					<input
						type="button"
						:value="placesList[department][place]"
						class="input_place"
						@click="isShowList('P')"
						:class="{ Bheader_select_box_bg_select: placeListShow }"
					/>
					<ul class="select_place_list" v-show="placeListShow">
						<li
							class="option"
							v-for="(value, key) in placesList[department]"
							:key="key"
							@click="isShowList('P', key)"
						>
							{{ value }}
						</li>
					</ul>
				</div>

				<div class="Bheader_select_box">
					<input
						type="button"
						:value="employeesList[employee]"
						class="input_employee"
						@click="isShowList('E')"
						:class="{
							Bheader_select_box_bg_select: employeeListShow,
						}"
					/>
					<ul class="select_employee_list" v-show="employeeListShow">
						<li
							class="option"
							v-for="(value, key) in employeesList"
							:key="key"
							@click="isShowList('E', key)"
						>
							{{ value }}
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="Bcontainer">
			<!-- 選部門的菜單 -->
			<div class="Bmenu">
				<ul class="Bmenu_ul">
					<li v-for="obj in departmentsList" :key="obj['id']">
						<label
							><input
								type="radio"
								name="label"
								:value="obj.id"
								v-model="department"
							/>
							<p class="Bmenu_button">{{ obj.name }}</p>
						</label>
					</li>
				</ul>
			</div>

			<!-- 圖表 -->

			<div class="Bcontent" v-if="mode == 1">
				<h4 class="chart_title">平均分數</h4>
				<div class="bar_chart">
					<bar-chart
						:optionData="hostipalSearchResult"
						:mode="mode"
						@barClick="department = $event"
					>
					</bar-chart>
				</div>
				<h4 class="chart_title">平均分數比較</h4>
				<div class="line_chart">
					<div class="chart_two_date">
						<div class="input_date_1">
							<div class="select_datebox1">
								<input
									type="date"
									v-model="date[0]"
									:max="date[1]"
									required
								/>
							</div>
							<div class="input_date_line1"></div>
							<div class="select_datebox1">
								<input
									type="date"
									v-model="date[1]"
									:min="date[0]"
									required
								/>
							</div>
						</div>

						<div class="input_date_2">
							<div class="select_datebox2">
								<input
									type="date"
									v-model="date2[0]"
									:max="date2[1]"
									required
								/>
							</div>
							<div class="input_date_line2"></div>
							<div class="select_datebox2">
								<input
									type="date"
									v-model="date2[1]"
									:min="date2[0]"
									required
								/>
							</div>
						</div>
					</div>
					<line-chart
						:optionData1="hostipalSearchResult"
						:optionData2="hostipalSearchResult2"
						:date1="date"
						:date2="date2"
						:mode="mode"
						@barClick="department = $event"
					></line-chart>
				</div>
				<h4 class="chart_title">評分次數統計</h4>
				<div class="legend-box">
					<div class="legend1">
						<div class="box"></div>
						<div class="text">5分</div>
					</div>
					<div class="legend legend2">
						<div class="box"></div>
						<div class="text">4分</div>
					</div>
					<div class="legend legend3">
						<div class="box"></div>
						<div class="text">3分</div>
					</div>
					<div class="legend legend4">
						<div class="box"></div>
						<div class="text">2分</div>
					</div>
					<div class="legend legend5">
						<div class="box"></div>
						<div class="text">1分</div>
					</div>
				</div>
				<div class="pie_chart">
					<total-pie-chart
						:score1="score1"
						:score2="score2"
						:score3="score3"
						:score4="score4"
					>
					</total-pie-chart>
				</div>
			</div>

			<div class="Bcontent" v-else-if="mode == 2">
				<h4 class="chart_title">平均分數</h4>
				<div class="bar_chart">
					<bar-chart
						:optionData="deartmentSearchResult"
						:mode="mode"
						@barClick="place = $event"
					>
					</bar-chart>
				</div>
				<h4 class="chart_title">平均分數比較</h4>
				<div class="line_chart">
					<div class="chart_two_date">
						<div class="input_date_1">
							<div class="select_datebox1">
								<input
									type="date"
									v-model="date[0]"
									:max="date[1]"
									required
								/>
							</div>
							<div class="input_date_line1"></div>
							<div class="select_datebox1">
								<input
									type="date"
									v-model="date[1]"
									:min="date[0]"
									required
								/>
							</div>
						</div>

						<div class="input_date_2">
							<div class="select_datebox2">
								<input
									type="date"
									v-model="date2[0]"
									:max="date2[1]"
									required
								/>
							</div>
							<div class="input_date_line2"></div>
							<div class="select_datebox2">
								<input
									type="date"
									v-model="date2[1]"
									:min="date2[0]"
									required
								/>
							</div>
						</div>
					</div>
					<line-chart
						:optionData1="deartmentSearchResult"
						:optionData2="deartmentSearchResult2"
						:date1="date"
						:date2="date2"
						:mode="mode"
						@barClick="place = $event"
					></line-chart>
				</div>
				<h4 class="chart_title">評分次數統計</h4>
				<div class="legend-box">
					<div class="legend1">
						<div class="box"></div>
						<div class="text">5分</div>
					</div>
					<div class="legend legend2">
						<div class="box"></div>
						<div class="text">4分</div>
					</div>
					<div class="legend legend3">
						<div class="box"></div>
						<div class="text">3分</div>
					</div>
					<div class="legend legend4">
						<div class="box"></div>
						<div class="text">2分</div>
					</div>
					<div class="legend legend5">
						<div class="box"></div>
						<div class="text">1分</div>
					</div>
				</div>
				<!-- <div class="pie_chart"> -->
				<div class="pie_chart" v-if="department == 'A'">
					<dep-one-pie-chart
						:score1="oneScore1"
						:score2="oneScore2"
						:score3="oneScore3"
						:score4="oneScore4"
						:score5="oneScore5"
					>
					</dep-one-pie-chart>
				</div>
				<div class="pie_chart" v-if="department == 'B'">
					<dep-two-pie-chart :score1="twoScore1"> </dep-two-pie-chart>
				</div>
				<div class="pie_chart" v-if="department == 'C'">
					<dep-three-pie-chart
						:score1="threeScore1"
						:score2="threeScore2"
						:score3="threeScore3"
						:score4="threeScore4"
						:score5="threeScore5"
						:score6="threeScore6"
						:score7="threeScore7"
						:score8="threeScore8"
						:score9="threeScore9"
						:score10="threeScore10"
						:score11="threeScore11"
						:score12="threeScore12"
						:score13="threeScore13"
						:score14="threeScore14"
					>
					</dep-three-pie-chart>
				</div>
				<div class="pie_chart" v-if="department == 'D'">
					<dep-four-pie-chart
						:score1="fourScore1"
						:score2="fourScore2"
					>
					</dep-four-pie-chart>
				</div>
				<!-- <pie-chart :score="score"> </pie-chart> -->
				<!-- </div> -->
			</div>

			<div class="Bcontent" v-else-if="mode == 3">
				<h4 class="chart_title">員工一覽</h4>
				<table class="table_chart">
					<thead>
						<tr>
							<th class="table_id" scope="col">員工編號</th>
							<th class="table_name" scope="col">姓名</th>
							<th class="table_times" scope="col">評分次數</th>
							<th class="table_average" scope="col">平均分數</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="(value, key) in placeSearchResult"
							:key="key"
						>
							<td class="table_id">
								<input
									type="button"
									class="table_row_button"
									:value="key"
									@click="employee = key"
								/>
								<h5>{{ key }}</h5>
							</td>
							<td class="table_name">{{ value["name"] }}</td>
							<td class="table_times">{{ value["times"] }}</td>
							<td class="table_average">
								{{ value["average"] }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="Bcontent" v-else-if="mode == 4">
				<h4 class="chart_title">平均分數比較</h4>
				<div class="bar_chart_employee">
					<div class="chart_two_date">
						<div class="input_date_1">
							<div class="select_datebox1">
								<input
									type="date"
									v-model="date[0]"
									:max="date[1]"
									required
								/>
							</div>
							<div class="input_date_line1"></div>
							<div class="select_datebox1">
								<input
									type="date"
									v-model="date[1]"
									:min="date[0]"
									required
								/>
							</div>
						</div>

						<div class="input_date_2">
							<div class="select_datebox2">
								<input
									type="date"
									v-model="date2[0]"
									:max="date2[1]"
									required
								/>
							</div>
							<div class="input_date_line2"></div>
							<div class="select_datebox2">
								<input
									type="date"
									v-model="date2[1]"
									:min="date2[0]"
									required
								/>
							</div>
						</div>
					</div>
					<div class="bar_chart_employee_container">
						<bar-chart-straight
							:optionData1="placeSearchResult[employee]"
							:optionData2="placeSearchResult2[employee]"
							:mode="mode"
						></bar-chart-straight>
					</div>
				</div>
				<h4 class="chart_title">評分次數統計</h4>
				<div class="legend-box">
					<div class="legend1">
						<div class="box"></div>
						<div class="text">5分</div>
					</div>
					<div class="legend legend2">
						<div class="box"></div>
						<div class="text">4分</div>
					</div>
					<div class="legend legend3">
						<div class="box"></div>
						<div class="text">3分</div>
					</div>
					<div class="legend legend4">
						<div class="box"></div>
						<div class="text">2分</div>
					</div>
					<div class="legend legend5">
						<div class="box"></div>
						<div class="text">1分</div>
					</div>
				</div>
				<pie-chart :score="score"> </pie-chart>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, reactive, watch } from "vue";
import axios from "axios";
import BarChart from "../component/BarChart/index.vue";
import LineChart from "../component/LineChart/index.vue";
import BarChartStraight from "../component/BarChartStraight/index.vue";
import PieChart from "../component/PieChart/index.vue";
import TotalPieChart from "../component/TotalPieChart/index.vue";
import DepOnePieChart from "../component/DepOnePieChart/index.vue";
import DepTwoPieChart from "../component/DepTwoPieChart/index.vue";
import DepThreePieChart from "../component/DepThreePieChart/index.vue";
import DepFourPieChart from "../component/DepFourPieChart/index.vue";

export default {
	components: {
		BarChart,
		LineChart,
		BarChartStraight,
		PieChart,
		TotalPieChart,
		DepOnePieChart,
		DepTwoPieChart,
		DepThreePieChart,
		DepFourPieChart,
	},
	setup() {
		// const date = reactive([
		//   new Date().toISOString().slice(0, 10),
		//   new Date().toISOString().slice(0, 10),
		// ]);
		// const date2 = reactive([
		//   new Date().toISOString().slice(0, 10),
		//   new Date().toISOString().slice(0, 10),
		// ]);
		//這是測試用的日期
		const date = reactive(["2022-05-10", "2022-05-13"]);
		const date2 = reactive(["2022-05-15", "2022-05-20"]);
		const department = ref("000");
		const place = ref("000");
		const employee = ref("");
		const placeListShow = ref(false);
		const hostipalSearchResult = ref({});
		const deartmentSearchResult = ref({});
		const hostipalSearchResult2 = ref({});
		const deartmentSearchResult2 = ref({});
		const placeSearchResult = ref({});
		const placeSearchResult2 = ref({});
		const employeeListShow = ref(false);
		const mode = ref(0);
		const testA = ref([
			{ id: "A", name: "行政部門" },
			{ id: "B", name: "檢驗部門" },
			{ id: "C", name: "檢查部門" },
			{ id: "D", name: "藥劑部門" },
		]);
		const departmentsList = [
			{ id: "000", name: "檢視全部" },
			{ id: "A", name: "行政部門" },
			{ id: "B", name: "檢驗部門" },
			{ id: "C", name: "檢查部門" },
			{ id: "D", name: "藥劑部門" },
		];
		const placesList = {
			"000": {
				"000": "請先選擇部門",
			},
			A: {
				"000": "所有地區",
				"001": "本館1F門診櫃台",
				"002": "本館1F住院櫃台",
				"003": "本館1F急診櫃台",
				"004": "本館3F門診櫃台",
				"005": "一分館1F門診櫃台",
			},
			B: { "000": "所有地區", "001": "本館1F抽血櫃台" },
			C: {
				"000": "所有地區",
				"001": "本館B1放射科櫃台",
				"002": "本館B1_CT檢查室",
				"003": "本館B1_MRI放射科櫃台",
				"004": "二分館1F_640檢查室",
				"005": "二分館B1_檢查室",
				"006": "二分館5F_檢查室",
				"007": "二分館1F_內視鏡檢查室",
				"008": "本館1F_內視鏡檢查室",
				"009": "本館3F_婦產科檢查室",
				"010": "本館3F_耳鼻喉科檢查室",
				"011": "二分館B1眼科檢查室",
				"012": "本館3F肌電圖室",
				"013": "本館B1心障超音波檢查室",
				"014": "本館B1核子醫學科檢查室",
			},
			D: {
				"000": "所有地區",
				"001": "本館1F藥劑科",
				"002": "一分館B1眼科藥局",
			},
		};
		const employeesList = ref({
			"000": "所有人員",
		});
		const score = ref([5, 4, 3, 2, 1]);
		const score1 = ref([6, 7, 8, 9, 10]);
		const score2 = ref([11, 12, 13, 14, 15]);
		const score3 = ref([16, 17, 18, 19, 20]);
		const score4 = ref([21, 22, 23, 24, 25]);
		const oneScore1 = ref([5, 4, 3, 2, 1]);
		const oneScore2 = ref([6, 7, 8, 9, 10]);
		const oneScore3 = ref([11, 12, 13, 14, 15]);
		const oneScore4 = ref([16, 17, 18, 19, 20]);
		const oneScore5 = ref([21, 22, 23, 24, 25]);
		const twoScore1 = ref([5, 4, 3, 2, 1]);
		const threeScore1 = ref([5, 4, 3, 2, 1]);
		const threeScore2 = ref([6, 7, 8, 9, 10]);
		const threeScore3 = ref([11, 12, 13, 14, 15]);
		const threeScore4 = ref([16, 17, 18, 19, 20]);
		const threeScore5 = ref([21, 22, 23, 24, 25]);
		const threeScore6 = ref([26, 27, 28, 29, 30]);
		const threeScore7 = ref([31, 32, 33, 34, 35]);
		const threeScore8 = ref([36, 37, 38, 39, 40]);
		const threeScore9 = ref([41, 42, 43, 44, 45]);
		const threeScore10 = ref([46, 47, 48, 49, 50]);
		const threeScore11 = ref([51, 52, 53, 54, 55]);
		const threeScore12 = ref([56, 57, 58, 59, 60]);
		const threeScore13 = ref([61, 62, 63, 64, 65]);
		const threeScore14 = ref([66, 67, 68, 69, 70]);
		const fourScore1 = ref([5, 4, 3, 2, 1]);
		const fourScore2 = ref([6, 7, 8, 9, 10]);

		function all_analyze(dateFlag) {
			const d = { 0: date, 2: date2 };
			return new Promise((resolve) => {
				axios
					.post(
						"https://hospitalstaffassessmentserver.azurewebsites.net:443/all_analyze",
						{
							start_date: d[dateFlag][0],
							end_date: d[dateFlag][1],
						}
					)
					.then((res) => {
						if (dateFlag == 0) {
							const scoreTimes = res.data;
							score1.value = scoreTimes.A.score;
							score2.value = scoreTimes.B.score;
							score3.value = scoreTimes.C.score;
							score4.value = scoreTimes.D.score;
							hostipalSearchResult.value = res.data;
							console.log(hostipalSearchResult.value);
							console.log("全院查詢");
						} else if (dateFlag == 2) {
							const scoreTimes = res.data;
							score1.value = scoreTimes.A.score;
							score2.value = scoreTimes.B.score;
							score3.value = scoreTimes.C.score;
							score4.value = scoreTimes.D.score;
							hostipalSearchResult2.value = res.data;
							console.log(hostipalSearchResult2.value);
							console.log("全院查詢2");
						}
						resolve();
					});
			});
		}

		function department_analyze(dateFlag) {
			const d = { 0: date, 2: date2 };
			return new Promise((resolve) => {
				axios
					.post(
						"https://hospitalstaffassessmentserver.azurewebsites.net:443/department_analyze",
						{
							start_date: d[dateFlag][0],
							end_date: d[dateFlag][1],
							department_ID: department.value,
						}
					)
					.then((res) => {
						if (dateFlag == 0) {
							const paramsData = res.data;
							detectDepartment(department.value, paramsData);

							deartmentSearchResult.value = res.data;
							console.log(deartmentSearchResult.value);
							console.log(department.value + "部門查詢");
						} else if (dateFlag == 2) {
							// const paramsData = res.data
							// detectDepartment(department.value, paramsData)

							deartmentSearchResult2.value = res.data;
							console.log(deartmentSearchResult2.value);
							console.log(department.value + "部門查詢2");
						}
						resolve();
					});
			});
		}

		function detectDepartment(department, paramsData) {
			// console.log(department, paramsData);
			if (department == "A") {
				oneScore1.value[0] = paramsData["001"].score[0];
				oneScore1.value[1] = paramsData["001"].score[1];
				oneScore1.value[2] = paramsData["001"].score[2];
				oneScore1.value[3] = paramsData["001"].score[3];
				oneScore1.value[4] = paramsData["001"].score[4];

				oneScore2.value[0] = paramsData["002"].score[0];
				oneScore2.value[1] = paramsData["002"].score[1];
				oneScore2.value[2] = paramsData["002"].score[2];
				oneScore2.value[3] = paramsData["002"].score[3];
				oneScore2.value[4] = paramsData["002"].score[4];

				oneScore3.value[0] = paramsData["003"].score[0];
				oneScore3.value[1] = paramsData["003"].score[1];
				oneScore3.value[2] = paramsData["003"].score[2];
				oneScore3.value[3] = paramsData["003"].score[3];
				oneScore3.value[4] = paramsData["003"].score[4];

				oneScore4.value[0] = paramsData["004"].score[0];
				oneScore4.value[1] = paramsData["004"].score[1];
				oneScore4.value[2] = paramsData["004"].score[2];
				oneScore4.value[3] = paramsData["004"].score[3];
				oneScore4.value[4] = paramsData["004"].score[4];

				oneScore5.value[0] = paramsData["005"].score[0];
				oneScore5.value[1] = paramsData["005"].score[1];
				oneScore5.value[2] = paramsData["005"].score[2];
				oneScore5.value[3] = paramsData["005"].score[3];
				oneScore5.value[4] = paramsData["005"].score[4];
			} else if (department == "B") {
				twoScore1.value[0] = paramsData["001"].score[0];
				twoScore1.value[1] = paramsData["001"].score[1];
				twoScore1.value[2] = paramsData["001"].score[2];
				twoScore1.value[3] = paramsData["001"].score[3];
				twoScore1.value[4] = paramsData["001"].score[4];
			} else if (department == "C") {
				threeScore1.value[0] = paramsData["001"].score[0];
				threeScore1.value[1] = paramsData["001"].score[1];
				threeScore1.value[2] = paramsData["001"].score[2];
				threeScore1.value[3] = paramsData["001"].score[3];
				threeScore1.value[4] = paramsData["001"].score[4];

				threeScore2.value[0] = paramsData["002"].score[0];
				threeScore2.value[1] = paramsData["002"].score[1];
				threeScore2.value[2] = paramsData["002"].score[2];
				threeScore2.value[3] = paramsData["002"].score[3];
				threeScore2.value[4] = paramsData["002"].score[4];

				threeScore3.value[0] = paramsData["003"].score[0];
				threeScore3.value[1] = paramsData["003"].score[1];
				threeScore3.value[2] = paramsData["003"].score[2];
				threeScore3.value[3] = paramsData["003"].score[3];
				threeScore3.value[4] = paramsData["003"].score[4];

				threeScore4.value[0] = paramsData["004"].score[0];
				threeScore4.value[1] = paramsData["004"].score[1];
				threeScore4.value[2] = paramsData["004"].score[2];
				threeScore4.value[3] = paramsData["004"].score[3];
				threeScore4.value[4] = paramsData["004"].score[4];

				threeScore5.value[0] = paramsData["005"].score[0];
				threeScore5.value[1] = paramsData["005"].score[1];
				threeScore5.value[2] = paramsData["005"].score[2];
				threeScore5.value[3] = paramsData["005"].score[3];
				threeScore5.value[4] = paramsData["005"].score[4];

				threeScore6.value[0] = paramsData["006"].score[0];
				threeScore6.value[1] = paramsData["006"].score[1];
				threeScore6.value[2] = paramsData["006"].score[2];
				threeScore6.value[3] = paramsData["006"].score[3];
				threeScore6.value[4] = paramsData["006"].score[4];

				threeScore7.value[0] = paramsData["007"].score[0];
				threeScore7.value[1] = paramsData["007"].score[1];
				threeScore7.value[2] = paramsData["007"].score[2];
				threeScore7.value[3] = paramsData["007"].score[3];
				threeScore7.value[4] = paramsData["007"].score[4];

				threeScore8.value[0] = paramsData["008"].score[0];
				threeScore8.value[1] = paramsData["008"].score[1];
				threeScore8.value[2] = paramsData["008"].score[2];
				threeScore8.value[3] = paramsData["008"].score[3];
				threeScore8.value[4] = paramsData["008"].score[4];

				threeScore9.value[0] = paramsData["009"].score[0];
				threeScore9.value[1] = paramsData["009"].score[1];
				threeScore9.value[2] = paramsData["009"].score[2];
				threeScore9.value[3] = paramsData["009"].score[3];
				threeScore9.value[4] = paramsData["009"].score[4];

				threeScore10.value[0] = paramsData["010"].score[0];
				threeScore10.value[1] = paramsData["010"].score[1];
				threeScore10.value[2] = paramsData["010"].score[2];
				threeScore10.value[3] = paramsData["010"].score[3];
				threeScore10.value[4] = paramsData["010"].score[4];

				threeScore11.value[0] = paramsData["011"].score[0];
				threeScore11.value[1] = paramsData["011"].score[1];
				threeScore11.value[2] = paramsData["011"].score[2];
				threeScore11.value[3] = paramsData["011"].score[3];
				threeScore11.value[4] = paramsData["011"].score[4];

				threeScore12.value[0] = paramsData["012"].score[0];
				threeScore12.value[1] = paramsData["012"].score[1];
				threeScore12.value[2] = paramsData["012"].score[2];
				threeScore12.value[3] = paramsData["012"].score[3];
				threeScore12.value[4] = paramsData["012"].score[4];

				threeScore13.value[0] = paramsData["013"].score[0];
				threeScore13.value[1] = paramsData["013"].score[1];
				threeScore13.value[2] = paramsData["013"].score[2];
				threeScore13.value[3] = paramsData["013"].score[3];
				threeScore13.value[4] = paramsData["013"].score[4];

				threeScore14.value[0] = paramsData["014"].score[0];
				threeScore14.value[1] = paramsData["014"].score[1];
				threeScore14.value[2] = paramsData["014"].score[2];
				threeScore14.value[3] = paramsData["014"].score[3];
				threeScore14.value[4] = paramsData["014"].score[4];
			} else if (department == "D") {
				fourScore1.value[0] = paramsData["001"].score[0];
				fourScore1.value[1] = paramsData["001"].score[1];
				fourScore1.value[2] = paramsData["001"].score[2];
				fourScore1.value[3] = paramsData["001"].score[3];
				fourScore1.value[4] = paramsData["001"].score[4];

				fourScore2.value[0] = paramsData["002"].score[0];
				fourScore2.value[1] = paramsData["002"].score[1];
				fourScore2.value[2] = paramsData["002"].score[2];
				fourScore2.value[3] = paramsData["002"].score[3];
				fourScore2.value[4] = paramsData["002"].score[4];
			}
		}

		// function detectDepartment(department, paramsData) {
		//   if(department == 'A'){
		//       const scoreTimes = paramsData
		//       const tempArr = ['001', '002', '003', '004', '005']
		//       let score_1 = 0
		//       let score_2 = 0
		//       let score_3 = 0
		//       let score_4 = 0
		//       let score_5 = 0
		//       let i = 0
		//       for(i; i <= 4; i++){
		//         score_1 += scoreTimes[tempArr[i]].score[0]
		//         score_2 += scoreTimes[tempArr[i]].score[1]
		//         score_3 += scoreTimes[tempArr[i]].score[2]
		//         score_4 += scoreTimes[tempArr[i]].score[3]
		//         score_5 += scoreTimes[tempArr[i]].score[4]
		//       }

		//       score.value[0] = score_1
		//       score.value[1] = score_2
		//       score.value[2] = score_3
		//       score.value[3] = score_4
		//       score.value[4] = score_5
		//   }else if(department == 'B'){
		//     const scoreTimes = paramsData
		//     const tempArr = ['001']
		//       score.value[0] += scoreTimes[tempArr[0]].score[0]
		//       score.value[1] += scoreTimes[tempArr[0]].score[1]
		//       score.value[2] += scoreTimes[tempArr[0]].score[2]
		//       score.value[3] += scoreTimes[tempArr[0]].score[3]
		//       score.value[4] += scoreTimes[tempArr[0]].score[4]
		//   }else if(department == 'C'){
		//       const scoreTimes = paramsData
		//       const tempArr = ['001', '002', '003', '004', '005']
		//       let score_1 = 0
		//       let score_2 = 0
		//       let score_3 = 0
		//       let score_4 = 0
		//       let score_5 = 0
		//       let i = 0
		//       for(i; i <= 4; i++){
		//         score_1 += scoreTimes[tempArr[i]].score[0]
		//         score_2 += scoreTimes[tempArr[i]].score[1]
		//         score_3 += scoreTimes[tempArr[i]].score[2]
		//         score_4 += scoreTimes[tempArr[i]].score[3]
		//         score_5 += scoreTimes[tempArr[i]].score[4]
		//       }

		//       score.value[0] = score_1
		//       score.value[1] = score_2
		//       score.value[2] = score_3
		//       score.value[3] = score_4
		//       score.value[4] = score_5
		//   }else if(department == 'D'){
		//       const scoreTimes = paramsData
		//       const tempArr = ['001', '002']
		//       let score_1 = 0
		//       let score_2 = 0
		//       let score_3 = 0
		//       let score_4 = 0
		//       let score_5 = 0
		//       let i = 0
		//       for(i; i <= 1; i++){
		//         score_1 += scoreTimes[tempArr[i]].score[0]
		//         score_2 += scoreTimes[tempArr[i]].score[1]
		//         score_3 += scoreTimes[tempArr[i]].score[2]
		//         score_4 += scoreTimes[tempArr[i]].score[3]
		//         score_5 += scoreTimes[tempArr[i]].score[4]
		//       }

		//       score.value[0] = score_1
		//       score.value[1] = score_2
		//       score.value[2] = score_3
		//       score.value[3] = score_4
		//       score.value[4] = score_5
		//   }
		// }

		function place_analyze(dateFlag) {
			const d = { 0: date, 2: date2 };
			return new Promise((resolve) => {
				axios
					.post(
						"https://hospitalstaffassessmentserver.azurewebsites.net:443/sub_department_analyze",
						{
							start_date: d[dateFlag][0],
							end_date: d[dateFlag][1],
							department_ID: department.value,
							place_sub_number: place.value,
						}
					)
					.then((res) => {
						if (dateFlag == 0) {
							placeSearchResult.value = res.data;
							const paramsData = res.data;
							detectEmployeeSelect(paramsData);
							console.log(placeSearchResult.value);
							console.log(
								department.value +
									"部門" +
									place.value +
									"地點查詢"
							);
						} else if (dateFlag == 2) {
							placeSearchResult2.value = res.data;
							const paramsData = res.data;
							detectEmployeeSelect(paramsData);
							console.log(placeSearchResult2.value);
							console.log(
								department.value +
									"部門" +
									place.value +
									"地點查詢2"
							);
						}

						resolve();
					});
			});
		}

		function detectEmployeeSelect(paramsData) {
			const scoreTimes = paramsData;
			console.log(paramsData);
			score.value[0] = scoreTimes[employee.value].score[0];
			score.value[1] = scoreTimes[employee.value].score[1];
			score.value[2] = scoreTimes[employee.value].score[2];
			score.value[3] = scoreTimes[employee.value].score[3];
			score.value[4] = scoreTimes[employee.value].score[4];
		}

		function get_employee_options() {
			axios
				.post(
					"https://hospitalstaffassessmentserver.azurewebsites.net:443/get_employee_options",
					{
						start_date: date[0],
						end_date: date[1],
						department_ID: department.value,
						place_sub_number: place.value,
					}
				)
				.then((res) => {
					employeesList.value = res.data;
					console.log("已載入員工選項名單");
				});
		}

		function isShowList(selector, key) {
			if (selector == "P") {
				employeeListShow.value = false;
				placeListShow.value =
					department.value != "000" ? !placeListShow.value : false;
				if (key) {
					place.value = key;
				}
			}
			if (selector == "E") {
				employeeListShow.value =
					department.value != "000" && place.value != 0
						? !employeeListShow.value
						: false;
				if (key) {
					employee.value = key;
				}
				if (employee.value !== "000") {
					console.log("指定員工：" + employee.value);
				}
			}
		}

		watch(date, () => {
			if (mode.value == 4) {
				employee.value = "000";
			}
		});
		//處理比對資料，可能可以再優化
		watch(date2, () => {
			if (mode.value == 1) {
				all_analyze(2);
			} else if (mode.value == 2) {
				department_analyze(2);
			} else if (mode.value == 4) {
				place_analyze(2);
			}
		});
		watch(department, () => {
			place.value = "000";
			employee.value = "000";
		});

		watch(place, () => {
			employee.value = "000";
		});
		watch(
			//判斷篩選方式，mode:1全院查詢，2部門查詢,3地點查詢,4顯示個別員工
			[department, place, employee, date],
			async ([departmentNew, placeNew, employeeNew]) => {
				placeListShow.value = false;
				employeeListShow.value = false;
				if (departmentNew == "000") {
					await all_analyze(0);
					await all_analyze(2);
					mode.value = 1;
				} else if (placeNew == "000") {
					await department_analyze(0);
					await department_analyze(2);
					mode.value = 2;
				} else if (employeeNew == "000") {
					get_employee_options(); //取得員工選單
					await place_analyze(0);
					mode.value = 3;
				} else {
					await place_analyze(2);
					mode.value = 4;
				}
			},
			{ immediate: true }
		);

		return {
			mode,
			date,
			date2,
			department,
			place,
			employee,
			departmentsList,
			placesList,
			employeesList,
			placeListShow,
			employeeListShow,
			hostipalSearchResult,
			deartmentSearchResult,
			placeSearchResult,
			hostipalSearchResult2,
			deartmentSearchResult2,
			placeSearchResult2,
			all_analyze,
			department_analyze,
			place_analyze,
			get_employee_options,
			isShowList,
			testA,
			score,
			score1,
			score2,
			score3,
			score4,
			oneScore1,
			oneScore2,
			oneScore3,
			oneScore4,
			oneScore5,
			twoScore1,
			threeScore1,
			threeScore2,
			threeScore3,
			threeScore4,
			threeScore5,
			threeScore6,
			threeScore7,
			threeScore8,
			threeScore9,
			threeScore10,
			threeScore11,
			threeScore12,
			threeScore13,
			threeScore14,
			fourScore1,
			fourScore2,
		};
	},

	mounted() {},
	updated() {},
};
</script>

<style type="text/css" src="@/assets/style.css"></style>
