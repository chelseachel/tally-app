<template>
  <div>
    <ul class="container">
      <router-link tag="li" :to="'/list/' + item.id" 
      class="grid" 
      v-for="(item, index) in mylists" :key="item.id"
      @click="handleStoreId(index)"
      >
        <p class="grid-title">{{item.name}}</p>
        <p class="grid-item">{{item.id}}</p>
      </router-link>
    </ul>
    <span class='underline'></span> 
  </div> 
</template>

<script>

export default {
  name: 'HomeGrid',
  props : {
    mylists: Array
  },
  methods: {
    handleStoreId(index) {
      console.log(index)
      this.$store.commit('changeId', index)
    }
  }
}
</script>
import
<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .container
    position: relative
    top: 1.72rem
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
      min-width: 50%
      height: 3.4rem
      padding: .4rem
      box-sizing: border-box
      border-bottom: .02rem solid #eee
      .grid-title
        font-size: .36rem
        font-weight: 500
      .grid-item
        margin-top: .1rem
        font-size: .26rem
        color: #aaa
    .grid:nth-child(odd)
      border-right: .02rem solid #eee
</style>
