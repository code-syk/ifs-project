<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		created() {
			// this.$router.push('/login')
		}
	}
</script>
<style lang="scss">
@import './assets/css/base.css';
#app{
	height: 100%;
}
</style>
