import Vue from 'vue'
import router from 'vue-router'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './app.vue'

const root = document.createElement('div');
document.body.appendChild(root);

Vue.use(Element);
new Vue({
    render: (h) => h(App)
}).$mount(root);