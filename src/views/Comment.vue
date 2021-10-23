<template>
  <div class="w-11/12 md:w-10/12 pt-3 mx-auto flex">
    <div v-if="this.user" class="fixed w-full h-full  bg-gray-800 top-0 left-0 opacity-50 z-8"></div>
    <input type="text" v-model="comment" placeholder="Comment..." ref='comment' @focus="if(this.$store.state.username==''){this.user=true;this.$refs.comment.blur()}" class=" py-3 w-10/12  md:w-11/12   px-4 rounded-md bg-gray-100 text-gray-500 focus:outline-none ring-0 focus:ring-0">
    <div class="text-white w-2/12 md:w-1/12 ml-1 bg-purple-700 md:pt-1 rounded text-lg pt-2 md:text-2xl cursor-pointer" @click='submitcomment()'>
      Send
    </div>
  </div>
  <div class="">
    <div class="text-left text-2xl pb-4 pt-10  pl-4 text-purple-500">
      Some of the bests Comments
    </div>
    <div v-for="comment in comments"  :key="comment" class="my-5 rounded-md mx-auto block w-11/12 md:w-8/12 p-2 bg-purple-500">
        <div class="flex my-1">
              <div class="rounded-full md:h-12 md:w-12 h-10 w-10 bg-indigo-800 ml-3" ></div>
              <div class="mx-3 text-white md:pt-1 text-xl md:text-2xl">
                {{comment.username}}
              </div>
        </div>
        <div class="text-xl text-white text-left md:px-20 px-10 md:pb-1">
          {{comment.message}}
        </div>
    </div>
    <div v-if="this.user" class="my-4 w-full md:w-6/12 ml-1/2 top-1/4 rounded-md fixed top-0 left-0 md:left-1/4 bg-purple-800  h-40">
      <div  class="w-full" >
        <div class="text-white text-xl py-3 ">
          Choose username
          <div class="w-11/12 mx-auto my-5">
          <input type="text" v-model='username' placeholder="Username..." autofocus  class="inline-block my-2 py-3 w-10/12  md:w-11/12   px-4 rounded-l-md bg-gray-100 text-gray-500 focus:outline-none ring-0 focus:ring-0">
          <div class="w-2/12 md:w-1/12 inline-block  py-3  text-white rounded-r-md bg-purple-700 cursor-pointer" @click='addusername()'>
            Ok!
          </div>
        </div>
        </div>
      </div>
      </div>
      <div v-if="this.alert" class="w-6/12 z-20 left-1/4 top-3 py-4 bg-green-400 text-white rounded-md fixed ">
        Message sent successfully
      </div>
      <div v-if="this.comments.length< 3" class="h-120 mb-96">

      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
  return{
    comments:[],
    user:false,
    comment:'',
    username:'',
    msg:'',
    alert:false
  }
},
methods:{
  submitcomment(){
    axios.get(`/apii/comment?username=${this.$store.state.username}&msg=${this.comment}`)
    .then(response=>{if(response.data.noerror ){
    this.alert = true
    setTimeout(()=>{
      this.alert = false
    },1000);
  this.comment = ''}
})},
  getcomments(){
    axios.get('/apii/comment/read/approved')
    .then(response=>{
      this.comments = response.data
    })
  },
  addusername(){
  document.cookie = `username=${this.username};`
  this.$store.state.username = this.username;
  this.user = false;
  }
},
created(){
  this.getcomments()
}
}
</script>
