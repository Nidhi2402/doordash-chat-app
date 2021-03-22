import Vue from 'vue';
import Router from 'vue-router';
import ChatLogin from './client/page/ChatLogin.vue';
import UserChats from './client/page/UserChats.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Chat Login',
      component: ChatLogin,
      meta: {
        auth: true,
        title: 'DoorDash Chat login',
      },
    },
    {
      path: '/chats/:path(.*)?',
      name: 'User Chats',
      component: UserChats,
      meta: {
        auth: true,
        title: 'DoorDash Messanger',
      },
    },
  ],
});
