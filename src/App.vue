<template>
<div class="bg-white ml-20 w-auto rounded-l-10xl ">
<Sidebar/>
<Navbar/>    
<router-view/>
<Footer/>
</div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebare.vue'
import Footer from './components/Footer.vue'
export default {
  components:{
    Navbar , Sidebar , Footer
  },
}
</script>
<style>

::-webkit-scrollbar {
  width: 16px;
  height: 16px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 3px solid #edf2f7;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

#app {
  font-family: "Georama" , Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  --tw-bg-opacity: 1;
  color:white;
  background-color: rgba(109, 40, 217, var(--tw-bg-opacity));
}

#sidebar a.router-link-exact-active   {
  --tw-bg-opacity: 1;
  color:black;
  background: white;
  box-shadow: inset 5px 0 5px -5px rgba(0,0,0,0.7),
  -5px 0 5px -5px rgba(0,0,0,0.7);
  border-top-left-radius:40%;
  border-bottom-left-radius:70%;
  border-top-left-radius:40%;
        border-bottom-left-radius:70%;
  }


</style>
