import Vue from 'vue';
import VueRouter from 'vue-router';
import DatavDesigner from '../views/datavDesigner.vue';
import DatavRender from '../views/datavRender.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'datavDesigner',
    component: DatavDesigner,
  },
  {
    path: '/DatavRender',
    name: 'DatavRender',
    component: DatavRender,
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
