import Vue from 'vue'
import App from './App'

import router from './router'
import store from './store'
import api from './api'

import SvgIcon from './svgIcons/template/SvgIcon.vue'

/* svg icon chunk */
(() => import(/* webpackChunkName: "svgIcon" */ './svgIcons'))()

/* register global component */
Vue.component('svg-icon', SvgIcon)

Vue.config.productionTip = false

Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
