import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../components/index/index'
import departlist from '../components/departlist/departlist'
import yueyue from '../components/yuyue/yuyue'
import adcingtime from '../components/acdingtime/acdingtime'
import acdingdt from '../components/acdingdt/acdingdt'
import oppinttimelist from '../components/oppinttimelist/oppinttimelist'
import chooseappartment from '../components/chooseappartment/chooseappartment'
import success from '../components/success/success'
import orderdetail from '../components/orderdetail/orderdetail'
import appointrecord from '../components/appointrecord/appointrecord'

Vue.use(Router)

export default new Router({
  //linkActiveClass: 'active', //将激活的路由添加一个mui-active类名称
  routes: [
    {
      path: '/',
      redirect: '/Index',
      meta:{index:0},//meta对象的index用来定义当前路由的层级,由小到大,由低到高,
    },
    // {
    //   path: '/index',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/yuyue/:section_id',
      name: 'yueyue',
      meta:{index:1},//meta对象的index用来定义当前路由的层级,由小到大,由低到高,
      component: yueyue,
    },
    {
      path: '/adcingtime',
      name: 'adcingtime',
      meta:{index:2},//meta对象的index用来定义当前路由的层级,由小到大,由低到高,
      component: adcingtime,
      
    },
    {
      path: '/acdingdt',
      name: 'acdingdt',
      meta:{index:3},//meta对象的index用来定义当前路由的层级,由小到大,由低到高,
      component: acdingdt
    },
    {
      path: '/chooseappartment',
      name: 'chooseappartment',
      meta:{index:4},//meta对象的index用来定义当前路由的层级,由小到大,由低到高,
      component: chooseappartment
    },
    {
      path: '/success',
      name: 'success',
      meta:{index:5},//meta对象的index用来定义当前路由的层级,由小到大,由低到高,
      component: success
    },
    {
      path: '/orderdetail',
      name: 'orderdetail',
      meta:{index:6},//meta对象的index用来定义当前路由的层级,由小到大,由低到高,
      component: orderdetail
    },
    {
      path: '/appointrecord',
      name: 'appointrecord',
      //meta:{index:6},//meta对象的index用来定义当前路由的层级,由小到大,由低到高,
      component: appointrecord
    }
  ]
})
