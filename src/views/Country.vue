 <template>
  <div>
  	<div v-if="this.$store.state.country =='' || this.changecountry" class="fixed z-4 top-0 rounded-lt-10xl   left-14  md:left-20 w-full h-200 bg-indigo-900"></div>
  	<div v-if="this.$store.state.country =='' || this.changecountry" class="fixed w-full h-full  bg-gray-800 top-0 left-0 opacity-50 z-8"></div>
  	<div v-if="this.$store.state.country =='' || this.changecountry" class=" rounded-md px-10 py-5 bg-gray-200 w-11/12 sm:w-10/12 h-130  md:w-8/12  mx-auto my-auto inset-0 fixed  z-9">
  			<div class="text-gray-500  text-center mb-3">Choose Your Country:</div>
  			<div class="w-11/12  mx-auto flex rounded-full bg-gray-100 ">
  			<input v-model='search' placeholder="Search Country" class="py-4 px-5 bg-gray-100 focus:outline-none text-gray-400 rounded-l-full w-10/12 float-left">
  				<span class="icon-search  py-5 text-left cursor-pointer bg-gray-100 text-gray-400 rounded-r-full w-2/12 text-center float-right"></span>
  		</div>
  		<div class="my-4 w-11/12 mx-auto  block h-96 overflow-auto">
  			<div v-for='country in this.countries' :key="country" class="w-full" >
  			<div  v-if="(((country.Country.includes(this.search)||country.Country.toLowerCase().includes(this.search)||  country.Country.toUpperCase().includes(this.search)||country.ISO2.toLowerCase().includes(this.search)|| country.Country.includes(this.search) )&& this.search !== '') || this.search== '') && country.Country !== 'Israel'"   class="flex  w-11/12 ml-0  mb-6 mx-auto cursor-pointer  bg-white rounded-md py-3" @click='changec(country)'>
  				<img :src="'flags/'+country.ISO2.toLowerCase()+'.svg'" class=" mx-3  w-6 h-auto ">
  				<span class=" text-xs md:text-base  text-purple-900 mr-auto font-bold">
  				{{country.Country }}</span>
  			</div>
  		</div>
  		</div>
  		</div>


  		<main >
  			<div v-if="this.$store.state.country !=='' && !this.changecountry">
  	<div :class="{'text-left text-3xl px-5 pt-14 mb-6 pb-1':true,'text-white':this.$store.state.mode == 'dark'}">Welcome!</div>
  	<section  class="px-5 mt-0 flex">

  		<img :src="'flags/'+this.$store.state.country.toLowerCase()+'.svg'" class=" mr-3 rounded-md  w-12 h-auto ">
  		<div :class="{'md:text-xl text-base  font-bold    py-4':true,'text-purple-500':this.$store.state.mode !== 'dark','text-white':this.$store.state.mode == 'dark'}">{{this.$store.state.countryname}} Updates</div>
  		<div class="underline font-bold text-purple-600 md:text-xl  cursor-pointer py-4 mx-2" @click='this.changecountry = true ;this.countriess()'>change</div>
  	</section>
  	<div v-if="this.$store.state.country !=='' && !this.changecountry" :class="{'my-8 p-2 sm:p-8 w-11/12 md:w-9/12 lg:w-8/12 bg-white mx-auto border-2 shadow-lg rounded-lg':true,'bg-indigo-800 border-blue-900 shadow-bue-900':this.$store.state.mode == 'dark'}">
  		<column-chart :colors="['#7C3AED','#10B981','#EF4444','#7C3AED','#10B981','#EF4444','#7C3AED','#10B981','#EF4444','#7C3AED','#10B981','#EF4444']" :discrete="true"  :legend="false" :data="this.chartdata"></column-chart>
  		<div class="my-6 flex flex-wrap">
  			<div class="sm:py-3 ml-2 py-1 px-4 sm:ml-12 sm:px-5 rounded-md bg-purple-600"></div>
  			<div :class="{'sm:py-1 mx-1 text-sm sm:text-base pt-1':true,'text-white':this.$store.state.mode == 'dark'}">Infections</div>
  			<div class="sm:py-3 sm:ml-3 ml-2 sm:px-5 py-1 px-4 rounded-md bg-green-500"></div>
  			<div :class="{'sm:py-1 mx-1 text-sm sm:text-base pt-':true,'text-white':this.$store.state.mode == 'dark'}">Recovered</div>
  			<div class="sm:py-3 sm:px-5 sm:ml-3 ml-2 py-1 px-4 rounded-md bg-red-500"></div>
  			<div :class="{'sm:py-1 mx-1 text-sm  sm:text-base pt-':true,'text-white':this.$store.state.mode == 'dark'}">Deaths</div>
  		</div>

  	</div>
  	<!-- header of page-->
  	<div :class="{'my-8 mt-12 ml-4 block md:text-xl float-left':true,'text-white':this.$store.state.mode == 'dark'}">Today  	</div><br>
  	<div class="mt-16 md:flex block mx-auto w-full ">
  		<div class="flex w-full md:w-6/12">
  			<div class="w-6/12">
  				<div :class="{'w-11/12 mx-auto pt-8 pb-5 px-2 rounded-lg bg-gradient-to-r block  shadow-lg border-2':true,'from-indigo-700 to-purple-800 border-blue-900 shadow-bue-900':this.$store.state.mode == 'dark','from-gray-50 to-purple-100':this.$store.state.mode !== 'dark'}">
  					<span :class="{'icon-coronavirus text-5xl sm:text-7xl':true, 'text-purple-300':this.$store.state.mode == 'dark' , 'text-purple-600': this.$store.state.mode !== 'dark'}"></span>
  					<span :class="{'text-xl sm:text-4xl font-bold mx-auto block mt-3 mb-2':true, 'text-purple-300':this.$store.state.mode == 'dark' , 'text-purple-600': this.$store.state.mode !== 'dark'}">{{daily.infections}}</span>
  					<span :class="{'text-lg font-light ':true,'text-white':this.$store.state.mode == 'dark','text-gray-700':this.$store.state.mode !== 'dark'}">Infections</span>
  				</div>
  			</div>
  			<div class="w-6/12">
  				<div :class="{'w-11/12 mx-auto pt-8 pb-5 px-2 rounded-lg bg-gradient-to-r block f shadow-lg border-2':true,'from-indigo-700 via-indigo-600  to-pink-500 border-blue-900 shadow-blue-900':this.$store.state.mode == 'dark','from-gray-50 to-pink-100':this.$store.state.mode !== 'dark'}">
  					<span :class="{'icon-dangerous text-5xl sm:text-7xl':true, 'text-pink-50':this.$store.state.mode == 'dark' , 'text-pink-500': this.$store.state.mode !== 'dark'}"></span>
  					<span :class="{'text-xl sm:text-4xl font-bold mx-auto  mt-3 mb-2 block':true, 'text-pink-50':this.$store.state.mode == 'dark' , 'text-pink-500': this.$store.state.mode !== 'dark'}">{{daily.deaths}}</span>
  					<span :class="{'text-lg font-light ':true,'text-white':this.$store.state.mode == 'dark','text-gray-700':this.$store.state.mode !== 'dark'}">Deaths</span>
  				</div>
  			</div>
  		</div>
  		<div class="flex w-full md:w-6/12 mt-5 md:mt-0 md:mb-6">
  			<div class="w-6/12">
  				<div :class="{'w-11/12 mx-auto pt-8 pb-5 px-2 rounded-lg bg-gradient-to-r block shadow-lg border-2':true,'from-indigo-700 via-indigo-600  to-green-400 border-blue-900 shadow-blue-900':this.$store.state.mode == 'dark','from-gray-50 to-green-100':this.$store.state.mode !== 'dark'}">
  					<span :class="{'icon-heartbeat text-5xl sm:text-7xl ':true, 'text-green-50':this.$store.state.mode == 'dark' , 'text-green-400': this.$store.state.mode !== 'dark'}"></span>
  					<span :class="{'text-xl sm:text-4xl font-bold mx-auto  mt-3 mb-2 block':true, 'text-green-50':this.$store.state.mode == 'dark' , 'text-green-400': this.$store.state.mode !== 'dark'}">{{daily.recovered}}</span>
  					<span :class="{'text-lg font-light ':true,'text-white':this.$store.state.mode == 'dark','text-gray-700':this.$store.state.mode !== 'dark'}">Recovered</span>
  				</div>
  			</div>
  			<div class="w-6/12">
  				<div :class="{'w-11/12 mx-auto pt-8 pb-5 px-2 rounded-lg bg-gradient-to-r block shadow-lg border-2':true,'from-indigo-700 via-indigo-600  to-yellow-300 border-blue-900 shadow-blue-900':this.$store.state.mode == 'dark','from-gray-50 to-yellow-100':this.$store.state.mode !== 'dark'}">>
  					<span :class="{'icon-radio-unchecked text-5xl sm:text-7xl':true, 'text-yellow-300':this.$store.state.mode !== 'dark' , 'text-yellow-50': this.$store.state.mode == 'dark'}"></span>
  					<span :class="{'text-xl sm:text-4xl font-bold mx-auto  block mt-3 mb-2':true, 'text-yellow-50':this.$store.state.mode == 'dark' , 'text-yellow-300': this.$store.state.mode !== 'dark'}">{{daily.active}}</span>
  					<span :class="{'text-lg font-light ':true,'text-white':this.$store.state.mode == 'dark','text-gray-700':this.$store.state.mode !== 'dark'}">Active</span>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
  	</main>

  </div>
</template>

<script>
import axios from 'axios'
export default {
	data(){
		return{
			countries:'',
			search:'',
			changecountry:false,
			chartdata:[],
			daily:{
				infections:'',
				recovered:'',
				deaths:'',
				active:''
			},
			chart :[]
		}
	},
	components: {

    },
    methods:{
    	countriess(){
    					axios.get('https://api.covid19api.com/countries')
			.then(response=>{
				this.countries = response.data
			})
    	},
    	changec(country){
			this.$store.state.country = country.ISO2;this.$store.state.countryname = country.Country;this.$store.state.countryslug = country.Slug;this.givedata();this.changecountry = false;
			document.cookie = 'country='+country.ISO2+';';
			document.cookie = 'countryname='+country.Country+';';
			document.cookie = 'countryslug='+country.Slug+';';
		},
    		givedata(){
    						axios.get('https://api.covid19api.com/live/country/'+this.$store.state.countryslug+'/status/confirmed')
			.then(
				response=>{
					console.log(response.data)
					for(let i = response.data.length - 4;i<response.data.length;i++){
						if(i == response.data.length - 1){
							let infections = response.data[i].Confirmed;
							let recovered = response.data[i].Recovered;
							let deaths = response.data[i].Deaths;
							let active = response.data[i].Active;
							this.daily = {
								infections : infections,
								recovered :  recovered,
								deaths: deaths,
								active : active
							}
						}
						let data = {}
						data[response.data[i].Date.slice(0,10)] = response.data[i].Confirmed
						let chartdataelement = {
							name:'Confirmed',
							data: data
						}
						this.chart.push(chartdataelement)
						data ={}
						data[response.data[i].Date.slice(0,10)] = response.data[i].Recovered
						chartdataelement ={
							name:'Recovered',
							data: data
						}

						this.chart.push(chartdataelement)
						data = {}
						data[response.data[i].Date.slice(0,10)] = response.data[i].Deaths

						chartdataelement = {
							name:'Deaths',
							data: data
						}
						data = {}
						this.chart.push(chartdataelement)
					}
				this.chartdata = this.chart
			})
    		}
    },
	created(){
		if(this.$store.state.country ==""){
this.countriess()

	}
		if(this.$store.state.country !==""){
			this.givedata()
		}
}

}
</script>
