// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import axios from 'axios'
import md5 from "blueimp-md5"
import Vant from 'vant'
import FastClick from 'fastclick'
import request from './request.js'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
Vue.use(Vant)
Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5
Vue.prototype.$request = request
import 'vant/lib/index.css'
import './assets/css/global.css'
import './assets/css/main.less'
import '@/rem.js'
import store from './store/store' //vuex
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()

import { Lazyload } from 'vant';
Vue.use(Lazyload);


Vue.config.productionTip = false

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 'App':() => import('./App') },
  store,
  template: '<App/>'
})
