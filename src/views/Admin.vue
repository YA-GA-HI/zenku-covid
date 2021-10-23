<template>
  <!--contact us section-->
  <span class="text-purple-700 text-2xl px-3 block py-3  text-left">Contact us messages</span>
  <div  :class="{'  w-11/12  mx-auto p-2 rounded-md  ':true,'bg-gray-200':this.$store.state.mode !== 'dark'}">
      <div class="flex  py-2 bg-purple-400 rounded-md text-white text-left w-full">
        <div class="w-1/12 text-gray-800 font-bold text-xl px-2 ">id</div>
        <div class="text-gray-800 font-bold text-xl px-2 w-  md:w-3/12">email</div>
        <div class="text-gray-800 font-bold text-xl px-2  w-8/12 md:w-7/12  ">contact</div>
        <div class="text-gray-800 font-bold text-xl px-2 hidden md:block w-3/12 ">date</div>
      </div>
      <div v-for="contact in this.contactus"  :key="contact" class="flex text-left overflow-ellipsis my-2 py-2 bg-purple-400 rounded-md text-white  w-full">
        <div class="px-2 w-1/12 ">{{contact.id}}</div>
        <div class="px-2 w-5/12 md:w-3/12 overflow-ellipsis">{{contact.email}}</div>
        <div class="px-2  w-8/12 md:w-7/12  ">{{contact.message}}</div>
        <div class="px-2 hidden md:block md:w-3/12 ">17-02-2005</div>
      </div>

  </div>
  <div class="w-40 my-10 bg-purple-400 text-white rounded-md mx-auto py-2 px-4 cursor-pointer" @click="this.readcontacts(this.contactus.length+4)">
    Get more
  </div>
  <!--end contact us section-->
  <!--contact us section-->
  <span class="text-purple-700 text-2xl px-3 block py-3  text-left">Contact us messages</span>
  <div  :class="{'  w-11/12  mx-auto p-2 rounded-md  ':true,'bg-gray-200':this.$store.state.mode !== 'dark'}">
      <div class="flex  py-2 bg-purple-400 rounded-md text-white text-left w-full">
        <div class="w-1/12 text-gray-800 font-bold text-xl px-2 ">id</div>
        <div class="text-gray-800 font-bold text-xl hidden md:block px-2 w-5/12  md:w-3/12">username</div>
        <div class="text-gray-800 font-bold text-xl px-2  w-8/12 md:w-7/12  ">comment</div>
        <div class="text-gray-800 font-bold text-xl px-2  w-3/12 ">state</div>
      </div>
      <div v-for="comment in this.comments"  :key="comment" class="flex text-left overflow-ellipsis my-2 py-2 bg-purple-400 rounded-md text-white  w-full">
        <div class="px-2 w-1/12 ">{{comment.id}}</div>
        <div class="px-2 hidden md:block w-5/12 md:w-3/12 overflow-ellipsis">{{comment.username}}</div>
        <div class="px-2  w-8/12 md:w-7/12  ">{{comment.message}}</div>
        <div class="px-2  md:w-3/12 "><div class="bg-purple-700 w-16 rounded-md text-center " @click="this.approvecomment(comment.id)">{{comment.approaved ? 'true':'none'   }}</div></div>
      </div>

  </div>
  <div class="w-40 mt-10  bg-purple-400 text-white rounded-md mx-auto py-2 px-4 cursor-pointer " @click="this.readcomments(this.comments.length+4)">
    Get more
  </div>

  <!--end contact us section-->
</template>

<script>

import axios from 'axios'
export default {
  name: 'Home',
data(){
  return{
  contactus:[
  ],
  comments:[
  ]

}
},
methods:{
  readcontacts(num){
    axios.get(`/apii/contact/read?limit=${num}`)
    .then(response=>{
        response.data.reverse().forEach(el=>{
      !this.contactus.includes(el)  ?    this.contactus.unshift(el) :null ;
    })
    })

},
readcomments(num){
  axios.get(`/apii/comments/read?limit=${num}`)
  .then(response=>{
      response.data.reverse().forEach(el=>{
        !this.comments.includes(el)  ?    this.comments.unshift(el) :null ;
      })
  })
},
approvecomment(num){
  axios.get(`/apii/comment/approve?id=${num}` )
  .then(response=>{
      response.data.noerror ? this.comments[num].approaved = true :null
  })
}
},
created(){
this.readcontacts(5)
this.readcomments(5)
}
}
  </script>
