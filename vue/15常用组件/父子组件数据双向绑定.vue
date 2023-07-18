<template>
	//父子组件数据双向绑定
	//父
	<FormMode v-model="data.formModeProps.visible" :mode="data.formMode" @success="getDataList" />
</template>

<script>
	//子
	const props = defineProps({
	    modelValue: {
	        type: Boolean,
	        default: false
	    }
	})
	const emit = defineEmits(['update:modelValue', 'success'])
	
	let myVisible = computed({
	    get: function() {
	        return props.modelValue
	    },
	    set: function(val) {
	        emit('update:modelValue', val)
	    }
	})
	<input v-model="myVisible"/>
	//父组件使用子组件函数
	//父
	this.$refs['form'].search()
	//子
	defineExpose({
	    search() {
	        getData()
	    }
	})
	//将父组件的prop传递给子组件
	 v-bind="$props"
	 
	 mode: {
	         type: String,
	         default: 'dialog',
			 //验证器  验证值是否在这个范围
	         validator: val => ['dialog', 'jc', 'tc'].includes(val)
	     }
</script>

<style>
</style>