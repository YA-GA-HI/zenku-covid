<template>
<sidebar id="sidebar" :class="{'fixed md:w-20 top-0 w-14   h-full md:text-3xl text-lg py-10   duration-100 left-0  bg-gradient-to-r from-purple-700 to-indigo-700':true }"  >
	<div></div>
	<br>
	<br>

	<router-link to='/' class="h-full  mt-10 overflow-hidden text-white relative md:ml-3 ml-3 pl-5 md:pr-4  ml-1 pr-1.5 py-10 w-full">
			<span class="icon-home"></span>
		</router-link>
		<br>
		<br>
		<br>
	<router-link to='/country' class="h-full  mt-10 overflow-hidden text-white relative md:ml-3 ml-3 pl-5 md:pr-4  ml-1 pr-1.5 py-10 w-full">
			<span class="icon-flag"></span>
		</router-link>
					<br>
		<br>
		<br>

		<router-link to='/about' class="h-full  mt-10 overflow-hidden text-white relative md:ml-3 ml-3 pl-5 md:pr-4  ml-1 pr-1.5 py-10 w-full">
			<span class="icon-information-solid"></span>
		</router-link>
		<br>
		<br>
		<br>
		<br>
		<router-link to='/contact' class="h-full  mt-10 overflow-hidden text-white relative md:ml-3 ml-3 pl-5 md:pr-4  ml-1 pr-1.5 py-10 w-full" >
			<span class="icon-mail"></span>
		</router-link>
		<br>
		<br>
		<br>
		<br>
		<router-link to='/comments' class="h-full  mt-10 overflow-hidden text-white relative md:ml-3 ml-3 pl-5 md:pr-4  ml-1 pr-1.5 py-10 w-full" >
		<span class="icon-chat"></span>
		</router-link>
		<br>


</sidebar>
</template>

<script>
export default {
data(){

},
mounted(){

	},
}
</script>

<style>

</style>
