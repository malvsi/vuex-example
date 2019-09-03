export default {
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
}
