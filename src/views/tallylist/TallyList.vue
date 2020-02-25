<template>
  <div class="list">
    <tally-header></tally-header>
    <tally-title></tally-title>
    <div class="item-wrapper">
      <tally-item v-for="(item, index) in list" :key="index" :item="item"></tally-item>
    </div>
  </div>
</template>

<script>
import TallyHeader from './components/TallyHeader.vue'
import TallyTitle from './components/TallyTitle.vue'
import TallyItem from './components/TallyItem.vue'
import { mapState } from 'vuex'
export default {
  name: 'TallyList',
  components: {
    TallyHeader,
    TallyTitle,
    TallyItem
  },
  data () {
    return {
      // total: 0,
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
          price: 345.67,
          num: 6
        }]
      }, {
        id: "002",
        name: "Necessities",
        content: []
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
    }
  },
  // mounted () {
  //   console.log(this.index)
  // },
  computed: {
    ...mapState([
      'index'
    ]),
    name: function () {
      return this.lists[this.index].name
    },
    list: function () {
      return this.lists[this.index].content
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item-wrapper
    position: relative
    top: 2.64rem
    overflow: hidden
    &:before
      content: ""
      position: absolute
      bottom: 0
      width: 100%
      height: 1px
      margin-left: .24rem
      background: #f4f4f4
      z-index: 100
</style>
