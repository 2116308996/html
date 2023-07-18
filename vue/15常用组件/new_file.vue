<template>
  <el-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
    <div ref="innerRef">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>

  <el-slider
    v-model="value"
    :max="max"
    :format-tooltip="formatTooltip"
    @input="inputSlider"
  />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElScrollbar } from 'element-plus'

const max = ref(0)
const value = ref(0)
const innerRef = ref<HTMLDivElement>()
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

onMounted(() => {
  max.value = innerRef.value!.clientHeight - 380
})

const inputSlider = (value: number) => {
  scrollbarRef.value!.setScrollTop(value)
}
const scroll = ({ scrollTop }) => {
  value.value = scrollTop
}
const formatTooltip = (value: number) => {
  return `${value} px`
}

function kaishi(){
	var docElm = document.documentElement;
	 (docElm.requestFullscreen) 
	{docElm.requestFullscreen();}
	 else if (docElm.mozRequestFullScreen)
	{docElm.mozRequestFullScreen();}
	 else if (docElm.webkitRequestFullScreen)
	{docElm.webkitRequestFullScreen();}
	 else if (elem.msRequestFullscreen) 
	 {elem.msRequestFullscreen();}}
function guanbi() {if (document.exitFullscreen)
{document.exitFullscreen();}
else if (document.mozCancelFullScreen)
{document.mozCancelFullScreen();}
else if (document.webkitCancelFullScreen) 
{document.webkitCancelFullScreen();}
else if (document.msExitFullscreen)
{document.msExitFullscreen();}}
document.addEventListener("fullscreenchange", function () 
{fullscreenState.innerHTML = (document.fullscreen) ? "" : "not ";}, false);
document.addEventListener("mozfullscreenchange", 
function () 
{fullscreenState.innerHTML = (document.mozFullScreen) ? "" : "not ";}, false);
document.addEventListener("webkitfullscreenchange", 
function () {fullscreenState.innerHTML = 
(document.webkitIsFullScreen) ? "" : "not ";}, false);
document.addEventListener("msfullscreenchange", 
function () {fullscreenState.innerHTML = (document.msFullscreenElement)
 ? "" : "not ";}, false);
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.el-slider {
  margin-top: 20px;
}
</style>
:autoplay="{
                    delay: 10000,
                    disableOnInteraction: false,
                }"
setTimeout(() => {
                var timer3_1 = setInterval(() => {
                    time3_1 += 3
                    table3_1.value.setScrollTop(time3_1)
                    if (time3_1 > long3_1 - 170 + t) {
                        time3_1 = 0
                        table3_1.value.setScrollTop(0)
                    }
                }, 100)
                var timer3_2 = setInterval(() => {
                    time3_2 += 3
                    table3_2.value.setScrollTop(time3_2)
                    if (time3_2 > long3_2 - 150 + t) {
                        time3_2 = 0
                        table3_2.value.setScrollTop(0)
                    }
                }, 100)
            }, 10000)
            setTimeout(() => {
                var timer4 = setInterval(() => {
                    time4 += 3
                    table4.value.setScrollTop(time4)
                    if (time4 > long4 - 400 + t) {
                        time4 = 0
                        table4.value.setScrollTop(0)
                    }
                }, 100)
            }, 15000)
				<template>
				  <el-row class="mb-4">
				    <el-button>Default</el-button>
				    <el-button type="primary">Primary</el-button>
				    <el-button type="success">Success</el-button>
				    <el-button type="info">Info</el-button>
				    <el-button type="warning">Warning</el-button>
				    <el-button type="danger">Danger</el-button>
				  </el-row>
				
				  <el-row class="mb-4">
				    <el-button plain>Plain</el-button>
				    <el-button type="primary" plain>Primary</el-button>
				    <el-button type="success" plain>Success</el-button>
				    <el-button type="info" plain>Info</el-button>
				    <el-button type="warning" plain>Warning</el-button>
				    <el-button type="danger" plain>Danger</el-button>
				  </el-row>
				
				  <el-row class="mb-4">
				    <el-button round>Round</el-button>
				    <el-button type="primary" round>Primary</el-button>
				    <el-button type="success" round>Success</el-button>
				    <el-button type="info" round>Info</el-button>
				    <el-button type="warning" round>Warning</el-button>
				    <el-button type="danger" round>Danger</el-button>
				  </el-row>
				
				  <el-row>
				    <el-button :icon="Search" circle />
				    <el-button type="primary" :icon="Edit" circle />
				    <el-button type="success" :icon="Check" circle />
				    <el-button type="info" :icon="Message" circle />
				    <el-button type="warning" :icon="Star" circle />
				    <el-button type="danger" :icon="Delete" circle />
				  </el-row>
				</template>
				
				<script lang="ts" setup>
				import {
				  Check,
				  Delete,
				  Edit,
				  Message,
				  Search,
				  Star,
				} from '@element-plus/icons-vue'
				</script>
<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>

  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
