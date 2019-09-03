import {SET_IS_SHOW, SET_VALUE} from './mutations-types'

export default {
  [SET_IS_SHOW]: (state, obj) => {
    state.isShow = obj.flag
  },
  [SET_VALUE]: (state, val) => {
    state.value = val
  }
}
