import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  userInfoData: null,
  sign: null
}

export default new Vuex.Store({
  state,
  mutations
})
