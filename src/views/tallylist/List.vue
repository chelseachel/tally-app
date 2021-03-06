<template>
  <div class="list">
    <tally-header @showmore="handleShowMore"></tally-header>
    <tally-title :name="name" :total="total"></tally-title>
    <tally-list :list="list" :name="name" :listIndex="index" :key="name+'list'"></tally-list>
    <transition name="fade">
      <div 
        class="iconfont iconadd1"
        v-if="showFixed"
        :class="{rotate: rotateIcon}" 
        @click="handleAddClick"
      ></div>
    </transition>
    <transition name="fade">
      <edit-tally-item
        v-if="showEdit"
        @close="handleCloseItem" 
        @save-item="handleSaveItem"
      ></edit-tally-item>
    </transition>
    <transition name="fade">
      <edit-more-menu 
        v-if="showMore" 
        @close="handleCloseMore"
        @show-name="handleShowName"
        @delete-list="handleDeleteList"
      ></edit-more-menu>
    </transition>
    <transition name="fade">
      <edit-list-name 
        :name="name"
        :key="name"
        v-if="showName"
        @close="handleCloseName"
        @save-name="handleSaveName"
      ></edit-list-name>
    </transition>
  </div>
</template>

<script>
import TallyHeader from './components/TallyHeader.vue'
import TallyTitle from './components/TallyTitle.vue'
import TallyList from './components/TallyList.vue'
import EditTallyItem from '@/common/EditTallyItem.vue'
import EditMoreMenu from '@/common/EditMoreMenu.vue'
import EditListName from '@/common/EditListName.vue'
import { mapState } from 'vuex'
export default {
  name: 'List',
  components: {
    TallyHeader,
    TallyTitle,
    TallyList,
    EditTallyItem,
    EditMoreMenu,
    EditListName
  },
  data () {
    return {
      showFixed: false,
      showEdit: false,
      showMore: false,
      showName: false,
      rotateIcon: false
    }
  },
  methods: {
    handleAddClick () {
      this.showEdit = true
      this.rotateIcon = true
    },
    handleCloseItem () {
      this.showEdit = false
      this.rotateIcon = false
    },
    handleSaveItem (info, price) {
      const newItem = {
        info: info,
        price: price,
        num: 0
      }
      this.$store.commit('addItem', {
        newItem,
        listIndex: this.index
      })
      this.handleCloseItem()
    },
    handleShowMore () {
      this.showMore = true
    },
    handleCloseMore () {
      this.showMore = false
    },
    handleShowName () {
      this.showMore = false
      this.showName = true
    },
    handleSaveName (newName) {
      this.$store.commit('setListName', {
        index: this.index, 
        newName: newName
      })
      this.handleCloseName()
    },
    handleCloseName () {
      this.showName = false
    },
    handleDeleteList () {
      this.$store.commit('deleteList', this.index)
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
  },
  created() {
    this.showFixed = false
  },
  mounted() {
    const timer = setTimeout(() => {
      this.showFixed = true
      clearTimeout(timer);
    }, 200)
  }
}
</script>

<style lang="stylus" scoped>
  .list
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom:0
    .iconadd1
      position: fixed
      bottom: .7rem
      left: 50%
      transform: translateX(-50%)
      font-size: 1.16rem
      color: #aaaab0
      z-index: 2
      transition: all .3s
    .rotate
      transform: translateX(-50%) rotate(45deg)
    .fade-enter-active
    .fade-leave-active
      transition: opacity .3s ease-in
    .fade-enter
    .fade-leave-to
      opacity: 0
    .fade-enter-to
    .fade-leave 
      opacity: 1 
</style>
