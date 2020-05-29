<template>
  <div id="app">
    <transition mode="out-in">
      <router-view :key="$route.path"/>
    </transition>
  </div>
</template>

<style lang="stylus" scoped>
  .v-enter
  .v-leave-to 
    opacity: 0
  .v-enter-to
  .v-leave 
    opacity: 1 
  .v-enter-active
  .v-leave-active 
    transition: all .2s
</style>
