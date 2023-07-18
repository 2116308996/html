import Vue from 'vue'

import Films from '@/views/Films.vue'
import Cinemas from '@/views/Cinemas.vue'
import Center from '@/views/Center.vue'
Vue.use(VueRouter)// 注册路由插件

//配置表
const routes=[
	{
		path:'/films',
		component:Films
	},
	{
		path:'/cinemas',
		component:Cinemas
	},
	{
		path:'/center',
		component:Center
	}
]

const router=new VueRouter({
	routes
})

export default router