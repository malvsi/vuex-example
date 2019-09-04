export default {
  SET_VALUE ({commit, dispatch}, obj) { // {commit} = context es6的解构赋值 {commit}相当于context.commit
    commit({
      type: 'SET_VALUE',
      val: obj.val
    })
    dispatch('TEXT_ACTION', {
      text: '测试'
    })
  },
  SET_IS_SHOW (context, obj) {
    context.commit('SET_IS_SHOW', {
      flag: obj.flag
    })
  },
  // eslint-disable-next-line no-empty-pattern
  TEXT_ACTION ({}, obj) {
    console.log(obj)
  }
}
