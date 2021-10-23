<template>
  <div class="w-full h-40"></div>
  <div :class="{'w-11/12 block h-120 md:w-7/12 my-20 py-6 px-5 rounded-lg border-2  mt-0 mb-76 shadow-lg bg-white mx-auto':true,'bg-indigo-700 border-blue-900 shadow-blue-900':this.$store.state.mode == 'dark'}">

    <div :class="{'block float-right w-28   text-xl mb-2':true,'text-white':this.$store.state.mode == 'dark'}">Contact us:</div>
    <div class="block w-full float-right ">
    <input v-model='email' type="email" placeholder="Enter Your Email..." :class="{'py-4 mt-2 px-5 border-2 my-3 bg-gray-50 focus:outline-none block  rounded-full w-10/12 float-left':true,'text-gray-400':this.$store.state.mode!='dark','bg-indigo-800 text-white border-blue-900 shadow-bue-900':this.$store.state.mode == 'dark'}">
    <textarea v-model="msg" placeholder="Type Your message..." rows="6" :class="{'py-4  mb-6 px-5 block bg-gray-50 focus:outline-none te rounded-3xl  w-10/12 float-left border-2':true,'text-gray-400':this.$store.state.mode!='dark','bg-indigo-800 text-white border-blue-900 shadow-bue-900':this.$store.state.mode == 'dark'}"></textarea>
    </div>
    <span :class="{'py-3 px-6  focus:outline-none cursor-pointer  block rounded-2xl  float-right text-white text-xl icon-paper-plane':true,'bg-gradient-to-r from-indigo-800 to-purple-800 shadow-blue-900':this.$store.state.mode == 'dark','bg-gradient-to-r from-purple-500 to-purple-700 ':this.$store.state.mode !== 'dark'}" @click="submitcomment()"></span>
    </div>
    <div class="h-96 w-full block " ></div>
    <transition enter-to-class='opacity-0' enter-from-class='opacity-100' enter-active-class='duration-500' leave-from-class='opacity-0' leave-to-class='opacity-100' leave-active-class='duration-500'>
    <div v-if="this.alert" class="w-6/12 z-20 left-1/4 top-3 py-4 bg-green-400 text-white rounded-md fixed ">
      Message sent successfully
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
export default {
data(){
  return{
    email:'',
    msg:'',
    alert:false
  }
},
methods:{
  submitcomment(){
    axios.get(`/apii/contact?email=${this.email}&msg=${this.msg}`)
    .then(response=>{
      response.data.noerror ? this.alert = true:null ;
    setTimeout(()=>{
      this.alert = false
    },1000)}
  )}
}
}
</script>
