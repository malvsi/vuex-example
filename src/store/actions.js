export default {
  SET_VALUE (context, obj) {
    context.commit({
      type: 'SET_VALUE',
      val: obj.val
    })
  },
  SET_IS_SHOW (context, obj) {
    context.commit({
      type: 'SET_IS_SHOW',
      flag: obj.flag
    })
  }
}
