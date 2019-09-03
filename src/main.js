// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.productionTip = false

let listData = [
  {
    title: 'html+css'
  },
  {
    title: 'html5+css3'
  },
  {
    title: 'javascript'
  },
  {
    title: 'angular'
  },
  {
    title: 'react'
  },
  {
    title: 'vue'
  },
  {
    title: 'jquery'
  },
  {
    title: 'nodejs'
  }
]

const store = new Vuex.Store({
  state: {
    titleList: listData,
    isShow: false,
    value: ''
  },
  mutations: {
    setIsShow (state, flag) {
      state.isShow = flag
    },
    setValue (state, val) {
      state.value = val
    }
  },
  getters: {
    getTitleList (state) {
      return state.titleList
    },
    getIsShow (state) {
      return state.isShow
    },
    getValue (state) {
      return state.value
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
