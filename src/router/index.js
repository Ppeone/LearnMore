import Vue from 'vue'
import Router from 'vue-router'

import survey from "../components/teach/survey"
import studentManage from "../components/teach/studentManage"
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
  ]
})
