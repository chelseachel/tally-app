import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: 0,
    lists: [{
        id: "001",
        name: "Furniture",
        content: [{
          info: "Double Bed",
          price: 5800,
          num: 1
        },{
          info: "Armchair",
          price: 1280,
          num: 3
        },{
          info: "Chair",
          price: 580,
          num: 5
        },{
          info: "Bookshelf",
          price: 345.68,
          num: 6
        }]
      }, {
        id: "002",
        name: "Necessities",
        content: [{
          info: "Tissue",
          price: 9.9,
          num: 4
        }, {
          info: "Water",
          price: 16.8,
          num: 2
        }, {
          info: "Mask",
          price: 5,
          num: 20
        }]
      }, {
        id: "003",
        name: "Meals",
        content: []
      },
        {
        id: "004",
        name: "Travel",
        content: []
      }, {
        id: "005",
        name: "Books",
        content: []
      }]
  },
  mutations: {
    changeIndex(state, index) {
      state.index = index
    }
  }
})
