<template>
  <div class="item-wrapper">
    <tally-item v-for="(item, index) in list" :key="gernerateId(index)" :item="item" :name="name" @delete="handleDeleteItem(index)"></tally-item>
  </div>
</template>

<script>
import TallyItem from './children/TallyItem.vue'
export default {
  name: 'TallyList',
  props: {
    list: Array,
    name: String
  },
  components: {
    TallyItem
  },
  methods: {
    handleDeleteItem (index) {
      this.list.splice(index, 1)
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
    position: relative
    border-bottom: 1px solid #fafafa
</style>
