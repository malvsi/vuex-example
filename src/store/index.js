import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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

export default new Vuex.Store({
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
  },
  actions: {
  
  }
})
