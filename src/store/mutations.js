import * as types from './mutation-types'

export default {
  [types.USER_INFO] (state, userInfoData) {
    state.userInfoData = userInfoData
  },
  [types.SIDN_DATA] (state, sign) {
    state.sign = sign
  }
}
