<template>
	<div>
	<div class="r_title">
				<h1>{{msg}}</h1>
				<a href="">更多</a>
	</div>
		<div class="reying">
			<div class="loading" v-if="subjects[0].loading">
				<img src="../assets/images/loading.gif" alt="">
			</div>
			<div class="r_movie" v-else>
				<div class="r_movie_content" v-for="subject in subjects[1]">
					<router-link :to="{name:'movieDetail',params:{id:subject.id}}">
						<img :src="subject.images.medium" alt="">
						<p class="r_movie_title" v-text="subject.title"></p>
						<div class="r_rating" >
							<span v-for="n in 5" class="r_stars" :class="{light : n*10<=subject.rating.stars, grey :n*10>subject.rating.stars}">
							</span>
							<span v-text="subject.rating.average"></span>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

	export default {
		name:'movie',
		props:['msg','subjects'],
		data () {
			return {
				
			}
		},	
	}
</script>

<style lang="scss">
	.r_title{
			width:9.16rem;
			height:0.906667rem;
			margin:0.266667rem auto;
		
			h1{
				font-size:0.48rem;
				display:inline-block;
			}
			a{
				float:right;
				font-size:0.4rem;
				color:#92d99e;
			}
		}
	.reying{
		width:100%;
		overflow-x:scroll;
		
		.loading{
			img{
				width:100%;
				height:5.106667rem
			}
		}
		.r_movie{
			width:29.333333rem;
			height:5.106667rem;
			padding-left:0.466667rem;
			.r_movie_content{
				display:inline-block;
				vertical-align:top;
				margin-right:0.133333rem;
				a{
					color:#000;
				}
				img{
					width:2.666667rem;
					height:3.813333rem;
				}
				.r_movie_title{
					text-align:center;
				}
				.r_rating{
					padding-left:0.48rem;
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
				}
			}

		}
	}
	.reying::-webkit-scrollbar{
		  display:none;
		}
</style>
