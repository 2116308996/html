<template>
	<td ref="headerLineone" width="20%">
	                        <div class="elHeadCon">
	                            <div class="headerCon1">实施单位</div>
	                            <div class="headerCon2">学习情况</div>
	                            <div ref="headerLine" class="headerLine" :style="{height:heightone+'px',transform: angleone}" />
	                        </div>
	                    </td>
</template>

<script>
	function computedangle() {
	            heightone.value = Math.sqrt(headerLineone.value.clientHeight * headerLineone.value.clientHeight + headerLineone.value.clientWidth * headerLineone.value.clientWidth)
	            angleone.value = 'rotate(-' + (180 / (Math.PI / Math.atan((headerLineone.value.clientWidth / headerLineone.value.clientHeight)))) + 'deg)'
	        }
	        function computedangles() {
	            window.onresize = () => {
	                computedangle()
	            }
	        }
</script>

<style>
	.elHeadCon {
	    height: 50px;
	    position: relative;
	    }
	    .headerCon1 {
	    position: absolute;
	    left: 10%;
	    bottom: 10%;
	    }
	    .headerCon2 {
	    position: absolute;
	    right: 10%;
	    top: 10%;
	    }
	    .headerLine {
	    width: 1px;
	    height: 187px;
	    transform: rotate(-74.6deg); /*这里需要自己调整，根据线的位置*/
	    transform-origin: top;
	    background-color: rgb(164, 199, 231);
	    }
</style>