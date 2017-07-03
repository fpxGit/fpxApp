<template>
<div>
	<s-movie msg="影院热映" :subjects="r_subjects"></s-movie>
	<s-movie msg="免费在线" :subjects="o_subjects"></s-movie>
	<s-movie msg="新片速递" :subjects="m_subjects"></s-movie>
	
</div>	
</template>

<script>
	import sMovie from './movie.vue';
	import jsonp from 'jsonp';
	export default {
		name:'movieAll',
		components:{
			sMovie,
		},
		data () {
			return {
				r_subjects:[
				{loading:true},[]
				],
				o_subjects:[
				{loading:true},[]
				],
				m_subjects:[
				{loading:true},[]
				],
				
			}
		},
		created:function(){
			var _this = this;
			var reyingUrl = 'https://api.douban.com/v2/movie/in_theaters?count=10'
			var oUrl = 'https://api.douban.com/v2/movie/top250?count=10'
			var mUrl = 'https://api.douban.com/v2/movie/coming_soon?count=10'
			this.getData(reyingUrl,_this.r_subjects)
			this.getData(oUrl,_this.o_subjects)
			this.getData(mUrl,_this.m_subjects)
		},
		methods:{
			getData:function(url,datas){
				jsonp(url,function(err,data){
					if(data){
//						console.log(data)
						data.subjects.forEach(function(val){
							datas[1].push(val)
						})	
						datas[0].loading = false;
					}
				})
		 	}
		}
	}
</script>

<style lang="scss">
	
</style>
