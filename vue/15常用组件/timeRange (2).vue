<template>
    <div>
        <div class="box">
            <div class="boxtop">
                <el-radio-group v-model="radio1" size="small" @change="click1()">
                    <el-radio-button label="1">本日</el-radio-button>
                    <el-radio-button label="2">本周</el-radio-button>
                    <el-radio-button label="3">本月</el-radio-button>
                    <el-radio-button label="4">本季</el-radio-button>
                    <el-radio-button label="5">本年</el-radio-button>
                    <el-radio-button label="6">开累</el-radio-button>
                </el-radio-group>
            </div>
            <div class="boxbottom">
                <span @click="changedate(-1)">
                    &lt;
                </span>
                <el-date-picker
                    v-model="date1"
                    size="small"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    unlink-panels
                    width="300px"
                />
                <span @click="changedate(1)">
                    &gt;
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
import moment from 'moment'
const date1 = ref([])
const radio1 = ref('')
onMounted(() => {
    date1.value[0] = new Date()
    date1.value = [getMonthdate('s', 0), new Date()]
})
function  click1() {
    const end = new Date()
    var start = new Date()
    switch (radio1.value) {
        case '1': start = getDate(0);break
        case '2': start = getWeek(0);break
        case '3': start = getMonthdate('s', 0);break
        case '4': start = getQuater('s', 0); break
        case '5': start = getYear('s', 0);break
        case '6': start = new Date(1900, 0, 1, 0, 0, 0);break
    }
    date1.value = [start, end]
    console.log(date1.value)
}
function    getDate(dates) {
    var dd = new Date()
    var n = dates || 0
    dd.setDate(dd.getDate() + n)
    var y = dd.getFullYear()
    var m = dd.getMonth() + 1
    var d = dd.getDate()
    m = m < 10 ? '0' + m : m
    d = d < 10 ? '0' + d : d
    var day = new Date(y, m - 1, d, 0, 0, 0)
    return day
}
// function   getMonday(type, dates) {
//     var now = new Date()
//     var nowTime = now.getTime()
//     var day = now.getDay()
//     var longTime = 24 * 60 * 60 * 1000
//     var n = longTime * 7 * (dates || 0)
//     var dd
//     if (type == 's') {
//         dd = nowTime - (day - 1) * longTime + n
//     }
//     if (type == 'e') {
//         dd = nowTime + (7 - day) * longTime + n
//     }
//     dd = new Date(dd)
//     var y = dd.getFullYear()
//     var m = dd.getMonth() + 1
//     var d = dd.getDate()
//     m = m < 10 ? '0' + m : m
//     d = d < 10 ? '0' + d : d
//     var days = new Date(y, m - 1, d, 0, 0, 0)
//     return days
// }
function   getWeek(n) {
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var day = now.getDay() // 返回星期几的某一天;
    n = day == 0 ? n + 6 : n + (day - 1)
    now.setDate(now.getDate() - n)
    var date = now.getDate()
    var s = new Date(year, month - 1, date, 0, 0, 0)
    return s
}
function  getMonthdate(type, months) {
    var d = date1.value[0]
    var year = d.getFullYear()
    var month = d.getMonth() + 1
    if (Math.abs(months) > 12) {
        months = months % 12
    }
    if (months != 0) {
        if (month + months > 12) {
            year++
            month = (month + months) % 12
        } else if (month + months < 1) {
            year--
            month = 12 + month + months
        } else {
            month = month + months
        }
    }
    month = month < 10 ? '0' + month : month
    // var date = d.getDate()
    var firstday = new Date(year, month - 1, 1, 0, 0, 0)
    var lastday = ''
    if (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12') {
        lastday = new Date(year, month - 1, 31, 23, 59, 59)
    } else if (month == '02') {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) {
            lastday = new Date(year, month - 1, 29, 23, 59, 59)
        } else {
            lastday = new Date(year, month - 1, 28, 23, 59, 59)
        }
    } else {
        lastday = new Date(year, month - 1, 30, 23, 59, 59)
    }

    var day = ''
    if (type == 's') {
        day = firstday
    } else {
        day = lastday
    }
    return day
}
function  getQuater(type, n) {
    let currentQuarter = moment(date1.value[0]).quarter() // 当前是第几季度
    let currentYear = moment(date1.value[0]).year() // 当前年
    let getQuar = currentQuarter + n
    // 本季度开始
    if (n == 1 && currentQuarter == 4) {
        currentYear++
        getQuar = 1
    }
    if (n == -1 && currentQuarter == 1) {
        currentYear--
        getQuar = 4
    }
    if (type == 's') {
        let startMoth = moment(moment(currentYear + '-01-01').toDate()).quarter(getQuar)
        return moment(startMoth)._d
    } else if (type == 'e') {
        let endMonth = 3 * parseInt(getQuar) // 当季度最后一个月
        /* 对月数进行格式化 */
        if (endMonth < 10) endMonth = '0' + endMonth
        else endMonth += ''
        let endMonthDays = moment(currentYear + '-' + endMonth).daysInMonth() // 末尾月天数
        let endDays = new Date(currentYear, endMonth - 1, endMonthDays, 23, 59, 59)// 完整年月日整合
        return endDays
    }
}
function  getYear(type, dates) {
    var dd = new Date()
    var n = dates || 0
    var year = dd.getFullYear() + Number(n)
    var day
    if (type == 's') {
        day = new Date(year, 0, 1, 0, 0, 0)
    }
    if (type == 'e') {
        day = year + '-12-31'
    }
    if (!type) {
        day = year + '-01-01/' + year + '-12-31'
    }
    return day
}
function   changedate(n) {
    var end = new Date()
    var start = date1.value[0]
    switch (radio1.value) {
        case '1':
            start.setTime(date1.value[0].getTime() + 3600 * 1000 * 24 * n)
            end.setTime(start.getTime() + 3600 * 1000 * 24 * 1 - 1)
            break
        case '2':
            start.setTime(date1.value[0].getTime() + 3600 * 1000 * 24 * 7 * n)
            end.setTime(start.getTime() + 3600 * 1000 * 24 * 7 - 1)
            break
        case '3':
            start = getMonthdate('s', n)
            end = getMonthdate('e', n)
            break
        case '4':
            start = getQuater('s', n)
            end = getQuater('e', n)
            break
        case '5':
            start.setFullYear(start.getFullYear() + n, 0, 1)
            end = new Date(start.getFullYear(), 11, 31, 23, 59, 59)
            break
        case '6': start = new Date(1900, 0, 1, 0, 0, 0); break
    }
    date1.value = [start, end]
}

</script>

<style>
.box{
    width: 384px;
}
.boxtop{
    width: 284px;
    margin: 0 auto;
}
.demo-date-picker .demonstration {
  display: block;
  color: red;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-radio-group{
    background-color: red;
}
</style>
