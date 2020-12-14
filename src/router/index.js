import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import power from '../components/power/power.vue'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/',redirect:'/login'},
	{path: '/login',component: Login},
	{
	  path: '/HomePage',
	  component: HomePage,
		children:[
			{path: '/power', component: power}
		]
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
