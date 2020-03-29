import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios' //把axios绑定到vue实例中，方便用this去调用，这样就不需要重复引入了
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'

import App from './App.vue'

//这是mock的开关，接口开发完成，前后端联调上线就不需要了
const mock = false; 
if(mock){
  require('./mock/api')
}

// axios.defaults.baseURL设置：根据前端的跨域方式做调整
  // 1.接口代理：
    axios.defaults.baseURL = '/api';
  // 2.CORS和jsonp跨域：
    // import env from './env'
    // axios.defaults.baseURL = env.baseURL; 
  // 3.easy-mock平台
    // axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5e742859c22f1e7cecdc3a8d/mimall';
  // 4.mockjs：
    // axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = location.hash;
  if(res.status == 0){
    return res.data
  }
  else if(res.status == 10){
    // 登录拦截
    // 使用window.location.href跳的原因是，在main.js中使用路由是没用的，路由是挂载在路由实例中，在页面中才能使用this.$route.push，这里的this不是指向vue实例index
    if(path !== '#/index')
      window.location.href = '/#/login'
  }
  else{
    Promise.reject(res)
    // alert(res.msg)
  }
},function(error){
  console.log(error)
})


Vue.use(VueAxios,axios);
Vue.use(VueLazyLoad,{
  loading: '/imgs/loading-svg/loading.svg'
});
Vue.use(VueCookie);
Vue.config.productionTip = false //生产环境的提示

new Vue({ 
  store,
  router,
  render: h => h(App),
}).$mount('#app')
