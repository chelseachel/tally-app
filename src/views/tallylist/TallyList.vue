<template>
  <div class="list">
    <tally-header></tally-header>
    <tally-title></tally-title>
    <div class="item-wrapper">
      <tally-item></tally-item>
      <tally-item></tally-item>
      <tally-item></tally-item>
      <tally-item></tally-item>
    </div>
  </div>
</template>

<script>
import TallyHeader from './components/TallyHeader.vue'
import TallyTitle from './components/TallyTitle.vue'
import TallyItem from './components/TallyItem.vue'
export default {
  name: 'TallyList',
  components: {
    TallyHeader,
    TallyTitle,
    TallyItem
  },
  data () {
    return {
      list: []
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
