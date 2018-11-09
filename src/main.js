// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './common/css/common.css'
import './common/js/common-rem.js'
import './common/js/jquery-1.10.2.min.js'
import './common/fonts/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './common/css/animate.css'



// require('./mock.js')


Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
// 引入mockjs
// require('./mock.js')
fastclick.attach(document.body)
//模拟假数据openid为123456
localStorage.setItem("OpenId","123456")
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
