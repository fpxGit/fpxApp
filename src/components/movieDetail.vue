<template>
<div class="card">
	<h1 class="tiTle">{{details.title}}</h1>
	<section class="dy-info">
		<div class="right">
			<a href="https://www.douban.com/doubanapp/dispatch?uri=/movie/25824686&from=mdouban&channel=card_movie_cover&download=1" v-if="details.images">
				<img :src="details.images.large" alt="details.title" />
			</a>
		</div>
		<div class="left">
			<div class="r_rating" v-if="details.rating">
				<span v-for="n in 5" class="r_stars" :class="{light : n*10<=details.rating.stars, grey :n*10>details.rating.stars}">
				</span>
				<span v-text="details.rating.average"></span>
				<span v-text="details.ratings_count+'人评价'"></span>
			</div>
			<p class="meta">
				
                
                    150分钟(中国大陆) / 动作 / 科幻 / 迈克尔·贝(导演) / 马克·沃尔伯格 / 伊莎贝拉·莫奈 / 劳拉·哈德克 / 安东尼·霍普金斯 / 乔什·杜哈明 / 彼特·库伦 / 泰瑞斯·吉布森 / 约翰·古德曼 / 斯坦利·图齐 / 桑地亚哥·卡布瑞拉 / 吉尔·伯明翰 / 渡边谦 / 约翰·迪·玛吉欧 / 弗兰克·维尔克 / 米彻·佩勒吉 / 2017-06-23(中国大陆) 上映

            
			</p>
		</div>
	</section>
	<div class="mark-sub">
		<a href=""><span>想看</span></a>
		<a href=""><span>看过</span></a>
	</div>
	<div class="jianjie" v-if="details">
		<h2 v-text="details.title+'的骑士的剧情简介'"></h2>
		<div class="db" style="position:static;">
			<p v-text="details.summary">
				
			</p>
		</div>
	</div>
	<div class="tags">
		<p>查看更多豆瓣高分电影电视剧</p>
		<ul>
            <li>
                <a href="/tag/科幻/movie?from_id=25824686">科幻</a>
            </li>
            <li>
                <a href="/tag/美国/movie?from_id=25824686">美国</a>
            </li>
            <li>
                <a href="/tag/2017/movie?from_id=25824686">2017</a>
            </li>
            <li>
                <a href="/tag/动作/movie?from_id=25824686">动作</a>
            </li>
            <li>
                <a href="/tag/特效/movie?from_id=25824686">特效</a>
            </li>
            <li>
                <a href="/tag/机甲/movie?from_id=25824686">机甲</a>
            </li>
            <li>
                <a href="/tag/漫画改编/movie?from_id=25824686">漫画改编</a>
            </li>
            <li>
                <a href="/tag/热血/movie?from_id=25824686">热血</a>
            </li>
        </ul>
	</div>
</div>
</template>

<script>
	import jsonp from 'jsonp'

	export default {
		data () {
			return {
				movieId:this.$route.params.id,
				details:{}
			}
		},
		created:function(){
			var _this = this;
			var url = 'https://api.douban.com/v2/movie/subject/'+this.movieId
			
			jsonp(url,function(err,result){
				
				_this.details = result;
//				console.log(result);
			})

		}
	}
</script>

<style>
	.card{
		width: 8.268292rem;
		margin:0 auto;
	}
	.tiTle{
		margin:30px 0 5px;
		font-size: 0.585365rem;
		line-height: 0.780487rem;
		word-break: break-all;
		font-weight: normal;
	}
	.dy-info{
		width:8.268292rem;
		height:6.243902rem;
	}
	.right{
		float:right;
		width:2.439024rem;
		height:3.658536rem;
	}
	.right img{
		width:100%;
		display:block;
	}
	.left{
		width:5.829268rem;
		height:6.243902rem;
		float:left;
		/*margin-right: 2.439024rem;*/
		padding-bottom: 30px;
	}
	.r_stars{
		display:inline-block;
		vertical-align:top;
		width:0.266667rem;
		height:0.266667rem;
		background-size:cover;
		margin-top:0.066667rem;
	}
	.light{
		background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==")
	}
	.grey{
		background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=")
	}
	.meta{
	    color: #494949;
	    margin-top: 15px;
	    padding-right: 24px;
	    font-size: 0.341463rem;
	    line-height: 1.6;
	}
	.mark-sub{
		margin-bottom:30px;
	    display: flex;
	}
	.mark-sub a{
		height: 0.731707rem;
	    line-height: 0.731707rem;
	    display: block;
	    border: 1px solid #ffb712;
	    border-radius: 3px;
	    margin-right: 10px;
	    color: #ffb712;
	    font-size: 0.365853rem;
	    text-align: center;
	    -webkit-box-flex: 1;
	    -moz-box-flex: 1;
	    box-flex: 1;
	    -webkit-flex: 1;
	    -moz-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
    }	
    .jianjie{
    	margin-bottom:30px;
    }
    h2{
	    color: #aaa;
	    margin: 0 0 15px;
	    font-size: 0.365853rem;
    }
    .db>p{
    	font-size: 0.365853rem;
    	color: #494949;
    	line-height: 0.536585rem;
	    word-wrap: break-word;
	    margin: 0;
	    padding: 0;
    }
    .tags{
    	margin:30px 0;
    }
    .tags>p{
    	color:#aaa;
    	font-size: 0.365853rem;
    	line-height: 22px;
	    word-wrap: break-word;
	    margin-bottom: 30px;
	    padding: 0;
    }
    .tags ul li{
	    display: inline-block;
	    margin: 10px 10px 0 0;
	    font-size: 0.365853rem;
    }
    .tags ul li a {
	    font-size: 0.365853rem;
	    line-height: 0.682926rem;
	    padding: 0 0.292682rem;
	    border-radius: 0.682926rem;
	    text-align: center;
	    color: #494949;
	    background: #f5f5f5;
	    display: block;
	}
</style>
