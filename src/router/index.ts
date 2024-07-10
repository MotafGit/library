import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
import ShowBookDetails from '../components/ShowBookDetails.vue';
import ShowBookView from '../views/ShowBookView.vue';

import Main from '../main.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main

    },
    {
      path: '/books',
      name: 'BooksView',
      component: BooksView
    },
    {
      path: '/showBooks/:id/:name/:image/:reviewScore/:author/:genre/:intro',
      name: 'showBookDetails',
      component: ShowBookDetails,
      props:true
    },
   // {
     // path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
     // component: () => import('../views/AboutView.vue')
    //}
  ]

})

export default router
