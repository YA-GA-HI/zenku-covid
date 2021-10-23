<template>
<header :class="
          {'navbar':true,
          'navbar-light':true
          }"
          id="nav">
  <!--logo-->
  <div class="md:mx-2 ml-1">
      <span class="text-purple-700 lg:text-4xl text-xl font-bold">Z</span>
      <span class=" font-light lg:text-2xl text-sm mt-2">enku-covid</span>
  </div>

  <!--home-->
  <router-link to='/' class="nav-link block ml-auto">{{ home}}</router-link>

  <!--country-->
  <router-link to='/country' class="nav-link hidden">{{ country}}</router-link>

  <!--about-->
  <router-link to='/about' class="nav-link hidden">{{ about}}</router-link>

  <!--contact-->
  <router-link to='/contact' class="nav-link hidden">{{ contact }}</router-link>

  <!--mode-->
  <div class="mode">
    <span class="light-mode icon-sun"  @click="changemode()" ></span>
    <span class="dark-mode icon-moon"   @click="changemode()"></span>
    <div :class="{
      'cursor' :true,
      'right-1':false,
      'left-1':true,
      }"></div> 

  </div>
</header>
</template>

<script>
export default {

data(){
  return{
      home:'Home',
      country:'Country',
      contact:'Contact us',
      about:'About',
  }
},

methods:{
  changemode(){
    if(this.$store.state.mode == 'dark'){
        this.$store.state.mode = 'light'
        document.cookie="mode:light;"
    }else{
        this.$store.state.mode = 'dark'
        document.cookie="mode:dark;"
    }
  }
}

}
</script>

<style  lang="postcss" scoped>
.navbar{
  @apply  flex items-center relative  text-base  md:text-xl py-5  px-1 md:px-7;
}
.navbar-dark{
  @apply bg-indigo-900 text-white;
}

.navbar-light{
  @apply bg-white text-gray-600;
}

.nav-link{
  @apply rounded-md duration-200  lg:block hover:text-white  float-right mr-6 p-2  hover:bg-purple-700 ;
}

.mode{
  @apply rounded-full flex duration-200 justify-between  relative h-full   hover:text-white w-16 md:w-20  float-right mr-6 py-1 md:py-2 px-1 md:px-1 bg-purple-700;
}


.light-mode{
  @apply h-6 md:h-7 w-6 md:w-7 flex duration-300 items-center rounded-full text-2xl z-10  md:text-3xl font-bold text-left md:text-center text-white;
}

.dark-mode{
  @apply h-6 md:h-7 w-6 md:w-7 flex items-center rounded-full text-lg z-10 md:text-xl text-center  text-white;
}

.cursor{
  @apply bg-pink-600 absolute top-1/2 rounded-full z-0  transform -translate-y-1/2   w-6 h-6 md:w-8 md:h-8 ;
}




</style>
