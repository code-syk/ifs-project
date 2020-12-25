<template>
  <div class="login">
    <router-link to = "/power">123</router-link>
		<!-- <phoneScan :url = 'url'></phoneScan> -->
  </div>
</template>

<script>
// @ is an alias to /src
import phoneScan from '../components/phone_scan/phone_scan.vue'
export default {
  name: 'login',
	components:{
		phoneScan
	},
	data(){
		return{
			url:''
		}
	}
}
</script>