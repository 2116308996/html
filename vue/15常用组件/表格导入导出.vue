<template>
	<el-upload class="upload" action="#" :show-file-list="false" :on-change="handleChange" accept="'.xlsx','.xls'"
		:auto-upload="false">
		<el-button size="mini" type="primary">导入</el-button>
	</el-upload>
</template>
<script src="~/lib/sheetjs/dist/XLSXS.js" asp-append-version="true"></script>
<script src="~/lib/sheetjs/dist/xlsx.extendscript.js" asp-append-version="true"></script>
<script>
	getCustomHeader: function() {
			let arr = this.b.map(item => {
				// 这里根据自己的需求进行修改
				return {
					序列号: item.id,
					姓名: item.name
				};
			});
			console.log(arr)

			var wb = XLSX.utils.json_to_sheet(arr)
			
			/* const wbb = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(wbb, wb, "Sheet1");
			wb = wbb */
						
			console.log(wb)

			wb['!cols'] = [{
					wpx: 150,
				},
				{
					wpx: 50,
				},
				{
					wpx: 50,
				},
				{
					wpx: 50,
				},
				{
					wpx: 50,
				},
				{
					wpx: 180,
				},
			];
			for (let key in wb) {
				//vue3  json导出Excel添加判断  if (key!='!ref'&&key!='!fullref') {}
				wb[key].s = {
					alignment: {
						horizontal: 'center',
					},
					border: {
						top: {
							style: 'thin',
						},
						bottom: {
							style: 'thin'
						},
						left: {
							style: 'thin'
						},
						right: {
							style: 'thin'
						}
					},
				}
			}
			const wbb = XLSX.utils.book_new();

			// 将工作表放入工作簿中

			XLSX.utils.book_append_sheet(wbb, wb, "data");

			// 生成文件并下载1
			var wbout = XLSXS.write(wbb, {
				bookType: "xlsx",
				bookSST: false,
				type: "binary"
			});
			var tmpDown = new Blob([self.s2ab(wbout)], {
				type: "application/octet-stream;charset=utf-8"
			})
			var href = URL.createObjectURL(tmpDown); //创建对象超链接
			let pom = document.createElement('a');
			pom.setAttribute('href', href);
			pom.setAttribute('download', '万能机压力机数据统计.xlsx');
			pom.click();
			setTimeout(function() { //延时释放
				URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
			}, 100);
			return wbout;
			// 生成文件并下载2				
			XLSX.writeFile(wbb, "sss" + ".xlsx");
			// 生成文件并下载3		
			XLSXS.writeFile(wbb, "sss" + ".xlsx");
		},

		handlechange2(file, filelist) {
			if (file.raw) {
				if (file.raw.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
					file.raw.type == 'application/vnd.ms-excel') {
					this.handleexcel2(file.raw)
				} else {
					this.$message({
						type: 'warning',
						message: '文件格式错误，请删除后重新上传！'
					})
				}
			} else {
				this.$message({
					type: 'warning',
					message: '请上传文件！'
				})
			}
		},
		handleexcel2(filetemp) {
			var rABS = false
			var reader = new FileReader()
			reader.onload = function(e) {
				if (rABS) {
					wb = XLSX.read(btoa(fixdata(e.target.result)), {
						//手动转化
						type: "base64"
					});
				} else {
					wb = XLSX.read(e.target.result, {
						type: "binary"
					});
				}
				outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); //outdata就是你想要的东西
				console.log('未处理的原始数据如下：');
				console.log(outdata);
				//此处可对数据进行处理
				/*let arr = [];
				outdata.map(v => {
				    let obj = {}
				    obj.code = v['code']
				    obj.name = v['name']
				    obj.pro = v['province']
				    obj.cit = v['city']
				    obj.dis = v['district']
				    arr.push(obj)
				});*/
				/*  _this.da = arr;
				  _this.dalen = arr.length;*/
				/* return arr;*/
			};
			if (rABS) {
				reader.readAsArrayBuffer(filetemp);
			} else {
				reader.readAsBinaryString(filetemp);
			}
		},


		handleChange(file, fileList) {
			this.fileTemp = file.raw;
			if (this.fileTemp) {
				if ((this.fileTemp.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') ||
					(this.fileTemp.type == 'application/vnd.ms-excel')) {
					this.handleExcel(this.fileTemp);
				} else {
					this.$message({
						type: 'warning',
						message: '文件格式错误，请删除后重新上传！'
					})
				}
			} else {
				this.$message({
					type: 'warning',
					message: '请上文件！'
				})
			}
		},
		handleExcel(fileTemp) {
			let _this = this;
			this.file = fileTemp;
			var rABS = false; //是否将文件读取为二进制字符串
			var f = this.file;

			var reader = new FileReader();
			FileReader.prototype.readAsBinaryString = function(f) {
				var binary = "";
				var rABS = false; //是否将文件读取为二进制字符串
				var wb; //读取完成的数据
				var outdata;
				var reader = new FileReader();
				reader.onload = function(e) {
					var bytes = new Uint8Array(reader.result);
					var length = bytes.byteLength;
					for (var i = 0; i < length; i++) {
						binary += String.fromCharCode(bytes[i]);
					}

					if (rABS) {
						wb = XLSX.read(btoa(fixdata(binary)), {
							//手动转化
							type: "base64"
						});
					} else {
						wb = XLSX.read(binary, {
							type: "binary"
						});
					}
					outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]); //outdata就是你想要的东西
					console.log('未处理的原始数据如下：');
					console.log(outdata);
					//此处可对数据进行处理
					let arr = [];
					outdata.map(v => {
						let obj = {}
						obj.code = v['code']
						obj.name = v['name']
						obj.pro = v['province']
						obj.cit = v['city']
						obj.dis = v['district']
						arr.push(obj)
					});
					_this.da = arr;
					_this.dalen = arr.length;
					return arr;
				};
				reader.readAsArrayBuffer(f);
			};
			if (rABS) {
				reader.readAsArrayBuffer(f);
			} else {
				reader.readAsBinaryString(f);
			}
		},
</script>

<style>
	.el-upload__input {
		display: none !important;
	}
</style>