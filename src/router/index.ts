import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import BooksView from '../views/BooksView.vue'
import ShowBookDetails from '../views/ShowBookDetails.vue';
import GenreDetails from '../views/GenreDetails.vue';



import HomePage from '../views/HomePage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage

    },
    {
      path: '/books',
      name: 'BooksView',
      component: BooksView
    },
    {
      path: '/showBooks/:booksObj/:bList',
      name: 'ShowBookDetails',
      component: ShowBookDetails,
      props:true
    },
    {
      path: '/genres/:booksObj1/:bList',
      name: 'GenreDetails',
      component: GenreDetails,
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
