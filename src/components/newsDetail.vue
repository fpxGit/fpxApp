<template>
	<div id="show">
		<h1 v-html="news.title"></h1>
		<p v-html = "news.content">	</p>
	</div>
</template>

<script>
	import jsonp from 'jsonp'
	export default {
		name:'newsDetail',
		data(){
			return{
				news:{}
			}
		},
		created:function(){
			var news=this.$route.params.id;
			var title = news.split(',');
//			console.log(title);
//			console.log(news);
			this.news.content = title[0];
			this.news.title = title[1];
		}
	}
</script>

<style>
	#show{
		padding:5px 50px;
		background:#ededed;
	}
	#show>h1{
		font-weight: bold;
	}
	#show>p{
		font-size:0.341463rem;
	}
</style>