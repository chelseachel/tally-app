<template>
  <div class="item-wrapper">
    <tally-item 
      v-for="(item, index) in list" 
      :key="gernerateId(index)" 
      :item="item" 
      :index="index" 
      :name="name" 
      @updateItem="handleSetItem"
      @updateNum="handleUpdateNum"
      @delete="handleDeleteItem(index)"
    ></tally-item>
  </div>
</template>

<script>
import TallyItem from './children/TallyItem.vue'
export default {
  name: 'TallyList',
  props: {
    list: Array,
    name: String,
    listIndex: Number
  },
  components: {
    TallyItem
  },
  methods: {
    handleSetItem (info, price, index) {
      this.$store.commit('setItem', {
        info: info, 
        price: price, 
        index: index,
        listIndex: this.listIndex
      })
    },
    handleUpdateNum (num, index) {
      this.$store.commit('setQuantity', {
        num: num,
        index: index,
        listIndex: this.listIndex
      })
    },
    handleDeleteItem (index) {
      this.$store.commit('deleteItem', {
        index: index,
        listIndex: this.listIndex
      })
    },
    gernerateId (index) {
      let id = this.name + index
      return id
    }
  }
}
</script>

<style lang="stylus" scoped>
  .item-wrapper
    overflow: auto
    position: absolute
    top: 2.6rem
    left: 0
    right: 0
    bottom: 0
    border-bottom: 1px solid #fafafa
</style>
