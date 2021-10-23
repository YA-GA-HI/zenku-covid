<template>
<div class=" w-full   rounded-lb-10">
<!-- header of page-->
<section class="px-5 pt-7 flex">
	<div class="font-bold md:text-xl text-base text-purple-500 mr-4 ">Covid-19</div>
	<div :class="{'md:text-xl text-base font-base':true,'text-white':this.$store.state.mode == 'dark'}">World Updates</div>
</section>

<Covidata  :infections=this.infections :deaths=this.deaths :active='this.active'  :recovered=this.recovered />
	
<div class="w-11/12 mx-auto rounded-2xl pt-10 shadow-xl pb-10  lg:flex mt-20 ">
	<div class=" w-full w-11/12 lg:4/12 ">
		<div class="w-11/12  mx-auto flex rounded-full bg-gray-100 ">
		<input v-model='search' placeholder="Search Country" :class="{'py-4 px-5 focus:outline-none  rounded-l-full w-10/12 float-left':true,'text-white bg-indigo-700':this.$store.state.mode == 'dark','text-gray-400 bg-gray-100':this.$store.state.mode !== 'dark',}">
			<span :class="{'icon-search  py-5 text-left cursor-pointer bg-gray-100 text-gray-400 rounded-r-full w-2/12 md:text-center float-right':true,'text-white bg-indigo-700':this.$store.state.mode == 'dark','text-gray-400 bg-gray-100':this.$store.state.mode !== 'dark',}" @click="searche()"></span>
	</div>
	<div class="my-4 w-11/12 mx-auto  block h-200 overflow-auto">
		<div v-for='country in this.dailycountries' :key="country" >
		<div  v-if="(((country.Country.includes(this.search)|| country.Country.toLowerCase().includes(this.search)||  country.Country.toUpperCase().includes(this.search) )&& this.search !== '') || this.search== '')&& country.Country !== 'Israel'"   class="flex md:w-10/12 w-11/12 my-7 mx-auto cursor-pointer ">
			<span :class="{' mx-3 text-left text-xs md:text-base w-4/12 pt-3':true,'text-indigo-800':this.$store.state.mode !== 'dark','text-white':this.$store.state.mode == 'dark'}">{{country.Country}} </span>
			<span class="text-gray-500 text-xs md:text-base w-2/12 text-purple-500 mr-auto font-bold">{{country.TotalConfirmed }}<br><span :class="{'text-base font-light  hidden md:block md:text-sm':true,'text-indigo-800':this.$store.state.mode !== 'dark','text-white':this.$store.state.mode == 'dark'}">Infections</span></span>
			<span class="text-green-500 mr-auto text-xs md:text-base w-2/12  font-bold">{{country.TotalRecovered}}<br><span :class="{'text-base md:text-sm font-light hidden md:block ':true,'text-indigo-800':this.$store.state.mode !== 'dark','text-white':this.$store.state.mode == 'dark'}">Recovered</span></span>
			<span  class="text-red-600 text-xs mr-auto w-2/12  md:text-base font-bold">{{country.TotalDeaths}}<br><span :class="{'text-base font-light md:text-sm  hidden md:block ':true,'text-indigo-800':this.$store.state.mode !== 'dark','text-white':this.$store.state.mode == 'dark'}">Deaths</span></span>
		</div>
	</div>
	</div>
	</div>
	<div class="  block  w-full lg:w-6/12 lg:w-8/12   ">
		<div :class="{'w-full mt-3 rounded-xl block border-2 mx-auto':true, 'bg-indigo-800 border-blue-900 shadow-bue-900':this.$store.state.mode == 'dark'}">
		<geo-chart :colors='this.$store.state.mode == "dark"?"#34D399":"rgb(109, 40, 217)"' :precision="3" :data="this.Countries" :library="{backgroundColor: this.$store.state.mode == 'dark'?'#3730A3':'white'}" :download="true"></geo-chart>
		<div class='flex mb-3 ml-2 sm:ml-9'>
		<div :class="{'py-4 px-6  rounded-md mx-2':true,'bg-green-400':this.$store.state.mode == 'dark','bg-indigo-700':this.$store.state.mode !== 'dark'}"></div>
		<span :class="{'py-1 text-sm sm:text-base':true,'text-white':this.$store.state.mode == 'dark'}">Density of Virous</span>
	</div>
	</div>
	<div :class="{'w-full mt-10 rounded-xl block border-2 mx-auto':true, 'bg-indigo-800 border-blue-900 shadow-bue-900':this.$store.state.mode == 'dark'}">
	<div class="block w-full">
		<div :class="{'my-5 text-lg block':true, 'text-white':this.$store.state.mode == 'dark'}">Most Countries Touched</div>
	<line-chart :data="Object.values(this.countriegraph)" :colors="['rgb(109, 40, 217)','rgb(16, 185, 129)','rgb(236, 72, 153)','#FB923C','rgb(251, 191, 36)']"  download="Covid-mostcountries-touched"  :library="{backgroundColor: this.$store.state.mode == 'dark'?'#3730A3':'green'}" :min="0"/>
	</div>
	<span :class="{'py-6 block text-sm':true,'text-white':this.$store.state.mode == 'dark'}">ALL Values are with k (true values are x 1000 current value)</span>
	</div>
</div>
</div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Covidata from './../components/Covidata.vue'
export default {
  name: 'Home',
  components: {
   	Covidata
  },
  data(){
  	return{
  		search:'',
  		infections:{
  			new:'',
  			total:''
  		},
  		deaths:{
  		new:'',
  			total:''
  	},
  	recovered:{
  		new:'',
  			total:'',
        pourcentage:''
  	},
  	Countries:{},
    active:{
      active:'',
      new:'',
      pourcentage:''
    },


  	Countriesname:[],dailycountries:[],
  	countriegraph:[
  	]}
  },
  methods:{
  	searche(){
console.log(this.search+'h')
  	}
  },
  // updated(){
  // 		setInterval(()=>{console.log(this.search)},3000)
  // },
  created(){
 if(this.$store.state.mode == 'dark'){
 Chartkick.options = {legend: {
                labels: {
                    fontColor: "blue",
                    fontSize: 18
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "green",
                        fontSize: 18,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "purple",
                        fontSize: 14,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }]
            }}
}
  	axios.get('https://api.covid19api.com/summary')
  	.then((response)=>{
  		 console.log(response.data)
  		 let c = response.data.Countries
  		 var sortable = [];
for (var n in c) {
    sortable.push([c[n].CountryCode, c[n].NewConfirmed]);
    let totalconfirmed = c[n].TotalConfirmed.toString();
    let totalrecovered = c[n].TotalRecovered.toString();
    let totaldeaths = c[n].TotalDeaths.toString();
    if(totalconfirmed.length> 3 && totalconfirmed.length < 7){
  		let x = totalconfirmed.length - 3 ;
  		totalconfirmed = totalconfirmed.slice(0,x)+','+totalconfirmed.slice(x,x+1)+' k';
  		}
  		else if(totalconfirmed.length> 6 && totalconfirmed.length < 8){
  		let x = totalconfirmed.length - 6 ;
  		totalconfirmed = totalconfirmed.slice(0,x)+','+totalconfirmed.slice(x,x+1)+' M';
  		}


  		if(totalrecovered.length> 3 && totalrecovered.length < 7){
  		let x = totalrecovered.length - 3 ;
  		totalrecovered = totalrecovered.slice(0,x)+','+totalrecovered.slice(x,x+1)+' k';
  		}
  		else if(totalrecovered.length> 6 && totalrecovered.length < 8){
  		let x = totalrecovered.length - 6 ;
  		totalrecovered = totalrecovered.slice(0,x)+','+totalrecovered.slice(x,x+1)+' M';
  		}


  		if(totaldeaths.length> 3 && totaldeaths.length < 7){
  		let x = totaldeaths.length - 3 ;
  		totaldeaths = totaldeaths.slice(0,x)+','+totaldeaths.slice(x,x+1)+' k';
  		}
  		else if(totaldeaths.length> 6 && totaldeaths.length < 8){
  		let x = totaldeaths.length - 6 ;
  		totaldeaths = totaldeaths.slice(0,x)+','+totaldeaths.slice(x,x+1)+' M';
  		}
    this.dailycountries.push({Country:c[n].Country, TotalConfirmed : totalconfirmed, TotalRecovered : totalrecovered , TotalDeaths : totaldeaths })
   c[n].Country !== 'United States of America'? this.Countriesname.push([c[n].Country.replaceAll(' ','-'),c[n].TotalConfirmed]) : this.Countriesname.push(['united-kingdom',c[n].TotalConfirmed]) ;
}

sortable.sort(function(a, b) {
    return b[1] - a[1] ;
});

this.Countriesname.sort(function(a, b) {
    return b[1] - a[1] ;
}).slice(0,5);
console.log(this.Countriesname[0][1] + 20000 )
this.Countries = Object.values(sortable);
  		//infections section
      let activetotal = (response.data.Global.TotalConfirmed - response.data.Global.TotalDeaths - response.data.Global.TotalRecovered).toString();
      let activenew = (response.data.Global.NewConfirmed - response.data.Global.NewDeaths - response.data.Global.NewRecovered).toString();
       if(activetotal.length> 3 && activetotal.length < 7){
      let a = activetotal.length - 3 ;
      activetotal = activetotal.slice(0,a)+','+activetotal.slice(a,a+1)+' k';
      }
      else if(activetotal.length> 6 && activetotal.length < 10){
      let a = activetotal.length - 6 ;
      activetotal = activetotal.slice(0,a)+','+activetotal.slice(a,a+1)+' M';
      }
      if(!activenew.includes('-')){
       if(activenew.length> 3 && activenew.length < 7){

      let a = activenew.length - 3 ;
      activenew = '+'+activenew.slice(0,a)+','+activenew.slice(a,a+1)+' k';
      }
      else if(activenew.length> 6 && activenew.length < 10){
      let a = activenew.length - 6 ;
      activenew = '+'+activenew.slice(0,a)+','+activenew.slice(a,a+1)+' M';
      }}else{
       if(activenew.length> 4 && activenew.length < 8){
      let a = activenew.length - 4 ;
      activenew = activenew.slice(0,a)+','+activenew.slice(a,a+1)+' k';
      }
      else if(activenew.length> 7 && activenew.length < 11){
      let a = activenew.length - 7 ;
      activenew = +activenew.slice(0,a)+','+activenew.slice(a,a+1)+' M';
      } }
      this.active.active = activetotal
      this.active.new = activenew
      this.active.pourcentage = ( (response.data.Global.NewConfirmed - response.data.Global.NewDeaths - response.data.Global.NewRecovered) * 100 / (response.data.Global.TotalConfirmed - response.data.Global.TotalDeaths - response.data.Global.TotalRecovered)).toFixed(2)+'%'

  		let newresponse = response.data.Global.NewConfirmed.toString();
  		this.infections.newfull = newresponse ;
  		let totalresponse = response.data.Global.TotalConfirmed.toString();
  		this.infections.totalfull = totalresponse ;
  		if(totalresponse.length  == 9){
  		this.infections.total = totalresponse.slice(0,3)+','+totalresponse.slice(3,6)+' M';
  		}else if(totalresponse.length == 10){
  		this.infections.total = totalresponse.slice(0,1)+','+totalresponse.slice(1,4)+ ','+totalresponse.slice(4,7)+' M';
  	}

  		if(newresponse.length> 3 && newresponse.length < 7){
  		let x = newresponse.length - 3 ;
  		this.infections.new = newresponse.slice(0,x)+','+newresponse.slice(x,x+3)+' k';
  		}
  		else if(newresponse.length> 6 && newresponse.length < 8){
  		let x = newresponse.length - 6 ;
  		this.infections.new = newresponse.slice(0,x)+','+newresponse.slice(x,x+3)+','+newresponse.slice(x,x+6)+' M';
  		}
  		//countries graph
  		for(let i = 0 ; i< 5;i++){
  			axios.get('https://api.covid19api.com/dayone/country/'+ this.Countriesname[i][0] +'/status/confirmed/live')
  			.then(response=>{
  			  	let data = {name: this.Countriesname[i][0] , data:{}};
  			  	for(let j = response.data.length -240  ; j<response.data.length  ; j+= 30){
  				   data.data[response.data[j].Date.slice(0,10) ] = parseInt(
response.data[j].Cases.toString().slice(0,response.data[j].Cases.toString().length-3)


  				   	)
  				   }
  				this.countriegraph.push(data)
  			})
  			}
  			console.log(this.countriegraph)
  		//recovered section
  		newresponse = response.data.Global.NewRecovered.toString();
  		this.recovered.newfull = newresponse ;
  		totalresponse = response.data.Global.TotalRecovered.toString();
  		this.recovered.totalfull = totalresponse ;

  		if(totalresponse.length> 3 && totalresponse.length < 7){
  		let z = totalresponse.length - 3 ;
  		this.recovered.total = totalresponse.slice(0,z)+','+totalresponse.slice(z,z+3)+' k';
  		}
  		else if(totalresponse.length> 6 && totalresponse.length < 10){
  		let z = totalresponse.length - 6 ;
  		this.recovered.total = totalresponse.slice(0,z)+','+totalresponse.slice(z,z+3)+' M';
  		}

  		if(newresponse.length> 3 && newresponse.length < 7){
  		let z = newresponse.length - 3 ;
  		this.recovered.new = newresponse.slice(0,z)+','+newresponse.slice(z,z+3)+' k';
  		}
  		else if(newresponse.length> 6 && newresponse.length < 10){
  		let z = newresponse.length - 6 ;
  		this.recovered.new = newresponse.slice(0,z)+','+newresponse.slice(z,z+3)+' M';
  		}
  		//death section
  		newresponse = response.data.Global.NewDeaths.toString();
  		this.deaths.newfull = newresponse ;
  		totalresponse = response.data.Global.TotalDeaths.toString();
  		this.deaths.totalfull = totalresponse ;

  		if(totalresponse.length> 3 && totalresponse.length < 7){
  		let y = totalresponse.length - 3 ;
  		this.deaths.total = totalresponse.slice(0,y)+','+totalresponse.slice(y,y+3)+' k';
  		}
  		else if(totalresponse.length> 6 && totalresponse.length < 10){
  		let y = totalresponse.length - 6 ;
  		this.deaths.total = totalresponse.slice(0,y)+','+totalresponse.slice(y,y+3)+' M';
  		}

  		if(newresponse.length> 3 && newresponse.length < 7){
  		let y = newresponse.length - 3 ;
  		this.deaths.new = newresponse.slice(0,y)+','+newresponse.slice(y,y+3)+' k';
  		}
  		else if(newresponse.length> 6 && newresponse.length < 8){
  		let y = newresponse.length - 6 ;
  		this.deaths.new = newresponse.slice(0,y)+','+newresponse.slice(y,y+3)+' M';
  		}


  console.log( this.countriegraph)
  }
  		)
  },}
</script>
