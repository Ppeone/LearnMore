import Vue from 'vue'
import Router from 'vue-router'

import survey from "../components/teach/survey"
import studentManage from "../components/teach/studentManage"
import liveClass from "../components/teach/liveClass"
import financeManage from "../components/teach/financeManage"
import rechargeManage from "../components/teach/rechargeManage"
import helpAndSupport from "../components/teach/helpAndSupport"
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/survey'
    },
    {
      path: '/survey',
      name: 'survey',
      component: survey
    },
    {
      path: '/studentManage',
      name: 'studentManage',
      component: studentManage
    }
    ,
    {
      path: '/liveClass',
      name: 'liveClass',
      component: liveClass
    }
    ,
    {
      path: '/financeManage',
      name: 'financeManage',
      component: financeManage
    }
    ,
    {
      path: '/rechargeManage',
      name: 'rechargeManage',
      component: rechargeManage
    }
    ,
    {
      path: '/helpAndSupport',
      name: 'helpAndSupport',
      component: helpAndSupport
    }
  ]
})
