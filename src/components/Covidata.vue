<template>
<div :class="{
	'h-full w-full flex-wrap  text-2xl lg:flex my-20 bg-white':true,
	'bg-indigo-900':this.$store.state.mode == 'dark'}">
		
		<!--infections-->
		<Covidbox title="Infections" color='text-pink-500' :data="infections" />

		<Covidbox title="Deaths" color='text-green-500' :data="deaths" />

		<Covidbox title="Recovered" color='text-orange-400' :data="recovered" />

		<Covidbox title="Active" color='text-yeellow-400' :data="active" />


</div>
</template>

<script>

import Covidbox from './Covidbox.vue'
export default {
props:['infections','deaths','recovered','active'],
components:{
	Covidbox
}
}
</script>
