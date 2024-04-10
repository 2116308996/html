<template>
</template>

    <script src="~/lib/sheetjs/dist/XLSXS.js" asp-append-version="true"></script>
    <script src="~/lib/sheetjs/dist/xlsx.extendscript.js" asp-append-version="true"></script>
<script>
	//vue3
	import * as XLSX from 'xlsx'
	import XLSXS from 'xlsx-js-style'
	export default{
		data(){
			return{
				selectList:[]
			}
		},
		methods:{
			exportExcel() {
			            var xlsxParam = { raw: true };//转换成excel时，使用原始的格式
			            var wb = XLSX.utils.table_to_book(document.querySelector(".box1"), xlsxParam);//outTable为列表id
			     //json数据导出excel
				 //       let arr=selectList.map(item=>{
			     //               // 这里根据自己的需求进行修改
			     //               return {
			     //                   序列号:item.ID,
			     //                   姓名:item.name,
			     //                   年龄:item.age,
			     //                   性别:item.sex,
			     //               };
			     //           });
					   // var wb=XLSX.utils.json_to_sheet(arr)
						wb.Sheets.Sheet1['!cols'] = [
			                {
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
			            for (let key in wb.Sheets.Sheet1) {
							//vue3  json导出Excel添加判断  if (key!='!ref'&&key!='!fullref') {}
			                wb.Sheets.Sheet1[key].s = {
			                    alignment: {
			                        horizontal: 'center',
									vertical:'center'
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
			            wb.Sheets.Sheet1=this.addRangeBorder(wb['Sheets']['Sheet1']['!merges'],wb['Sheets']['Sheet1'])
			              //const wbb = XLSX.utils.book_new();
			              //XLSX.utils.book_append_sheet(wbb, wb, "data");
						  //XLSXS.writeFile(wbb, '一会管理统计表.xlsx')  //vue3
			            var wbout = XLSXS.write(wb, {
			                bookType: "xlsx",
			                bookSST: false,
			                type: "binary"
			            });
			            var tmpDown = new Blob([this.s2ab(wbout)], { type: "application/octet-stream;charset=utf-8" })
			            var href = URL.createObjectURL(tmpDown); //创建对象超链接
			            let pom = document.createElement('a');
			            pom.setAttribute('href', href);
			            pom.setAttribute('download', '万能机压力机数据统计.xlsx');
			            pom.click();
			            setTimeout(function () { //延时释放
			                URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
			            }, 100);
			            return wbout;
			        },
			        addRangeBorder (range, ws) {
			            let cols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
			            range.forEach(item => {
			              let style = {
			                s: {
			                  border: {
			                    top: { style: 'thin' },
			                    left: { style: 'thin' },
			                    bottom: { style: 'thin' },
			                    right: { style: 'thin' }
			                  }
			                }
			              }
			              // 处理合并行
			              for (let i = item.s.c; i <= item.e.c; i++) {
			                ws[`${cols[i]}${Number(item.e.r) + 1}`] = ws[`${cols[i]}${Number(item.e.r) + 1}`] || style
			                // 处理合并列
			                for (let k = item.s.r + 2; k <= item.e.r + 1; k++) {
			                  ws[cols[i] + k] = ws[cols[k] + item.e.r] || style
			                }
			              }
			            })
			            return ws;
			          },
			        s2ab(s) {
			            var buf = new ArrayBuffer(s.length);
			            var view = new Uint8Array(buf);
			            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
			            return buf;
			        },
					 
		}
	}
</script>

<style>
</style>
