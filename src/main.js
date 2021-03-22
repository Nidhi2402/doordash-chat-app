import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import createStore from './client/store';
import router from './router';
import './client/style/index.scss';

Vue.config.productionTip = false;
const store = createStore();
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
