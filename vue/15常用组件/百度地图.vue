<template>
	<div id="location"  style="height:calc(70vh - 55px);width:100%"></div>
</template>

<script>
	 <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=NU1XFbBSV7gck6fKLbhuic2iX0KzRIVd"></script>
	 //谷歌转百度
	 googletoencrypt: function (gg_lat, gg_lon) {
	             var x_pi = 3.14159265358979324 * 3000.0 / 180.0;
	     var point = {};
	     var x = gg_lon;
	     var y = gg_lat;
	     var z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
	     var theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
	     var bd_lon = z * Math.cos(theta) + 0.0065;
	     var bd_lat = z * Math.sin(theta) + 0.006;
	     point.lat = bd_lat;
	     point.lng = bd_lon;
	     return point;
	 },
	         getpoint: function () {
	             console.log("aa", this.factorCurrent)
	             var self = this;
	             
	                 self.map = new BMap.Map("location");
	                 var map = self.map;
	                
	             let keys = Object.keys(self.groupList);
	             var Points = []
	             self.groupList[keys[0]].forEach((item, index) => {
	                 var baidu = this.googletoencrypt(item.measureValue, self.groupList[keys[1]][index].measureValue)
	                 var point = new BMap.Point(baidu.lat,baidu.lng )
	                 Points.push(point)
	             })
	             console.log(Points)
	             Points.forEach((item, index) => {
	                 if (index == 0) {
	                     var marker = new BMap.Marker(item);
	                     map.centerAndZoom(item, 16);  // 初始化地图,设置中心点坐标和地图级别 
	                     var lab = new BMap.Label("起点", { position: item })
	                     lab.setStyle({
	                         backgroundColor:"rgba(0,0,0,0)",
	                         border:"none"
	                     })
	                     map.addOverlay(lab)
	                     map.addOverlay(marker);
	                     console.log(item)
	                 } else if (index == Points.length - 1) {
	                     var marker = new BMap.Marker(item);
	                     var lab = new BMap.Label("终点", { position: item })
	                     lab.setStyle({
	                         backgroundColor: "rgba(0,0,0,0)",
	                         border: "none"
	                     })
	                     map.addOverlay(lab)
	                     map.addOverlay(marker);
	                     console.log(item)
	                 }  
	             })
	 
	        //绘制折线以及样式
	             var trackLine = new BMap.Polyline(Points, {
	                 strokeColor: "blue",//设置颜色
	                 strokeWeight:"18px",//宽度
	                 strokeOpacity: 1,//折线的透明度，取值范围0 - 1
	             });
	             map.addOverlay(trackLine);
	             map.enableScrollWheelZoom(true);
	         },
</script>

<style>
</style>