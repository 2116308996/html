 this.dartcharthistogram('echartcenter', this.center.xdata, this.center.y1data, this.center.y2data, -30, 300, 100)
 this.dartcharthistogram('echartleft1', this.leftdata.xdata, this.leftdata.y1data, this.leftdata.y2data, 0, 1800, 400)
 this.dartchartcircle(a, 'echartleft2', '125px')
 this.dartchartcircle(b, 'echartright1', '90px')
 this.dartchartcircle(c, 'echartright2', '90px')


 dartcharthistogram: function(dom, xdata, y1data, y2data, angel, max, interval) {
 		let myChart = echarts.init(document.getElementById(dom));

 		myChart.setOption({
 			tooltip: {
 				trigger: 'axis',
 				axisPointer: {
 					type: 'cross',
 					crossStyle: {
 						color: '#999'
 					}
 				},
 				formatter: (data) => {
 					let str = data[0].axisValue + "</br>"
 					data.reverse().forEach(item => {
 						if (item.seriesName == '计划' || item.seriesName == '实际') {
 							str = str + item.marker + item.seriesName + " : " + item.data + "</br>"
 						}
 					})
 					return str
 				}
 			},
 			grid: {
 				top: '18%',
 				bottom: '15%',
 				left: '10%',
 				right: '0%'
 			},
 			legend: {
 				data: ['计划', '实际'],
 				right: '10%',
 				textStyle: {
 					fontSize: 18, //字体大小
 					color: '#ffffff' //字体颜色
 				},
 			},
 			xAxis: [{
 				type: 'category',
 				data: xdata,
 				axisPointer: {
 					type: 'shadow'
 				},
 				axisLabel: {
 					rotate: angel
 				},
 				axisLine: {
 					show: true,
 					lineStyle: {
 						color: '#fff',
 						width: 0.5,
 						type: 'sloid'
 					}
 				}
 			}],
 			yAxis: [{
 				type: 'value',
 				min: 0,
 				max: max,
 				interval: interval,
 				axisLabel: {
 					textStyle: {
 						color: '#fff',
 						margin: 15
 					},
 					formatter: '{value}'
 				},
 				splitLine: {
 					show: true,
 					lineStyle: {
 						type: 'dashed',
 						color: '#113d5e'
 					}
 				}
 			}],
 			series: [{
 					name: '',
 					type: 'pictorialBar',
 					tooltip: {
 						valueFormatter: function(value) {
 							return value;
 						}
 					},
 					symbolSize: [20, 8], // 调整截面形状
 					symbolOffset: [20, 4],
 					z: 12,
 					barGap: '0%',
 					barWidth: 20,
 					itemStyle: {
 						color: 'rgba(16,36,95,0.6)'
 					},
 					data: y2data
 				},
 				{
 					name: '',
 					type: 'bar',
 					tooltip: {
 						valueFormatter: function(value) {
 							return value;
 						}
 					},
 					label: {
 						show: true,
 						position: 'top',
 						color: "white"
 					},
 					itemStyle: {
 						color: () => {
 							return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
 									offset: 0,
 									color: '#01AEF6'
 								},
 								{
 									offset: 1,
 									color: 'rgba(16,36,95,0.6)'
 								}
 							])
 						},
 						opacity: 1
 					},
 					barGap: '0%',
 					barWidth: 20,

 					data: y2data
 				},
 				{
 					name: '计划',
 					type: 'pictorialBar',
 					symbolSize: [20, 8], // 调整截面形状
 					symbolOffset: [0, -5],
 					z: 12,
 					symbolPosition: 'end',
 					barGap: '0%',
 					barWidth: 20,
 					itemStyle: {
 						color: '#008EF2'
 					},
 					data: y2data
 				},
 				{
 					name: '',
 					type: 'pictorialBar',
 					barGap: '0%',
 					barWidth: 20,
 					symbolSize: [20, 8], // 调整截面形状
 					symbolOffset: [0, 4],
 					z: 12,
 					itemStyle: {
 						color: 'rgba(16,36,95,0.6)'
 					},
 					data: y1data
 				},
 				{
 					name: '',
 					type: 'bar',
 					barGap: '0%',
 					barWidth: 20,
 					tooltip: {
 						valueFormatter: function(value) {
 							return value;
 						}
 					},
 					label: {
 						show: true,
 						position: 'top',
 						color: "white"
 					},
 					itemStyle: {
 						color: () => {
 							return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
 									offset: 0,
 									color: '#F5B656'
 								},
 								{
 									offset: 1,
 									color: 'rgba(16,36,95,0.6)'
 								}
 							])
 						},
 						opacity: 1
 					},
 					data: y1data
 				},
 				{
 					name: '实际',
 					type: 'pictorialBar',
 					barGap: '0%',
 					barWidth: 20,
 					symbolSize: [20, 8], // 调整截面形状
 					symbolOffset: [-20, -5],
 					z: 12,
 					symbolPosition: 'end',
 					itemStyle: {
 						color: '#F5B656'
 					},
 					data: y1data
 				},
 			]
 		});
 		window.onresize = myChart.resize;
 	},
 	//绘制echarts
 	dartchartcircle: function(x, dom, size) {
 		let myChart = echarts.init(document.getElementById(dom));
 		var y = 100 * x + '%'
 		myChart.setOption({
 			series: [{
 				type: 'liquidFill',
 				radius: size,
 				data: [x],
 				backgroundStyle: {
 					color: '#0F2C4B'
 				},
 				label: {
 					normal: {
 						formatter: y,
 						color: 'white',
 						insideColor: 'transparent',
 						textStyle: {
 							fontSize: 27,
 							fontWeight: 'bold'
 						}
 					}
 				},
 				color: [{
 					type: 'linear',
 					x: 0,
 					y: 1,
 					x2: 0,
 					y2: 0,
 					colorStops: [{
 						offset: 1,
 						color: ['#6a7feb'] // 0% 处的颜色
 					}, {
 						offset: 0,
 						color: ['#27e5f1'] // 100% 处的颜色
 					}],
 					global: false // 缺省为 false
 				}],
 				outline: {
 					show: true,
 					borderDistance: 5,
 					itemStyle: {
 						borderColor: 'rgba(67,209,100,1)',
 						borderWidth: 0
 					}
 				}
 			}]
 		});
 		window.onresize = myChart.resize;
 	}
 }