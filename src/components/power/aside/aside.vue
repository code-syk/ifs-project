<template>
	<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick($event)"></el-tree>
</template>

<script>
  export default {
	  data() {
	    return {
	      data: [],
	      defaultProps: {
	        children: 'children',
	        label: 'label'
	      }
	    };
	  },
	  methods: {
	    handleNodeClick(e) {
	      console.log(e);
				this.$parent.get_con_data(e.id)
	    },
			get_tree(){
				this.rq.requests.get('/aside').then(res => {
					this.data = res.data;
					console.log(this.data)
				})
			}
	  },
		created() {
			this.get_tree()
		}
	}
</script>

<style>
</style>