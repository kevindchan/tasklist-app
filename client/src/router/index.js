import Vue from "vue";
import VueRouter from "vue-router";
import Boards from '../views/Boards.vue'

Vue.use(VueRouter);

const routes = [
  //boards
  {
    path: '/boards',
    name: 'Boards',
    component: Boards,
  },
  //lists
];

const router = new VueRouter({
  routes
});

export default router;
