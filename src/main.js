// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Lodash from 'lodash';
import iView from 'iview';
import Moment from 'moment';
import Axios from './api'
import Common from './common'

import 'iview/dist/styles/iview.css';
import 'normalize.css'

// 兼容ie
import 'babel-polyfill'
import './libs/reAnimation'
import Es6Promise from 'es6-promise'
import ElementDataset from 'element-dataset';
ElementDataset();
Es6Promise.polyfill();

Vue.use(iView);
Vue.use(Common);

Vue.prototype.$http = Axios;
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
