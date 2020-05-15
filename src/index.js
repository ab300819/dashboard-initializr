import Vue from 'vue';
import antDesign from 'ant-design-vue';
import app from './app.vue';

Vue.config.productionTip = false;

Vue.use(antDesign);

const root = document.createElement('div');
document.body.appendChild(root);

new Vue({
  render: (h) => h(app)
}).$mount(root);
