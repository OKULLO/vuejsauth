import Vue from 'vue';
import VueRouter from 'vue-router';
// import Index from './pages/Index.vue';
// import Landing from './pages/Landing.vue';
import Login from '@/components/login';
import forgot from '@/components/forgotpassword';
import Register from '@/components/register';
// import Profile from './pages/Profile.vue';
// import Categories from './pages/Categories.vue';
// import AllProducts from './pages/AllProducts.vue';


Vue.use(VueRouter);


const routes= [
    {
      path: '/',
      component:  Login,
      name: 'login',
    },
     {
      path: '/home',
      component: () => import(/* webpackChunkName: "forgotpassword" */ '../views/home.vue'),
      name: 'home'
    },
    {
      path: '/forgotpassword',
      component:  forgot,
      name: 'forgotpassword',
    },
    {
      path: '/register',
      component:  Register,
      name: 'register',
    },


]

const router = new VueRouter({
  mode:"history",
  linkExactActiveClass: 'active',
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes
})

export default router