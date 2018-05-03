import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/homeComponent '
import Left from '@/components/leftContent'
import Right from '@/components/rightContent'

Vue.use(Router)

export default new Router({
  mode:'hash',  //history
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // path: '/home/:num/user/:name',
      path: '/home',
      name: 'home',
      component: Home,
      redirect:'/home/left',
      children:[
        {
          path: 'left',
          name: 'left',
          component: Left
        },
        { 
          path: 'right',
          name: 'right',
          component: Right
        },
      ]
    },{
      path:'*',
      redirect:'/index',
    }
  ],
})
