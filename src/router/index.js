// 配置路由
import Index from '../components/index.vue'
import MovieSmall from '../components/movie.vue'
import Movie from '../components/movieAll.vue'
import movieDetail from '../components/movieDetail.vue'
//import Search from '../components/search.vue'
import News from '../components/news.vue'
import NewsDetail from '../components/newsDetail.vue'

export default [
	{
		path: '/home',
		component:Index,
		name:'home'
	},

	{
		path:'/movie',
		component:Movie,
		name:'movie'
	},
	{
		path:'/movieDetail/:id',
		component:movieDetail,
		name:'movieDetail'
	},
	{
		path:'/news',
		component:News,
		name:'news'
	},
	{
		path:'/newsDetail/:id',
		component:NewsDetail,
		name:'newsDetail'
	},
	{
		path:'/*',
		redirect : '/home'
	}

]