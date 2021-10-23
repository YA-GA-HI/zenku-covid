<template>
<div class="covid-container">
    <div :class="{
        'covid-box':true,
        //'covid-box-dark':this.$store.state.mode == 'dark'
        }">
        <span :class="{
            'font-bold block mb-4 ':true,
            //'text-white':this.$store.state.mode == 'dark'
            }">
            {{ title }}
        </span>

        <span :class="{
            'text-4xl font-bold  mb-4 block':true,
            color:true  }">
            {{data.total}}
        </span>

        <div class="flex mb-2  w-auto">
            <div :class="{
                ' ml-10 md:ml-9 rounded-lg px-1  text-base':true,
                //'text-white bg-indigo-500':this.$store.state.mode == 'dark',
                //'bg-gray-100 text-purple-600':this.$store.state.mode !== 'dark'
                }">
                {{'+'+data.new}}
            </div>

            <div :class="{
                'text-white rounded-md px-1 float-right ml-auto md:mr-9 mr-10    text-base':true,
                'bg-blue-400':data.newfull< 300000,
                'bg-green-400':data.newfull< 600000,
                'bg-yellow-300':data.newfull< 800000,
                'bg-yellow-600':data.newfull< 900000,
                'bg-red-500':data.newfull >= 900000}">
                {{(Math.floor(data.newfull * 10000 / data.totalfull)/100 )+'%'}}
            </div>

        </div>

    </div>

</div>
</template>

<script>
export default {
props:['title',"data","color"]
}
</script>

<style lang="postcss" scoped>

.covid-container{
    @apply  w-full sm:w-1/2 p-2 lg:w-1/4  mb-4 ;
}

.covid-box{
    @apply text-indigo-900 cursor-pointer border-2 py-4 shadow-xl block rounded-xl w-full mx-auto;
}

.covid-box-dark{
    @apply bg-indigo-800 border-blue-900 ;
}

</style>