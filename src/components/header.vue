<template>
	<header class="header">
		<div class="nAv">
			<h1 class="shouye"><router-link to="/">个人应用</router-link></h1>	
		</div>
	</header>
</template>

<script>
export default {
	name: 'header',
	data () {
		return {

		}
	}
}	

</script>
<style>
	*{
		margin:0;
		padding:0;
		list-style:none;
		text-decoration:none;
	}
	.header{
		width:100%;
		height:1.253333rem;
		border-bottom:0.013333rem solid #ccc;
		overflow:hidden;
		background:deeppink;
	}
	.nAv{
			width:92%;
			height:100%;
			margin:0 auto;
		}
	.shouye{
		font-size:0.439024rem;
		font-weight: bold;
		margin:10px;
	}
</style>
