<template>
    <div class="navBar">
        <ul>
            <router-link to="/home" tag="li" active-class="targetNav">主页</router-link>
            <router-link to="/movie" tag="li" active-class="targetNav">电影</router-link>
            <router-link to="/news" tag="li" active-class="targetNav">新闻</router-link>
            <router-link to="/radio" tag="li" active-class="targetNav">广播</router-link>
            <router-link to="/group" tag="li" active-class="targetNav">小组</router-link>
            
        </ul>
    </div>
</template>
<style>
	.navBar{
		margin-top:10px;
	}
    .navBar ul{
        display: flex;
        justify-content: space-around;
        height:0.975609rem;
    }
    .navBar ul li{
        line-height: 0.975609rem;
        font-size: 0.390243rem;
        flex: 1;
        text-align: center;
    }
    .targetNav{
        border-bottom: 2px #333 solid;
        color: #31c27c;
    }
   
</style>