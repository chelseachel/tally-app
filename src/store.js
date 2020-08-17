import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: 0,
    lists: [{
        id: "001",
        name: "Meals",
        content: [{
          info: "Milk",
          price: 5,
          num: 1
        },{
          info: "Bread",
          price: 6,
          num: 3
        },{
          info: "Apple",
          price: 3,
          num: 5
        },{
          info: "Eggs",
          price: 1,
          num: 6
        }]
      }, {
        id: "002",
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
          info: "Bookshelf",
          price: 345.68,
          num: 5
        },{
          info: "Chair",
          price: 599,
          num: 6
        }]
      },{
        id: "003",
        name: "Travel",
        content: [{
          info: "Example",
          price: 10,
          num: 1
        }]
      },{
        id: "004",
        name: "Business",
        content: [{
          info: "Example",
          price: 10,
          num: 1
        }]
      },{
        id: "005",
        name: "操作指南",
        content: [{
          info: "向左拖动增加数量",
          price: 0,
          num: 1
        },{
          info: "向右拖动数量清零",
          price: 0,
          num: 3
        },{
          info: "点击编辑条目",
          price: 0,
          num: 5
        },{
          info: "右上角可编辑列表",
          price: 0,
          num: 6
        }]
      }]
  },
  mutations: {
    changeIndex(state, index) {
      state.index = index
    }
  }
})
