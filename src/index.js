import Vue from 'vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import element from './element';
import app from './app.vue';

Vue.config.productionTip = false;
Vue.use(element);

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app');
