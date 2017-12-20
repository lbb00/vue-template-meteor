import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'
import api from './api'

// svg icon chunk
(() => import(/* webpackChunkName: "svgIcon" */ './icons'))()

// import global components
const BaseSvgIcon = () => import(/* webpackChunkName: "globalCompoents" */ './components/BaseSvgIcon')

Vue.config.productionTip = false

Vue.prototype.$api = api

// register global components
Vue.component('svg-icon', BaseSvgIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
