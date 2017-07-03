<template>
<div>
	<div class="s_nav">
      <div><a href="">影院热映</a></div>
      <div><a href="">跳蚤市场</a></div>
      <div><a href="">豆瓣时间</a></div>
      <div><a href="">使用豆瓣App</a></div>
   </div>
  </div>
</template>

<script>
	export default {
		name:'index',
		data () {
			return {
				newsLists:[
				]
			}
		}
	}
</script>

<style lang="scss">
.s_nav{
  width:8.893333rem;
  height:2.586667rem;
  margin:0 auto;
  margin-top:0.786667rem;
  display:-webkit-flex;
  display:flex;
  flex-wrap:wrap;
  div{
    width:4.373333rem;
    height:1.173333rem;
    background:#f6f6f6;
    a{
      width:100%;
      height:100%;
      display:block;
      color:#494949;
      font-size:0.4rem;
      text-align:center;
      line-height:1.173333rem;
    }
  }
  div:nth-child(2n-1){
    margin-right:0.133333rem;
  }
}
.news{
	position:relative;
	right:-0.413333rem;
	width:9.56rem;
	height:4.426667rem;
	border-bottom:0.013333rem solid #ccc;
	padding-top:0.6rem;
	.news_content{
		width:6.24rem;
		height:2.426667rem;
		display:inline-block;
		vertical-align:top;
		overflow:scroll;
	}
}
</style>
