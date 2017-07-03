<template>
	<div class="newlist">
		<h3 style="background:orangered">头条</h3>
		<ul v-for="item in tnews" class="News">
			<li >
				<router-link :to="{name:'newsDetail',params:{id:item.content+','+item.title}}" v-text="item.title"></router-link>
			</li>
		</ul>
		<h3 style="background:red">娱乐</h3>
		<ul v-for="item in ynews" class="News">
			<li >
				<router-link :to="{name:'newsDetail',params:{id:item.content+','+item.title}}" v-text="item.title"></router-link>
			</li>
		</ul>
		<h3 style="background:green">军事</h3>
		<ul v-for="item in jnews" class="News">
			<li >
				<router-link :to="{name:'newsDetail',params:{id:item.content+','+item.title}}" v-text="item.title"></router-link>
			</li>
		</ul>
		<h3 style="background:purple">汽车</h3>
		<ul v-for="item in qnews" class="News">
			<li >
				<router-link :to="{name:'newsDetail',params:{id:item.content+','+item.title}}" v-text="item.title"></router-link>
			</li>
		</ul>
		<h3 style="background:orange">财经</h3>
		<ul v-for="item in cnews" class="News">
			<li >
				<router-link :to="{name:'newsDetail',params:{id:item.content+','+item.title}}" v-text="item.title"></router-link>
			</li>
		</ul>
		<h3 style="background:yellow">笑话</h3>
		<ul v-for="item in xnews" class="News">
			<li >
				<router-link :to="{name:'newsDetail',params:{id:item.content+','+item.title}}" v-text="item.title"></router-link>
			</li>
		</ul>
		<h3 style="background:skyblue">体育</h3>
		<ul v-for="item in snews" class="News">
			<li >
				<router-link :to="{name:'newsDetail',params:{id:item.content+','+item.title}}" v-text="item.title"></router-link>
			</li>
		</ul>
		<h3 style="background:darkgreen">科技</h3>
		<ul v-for="item in knews" class="News">
			<li >
				<router-link :to="{name:'newsDetail',params:{id:item.content+','+item.title}}" v-text="item.title"></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import jsonp from 'jsonp'
	export default {
		data(){
			return{
				tnews:[],
				ynews:[],
				jnews:[],
				qnews:[],
				cnews:[],
				xnews:[],
				snews:[],
				knews:[]
			}
		},
		created:function(){
			var vthis = this;
			//头条
			var tURL = 'http://api.dagoogle.cn/news/get-news?tableNum=1';
			//娱乐
			var yURL = 'http://api.dagoogle.cn/news/get-news?tableNum=2';
			//军事
			var jURL = 'http://api.dagoogle.cn/news/get-news?tableNum=3';
			//汽车
			var qURL = 'http://api.dagoogle.cn/news/get-news?tableNum=4';
			//财经
			var cURL = 'http://api.dagoogle.cn/news/get-news?tableNum=5';
			//笑话
			var xURL = 'http://api.dagoogle.cn/news/get-news?tableNum=6';
			//体育
			var sURL = 'http://api.dagoogle.cn/news/get-news?tableNum=7';
			//科技
			var kURL = 'http://api.dagoogle.cn/news/get-news?tableNum=8';
			jsonp(tURL,function(err,data){
//				console.log(data.data);
				vthis.tnews = data.data;
			})
			jsonp(yURL,function(err,data){
//				console.log(data.data);
				vthis.ynews = data.data;
			})
			jsonp(jURL,function(err,data){
//				console.log(data.data);
				vthis.jnews = data.data;
			})
			jsonp(qURL,function(err,data){
//				console.log(data.data);
				vthis.qnews = data.data;
			})
			jsonp(cURL,function(err,data){
//				console.log(data.data);
				vthis.cnews = data.data;
			})
			jsonp(xURL,function(err,data){
//				console.log(data.data);
				vthis.xnews = data.data;
			})
			jsonp(sURL,function(err,data){
//				console.log(data.data);
				vthis.snews = data.data;
			})
			jsonp(kURL,function(err,data){
//				console.log(data.data);
				vthis.knews = data.data;
			})
		}
	}
</script>
	
<style>
	.newlist{
		width:100%;
	}
	.newlist>h3{
		display: block;
		height: 0.975609rem;
		width:100%;
		padding: 0 20px;
		margin-bottom: 10px;
		font-size:0.487804rem;
		font-weight: 700;
		line-height: 0.975609rem;
		background:limegreen;
	}
	.News{
		width:80%;
		margin: 0 auto;
	}
	.News>li>a{
		font-size:0.329268rem;
		border-bottom: 1px solid #ccc;
	}
</style>