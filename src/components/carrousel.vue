<template>
    <div>
    	<h1 id="biaoti">豆瓣电影top250</h1>
    	<el-carousel class="lun">
	      <el-carousel-item v-for="item in tus" :key="item">
	       <img :src="item.imgUrl" width="100%" height="100%" alt="">
	      </el-carousel-item>
	    </el-carousel>
	</div>
</template>
<script>
  
  	import jsonp from 'jsonp';
    export default {
        name: 'carrousel',
        data() {
            return {
               move:[],
                tus : [
			        {
			          imgUrl : './src/assets/images/aer.jpg'
			        },
			        {
			          imgUrl : './src/assets/images/bianxingjingang.jpg'
			        },
			        {
			          imgUrl : './src/assets/images/image.jpg'
			        },
			        {
			          imgUrl : './src/assets/images/dandan.jpg'
			        }
		      	]
            }
        }
    }
</script>
<style>
    #biaoti{
    	display: inline-block;
    	padding:0 20px;
    	margin-bottom: 10px;
    }
    .lun,.lun .el-carousel__item{
    	width:100%;
    	height:7.609756rem;
    }
</style>