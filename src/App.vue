<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <keep-alive include="Home">
        <router-view :key="$route.path"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'into'
      }
    },
    watch: {
      $route(to,from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth > fromDepth ? 'into' : 'outof' 
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .into-enter
    opacity: 0
    transform: scale(.8)
  .into-leave-to 
    opacity: 0
    transform: scale(1.2)
  .into-enter-to
  .into-leave 
    opacity: 1 
  .into-enter-active
  .into-leave-active 
    transition: all .16s ease-in
  .outof-enter
    opacity: 0
    transform: scale(1.2)
  .outof-leave-to 
    opacity: 0
    transform: scale(.8)
  .outof-enter-to
  .outof-leave 
    opacity: 1 
  .outof-enter-active
  .outof-leave-active 
    transition: all .16s ease-in
</style>
