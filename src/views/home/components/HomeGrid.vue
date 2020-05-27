<template>
  <div>
    <ul class="container">
      <router-link tag="li" :to="'/list/' + index" 
      class="grid" 
      v-for="(item, index) in lists" :key="index"
      @click.native="handleStoreIndex(index)"
      >
        <p class="grid-title">{{item.name}}</p>
        <p class="grid-item">{{item.content.length}} ITEMS</p>
      </router-link>
    </ul>
    <span class='underline'></span> 
  </div> 
</template>

<script>
export default {
  name: 'HomeGrid',
  props : {
    lists: Array
  },
  methods: {
    handleStoreIndex(index) {
      this.$store.commit('changeIndex', index)
    },
    gernerateId (index) {
      let id = this.lists + index
      return id
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  @import '~@/assets/styles/mixins.styl'
  .container
    position: relative
    width: 92%
    margin: 0 4%
    display: flex
    flex-wrap: wrap
    &:before
      content: ""
      position: absolute
      bottom: 0
      width: 100%
      height: .04rem
      background: #fff 
    .grid
      width: 50%
      height: 3.4rem
      padding: .4rem
      box-sizing: border-box
      border-bottom: .02rem solid #eee
      .grid-title
        width: 100%
        max-height: 1.6rem
        line-height:.4rem
        font-size: .36rem
        font-weight: 500
        ellipsis()
      .grid-item
        margin-top: .1rem
        font-size: .26rem
        color: #aaa
    .grid:nth-child(odd)
      border-right: .02rem solid #eee
</style>
