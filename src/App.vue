<template>
  <div id="app">
  	<d-header></d-header>
  	<d-nav></d-nav>
  	<d-lunbo></d-lunbo>
  	<router-view></router-view>
  	<d-footer></d-footer>
  </div>
  
</template>

<script>
	import dHeader from './components/header.vue'
	import dNav from './components/navBar.vue'
	import dLunbo from './components/carrousel.vue'
	import dFooter from './components/footer.vue'
export default {
	components:{
		dHeader,
		dNav,
		dLunbo,
		dFooter
	},
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
	
</style>
