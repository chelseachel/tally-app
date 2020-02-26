<template>
  <div class="item-wrapper">
    <tally-item v-for="(item, index) in list" :key="index" :item="item" @delete="handleDeleteItem(index)"></tally-item>
  </div>
</template>

<script>
import TallyItem from './common/TallyItem.vue'
export default {
  name: 'TallyItems',
  props: {
    list: Array,
  },
  components: {
    TallyItem
  },
  data () {
    return {
    }
  },
  methods: {
    handleDeleteItem (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item-wrapper
    position: relative
    margin-top: 2.64rem
    overflow: hidden
    &:before
      content: ""
      position: absolute
      bottom: 0
      width: 100%
      height: 1px
      margin-left: .24rem
      background: #f4f4f4
      z-index: 20
</style>
