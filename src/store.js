import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: 0
  },
  mutation: {
    changeId(state, index) {
      state.index = index
    }
  }
})
