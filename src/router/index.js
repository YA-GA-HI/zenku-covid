import { createRouter, createWebHistory } from 'vue-router'
const Home = ()=>import(/*chunkname="Home"*/'../views/Home.vue')
const Country = ()=>import(/*chunkname="Country"*/'../views/Country.vue')
const About = ()=>import(/*chunkname="About"*/'../views/About.vue')
const Contact = ()=>import(/*chunkname="Contact"*/'../views/Contact.vue')
const Admin = ()=>import(/*chunkname="Admin"*/'../views/Admin.vue')
const Comment = ()=>import(/*chunkname="Comment"*/'../views/Comment.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/country',
    name: 'Country',
    component: Country
  },
  {
    path: '/comments',
    name: 'Comment',
    component: Comment
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },{
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
