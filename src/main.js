// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// elementUI组件
import ElementUI from 'element-ui';
// elementUI组件样式
import 'element-ui/lib/theme-chalk/index.css';
// 公共样式
import './assets/css/index.css';

// 挂在elementUI
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 临时关闭new 的校验规则(eslint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
