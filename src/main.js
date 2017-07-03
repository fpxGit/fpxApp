import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import flexible from './assets/js/flexible.js'
// 引入elejs
import ElementUI from 'element-ui'

// 引入ele css
import 'element-ui/lib/theme-default/index.css'

// ele JS需要use
Vue.use(ElementUI)
// axios 发送请求
import axios from 'axios';

// 创建axios基本配置
var $http = axios.create({
    baseURL : ' https://bird.ioliu.cn/joke/'
});

// 为了使用方便，将$http挂载到vue身上
Vue.prototype.$http = $http;
Vue.use(VueRouter);


const router = new VueRouter({
	routes
})

var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
