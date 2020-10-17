import VueRouter from 'vue-router'
import Vue from 'vue';

import found from '../view/found/foudmusic.vue'
import friend from '../view/friend/friend'
import mall from '../view/mall/mall'
import musicman from '../view/musicman/musicman.vue'
import my from '../view/my/mymusic.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);
// const routes=[{path:'/',compoent:top}]

const routes=[
    {path:'/',redirect:'/found/tuijian'},
    {path:'/found',
    component:found,
    children:[        {
      path: '', //默认子路由
      name: '',
      redirect:'/found/tuijian'
    },
    {
      path: 'tuijian', //默认子路由
      name: 'tuijian',
      component: () => import('../view/children/tuijian.vue')
    },
    {
      path: 'gedan', //默认子路由
      name: 'gedan',
      component: () => import('../view/children/gedan.vue')
    },
    {
      path: 'geshou', //默认子路由
      name: 'geshou',
      component: () => import('../view/children/geshou.vue')
    },
    {
      path: 'paihang', //默认子路由
      name: 'paihang',
      component: () => import('../view/children/paihang.vue')
    },    {
      path: 'xindie', //默认子路由
      name: 'xindie',
      component: () => import('../view/children/xindie.vue')
    },  {
      path: 'diantai', //默认子路由
      name: 'diantai',
      component: () => import('../view/children/diantai.vue')
    },{
      path:'playlist/:id',
      component: () => import('../view/playlist/img0.vue')
    },
  ]
    },
    {path:'/friend',component:friend},
    {path:'/mall',component:mall},
    {path:'/musicmaker',component:musicman},
    {path:'/my',component:my},

]
const routers =new VueRouter({
    routes,
    mode: 'history'
})

export default routers