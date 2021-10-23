<template>
<section id="team" :class="{
  'team section-bg  pb-4 pt-8' :true,
  'team-dark':this.$store.state.mode == 'dark',
  'team':this.$store.state.mode !=='dark'
  }" >
  <div :class="{
    'flex px-5 mt-0':true,
    'ower-text-white':this.$store.state.mode =='dark'
    }" >
    <div class="page-title">
      About
    </div>

    <div :class="{
      'page-min-title':true,
      'text-white':this.$store.state.mode == 'dark'
      }">
      The developer
    </div>

  </div>

  <div :class="{
    'text-left text-3xl px-5 my-14 pb-1':true,
    'text-white':this.$store.state.mode == 'dark'
    }">
    Welcome!
  </div>

  <div class="align-middle mt-10  w-full md:h-80 h-40 text-white bg-gradient-to-r to-purple-700 from-indigo-700 text-6xl">
  </div>
  <div class="align-middle  w-full py-20 text-white bg-gradient-to-r to-purple-700 from-indigo-700 text-2xl sm:text-4xl md:text-6xl">
    Hy! I'm Zenku , and I'm a Web Developer
  </div>
  <div class="align-middle mb-10  w-full md:h-80 h-40 text-white bg-gradient-to-r to-purple-700 from-indigo-700 text-6xl">
  </div>



</section>
</template>
<script>
	export default{
		data(){
			return{
				avatar:1,
			}

		},
		created(){
			this.avatar = Math.ceil(Math.random()*6)
		}
	}
</script>

<style>

</style>
