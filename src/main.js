// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VeeValidate from 'vee-validate';
import VueI18n from 'vue-i18n';Vue.use(VueI18n);
import zhTW from 'vee-validate/dist/locale/zh_TW';
import dateFilter from './filters/date';



library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

axios.defaults.withCredentials = true;

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

Vue.filter('currency',currencyFilter);
Vue.filter('date', dateFilter);
const i18n = new VueI18n({
  locale: 'zhTW'
});
Vue.use(VeeValidate, {
  i18n,
  dictionary: {
    zhTW,
  }
});



/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

});

router.beforeEach((to, from, next) => {
  console.log('to', to, 'fron', from, 'next', next);
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
