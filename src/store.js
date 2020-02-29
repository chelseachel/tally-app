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
          info: "Bookshelf",
          price: 345.68,
          num: 5
        },{
          info: "向左拖动增加数量",
          price: 0,
          num: 0
        },{
          info: "向右拖动数量清零",
          price: 0,
          num: 6
        },{
          info: "点击编辑条目",
          price: 0,
          num: 0
        }]
      }, {
        id: "002",
        name: "Necessities",
        content: [{
          info: "Tissue",
          price: 19.9,
          num: 4
        },{
          info: "Water",
          price: 16.8,
          num: 2
        },{
          info: "Mask",
          price: 5,
          num: 20
        },{
          info: "向左拖动增加数量",
          price: 0,
          num: 0
        },{
          info: "向右拖动数量清零",
          price: 0,
          num: 6
        },{
          info: "点击编辑条目",
          price: 0,
          num: 0
        }]
      }, {
        id: "003",
        name: "Meals",
        content: [{
          info: "向左拖动增加数量",
          price: 0,
          num: 0
        },{
          info: "向右拖动数量清零",
          price: 0,
          num: 6
        },{
          info: "点击编辑条目",
          price: 0,
          num: 0
        }]
      },
        {
        id: "004",
        name: "Travel",
        content: [{
          info: "向左拖动增加数量",
          price: 0,
          num: 0
        },{
          info: "向右拖动数量清零",
          price: 0,
          num: 6
        },{
          info: "点击编辑条目",
          price: 0,
          num: 0
        }]
      }, {
        id: "005",
        name: "Books",
        content: [{
          info: "向左拖动增加数量",
          price: 0,
          num: 0
        },{
          info: "向右拖动数量清零",
          price: 0,
          num: 6
        },{
          info: "点击编辑条目",
          price: 0,
          num: 0
        }]
      }]
  },
  mutations: {
    changeIndex(state, index) {
      state.index = index
    }
  }
})
