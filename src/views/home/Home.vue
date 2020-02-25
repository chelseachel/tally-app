<template>
  <div class="home">
    <div class="title">My Lists</div>
    <home-grid :mylists="lists"></home-grid>
    <div class="iconfont iconadd3"></div>
  </div>
</template>

<script>
import HomeGrid from './components/HomeGrid.vue'
export default {
  name: 'Home',
  components: {
    HomeGrid
  },
  data () {
    return {
      lists: [{
        id: "001",
        name: "Furniture",
        content: [{
          info: "Double Bed",
          price: "5800",
          num: 1
        },{
          info: "Armchair",
          price: "1280",
          num: 3
        },{
          info: "Chair",
          price: "580",
          num: 5
        },{
          info: "Bookshelf",
          price: "345.67",
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
  computed: {
    // mylists () {
    //   const mylists = []
    //   for (let i in this.lists) {
    //     mylists.push(i)
    //   }
    //   return mylists
    // }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .title
    position: fixed
    height: 1.72rem
    line-height: 1.72rem
    font-size: .48rem
    font-weight: 800
    margin-left: 8.6%
    z-index: 10
  .iconadd3
    position: fixed
    bottom: .6rem
    left: 50%
    transform: translateX(-50%)
    font-size: 1rem
    color: #aaa
    z-index: 2
</style>
