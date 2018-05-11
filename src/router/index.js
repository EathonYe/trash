import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Evaluation from '@/pages/Evaluation'
import EvaluationMgmt from '@/pages/EvaluationMgmt'
import EvaluationDetail from '@/pages/EvaluationDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/evaluation',
      name: 'Evaluation',
      component: Evaluation
    },
    {
      path: '/evaluationMgmt',
      name: 'EvaluationMgmt',
      component: EvaluationMgmt
    },
    {
      path: '/evaluationdetail/:id',
      name: 'EvaluationDetail',
      component: EvaluationDetail
    }
  ]
})
