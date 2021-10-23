import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import './index.css'
createApp(App).use(store).use(VueChartkick).use(router).mount('#app')
