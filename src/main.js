// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Lodash from 'lodash';
import Moment from 'moment';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css'

// 兼容ie
import 'babel-polyfill'
import './libs/reAnimation'
import Es6Promise from 'es6-promise'
import ElementDataset from 'element-dataset';
ElementDataset();
Es6Promise.polyfill();

Vue.use(ElementUI);

// 添加全局变量
global._ = Lodash;
global.moment = Moment;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app');
