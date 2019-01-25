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
    {
      path: '/wardrobe/:category',
      name: 'wardrobe-category',
      component: () => import('./views/pages/SWardrobeCategory.vue'),
      props: true
    },
    {
      path: '/explore',
      name: 'explore',
      component: () => import('./views/pages/SExplore.vue') ,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('./views/pages/SFavorites.vue') ,
    }
  ],
});
