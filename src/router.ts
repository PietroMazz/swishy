import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/feed',
      name: 'feed',
      component: () => import('./views/pages/SFeed.vue') ,
    },
    {
      path: '/wardrobe',
      name: 'wardrobe',
      component: () => import('./views/pages/SWardrobe.vue'),
    },
  ],
});
