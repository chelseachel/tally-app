<template>
  <div class="container" @click="handleCloseClick">
    <div class="more">
      <div class="operate" @click="handleEditClick">
        <span class="iconfont iconeditor"></span>
        Edit list name
      </div>
      <div class="operate" @click="handleDeleteClick">
        <span class="iconfont icontrash"></span>
        Delete list
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TallyHeader',
  methods: {
    handleCloseClick (e) {
      if (e.target.className === 'container') {
        this.$emit('close')
      }
    },
    handleEditClick () {
      this.$emit('show-name')
    },
    handleDeleteClick () {
      const message = confirm('确定删除整个清单吗？')
      if (message === true) {
        this.$nextTick(function() {
          this.$emit('delete-list')
          this.$router.push('/')
        }, 200)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .container
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: rgba(170,170,170,.2)
    z-index: 100
    .more
      position: absolute
      top: 1rem
      right: .8rem
      padding: .28rem .4rem
      background: #fff
      border-radius: .12rem
      box-sizing: border-box
      box-shadow: 0 .06rem .2rem -.04rem rgba(18, 22, 33, .1)
      .operate
        line-height: .86rem
        .iconeditor
          margin-right: .1rem
          // color: #aaa
        .icontrash
          margin-right: .1rem
</style>
