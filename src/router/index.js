import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home.vue'
import List from '../views/tallylist/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        lastPosition: true
      }
    },
    {
      path: '/list/:id',
      name: 'List',
      component: List
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
