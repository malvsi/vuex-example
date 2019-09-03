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
    value: '',
    todos: [
      {id: 1, done: true},
      {id: 2, done: false}
    ]
  },
  mutations: {
    setIsShow (state, obj) {
      state.isShow = obj.flag
    },
    setValue (state, val) {
      state.value = val
    }
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id === id)
    },
    getTodo: (state) => state.todos[1],
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
