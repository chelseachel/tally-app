<template>
  <div class="list">
    <tally-header></tally-header>
    <tally-title :name="name" :total="total"></tally-title>
    <tally-items :list="list"></tally-items>
    <div class="iconfont iconadd1" @click="handleAddClick"></div>
    <div class="instruction">
      <p><b>Instructions:</b></p>
      <p>● 左滑条目添加数量</p>
      <p>● 点击条目编辑内容</p>
      <p>● 点击右侧数量可直接修改</p>
    </div>
    <tally-edit 
    v-show="showEdit" 
    @close="handleCloseItem" 
    @saveItem="handleSaveItem"></tally-edit>
  </div>
</template>

<script>
import TallyHeader from './components/TallyHeader.vue'
import TallyTitle from './components/TallyTitle.vue'
import TallyItems from './components/TallyItems.vue'
import TallyEdit from './components/common/TallyEdit.vue'
import { mapState } from 'vuex'
export default {
  name: 'TallyList',
  components: {
    TallyHeader,
    TallyTitle,
    TallyItems,
    TallyEdit
  },
  data () {
    return {
      showEdit: false
    }
  },
  methods: {
    handleAddClick () {
      this.showEdit = true
    },
    handleCloseItem () {
      this.showEdit = false
    },
    handleSaveItem (item, price) {
      this.list.push({
        info: item,
        price: price,
        num: 0
      })
      this.showEdit = false
    }
  }, 
  computed: {
    ...mapState([
      'index', 'lists'
    ]),
    name: function () {
      return this.lists[this.index].name
    },
    list: function () {
      return this.lists[this.index].content
    },
    total: function () {
      let total = 0
      for (let i = 0; i < this.list.length; i++) {
        total += this.list[i].price * this.list[i].num
      }
      return total
    }
  }
}
</script>

<style lang="stylus" scoped>
  .iconadd1
    position: fixed
    bottom: .7rem
    left: 50%
    transform: translateX(-50%)
    font-size: .9rem
    color: #aaa
    z-index: 2
  .instruction
    margin: .4rem
    margin-top: .3rem
    line-height: .6rem
    color: #D7D7D7
</style>
