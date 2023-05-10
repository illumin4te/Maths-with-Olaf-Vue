import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Page from './views/page'
import Page1 from './views/page1'
import Page2 from './views/page2'
import Page3 from './views/page3'
import Page4 from './views/page4'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Page',
      path: '/111',
      component: Page,
    },
    {
      name: 'Page1',
      path: '/',
      component: Page1,
    },
    {
      name: 'Page2',
      path: '/1111',
      component: Page2,
    },
    {
      name: 'Page3',
      path: '/1',
      component: Page3,
    },
    {
      name: 'Page4',
      path: '/11',
      component: Page4,
    },
  ],
})
