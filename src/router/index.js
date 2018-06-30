import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Jokes from '@/components/Jokes'
import Container from '@/components/Container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/firstroute',
      name: 'FirstRoute',
      component: Jokes
    },
    {
      path:'/cryptocontainer',
      name:'CryptoContainer',
      component: Container
    }
  ]
})
