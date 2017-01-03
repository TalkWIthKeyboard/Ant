/**
 * Created by CoderSong on 16/12/14.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


let router = new VueRouter({
  routes: [{
    name: 'login',
    path: '/login',
    component: require('./views/login.vue')
  },
  {
    name: 'index',
    path: '/index',
    component: require('./views/form.vue')
  }, {
    name: 'package',
    path: '/package/:start/:end',
    component: require('./views/package.vue')
  }, {
    name: 'user',
    path: '/user',
    component: require('./views/user.vue')
  },{
    name: 'task',
    path: '/task',
    component: require('./views/task.vue')
  },{
    name: 'sending',
    path: '/user/sending',
    component: require('./views/sending.vue')
  },{
    name: 'receiving',
    path: '/user/receiving',
    component: require('./views/receiving.vue')
  },{
    name: 'history',
    path: '/user/history',
    component: require('./views/history.vue')
  },{
    path: '*',
    redirect: '/index'
  }]
});

export default router;