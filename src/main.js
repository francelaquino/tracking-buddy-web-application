import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false

const routes = [{
    path: '/',
    component: require('./components/AboutUs.vue').default
  },
  {
    path: '/aboutus',
    component: require('./components/AboutUs.vue').default
  },
  {
    path: '/faqs',
    component: require('./components/Faqs.vue').default
  },
  {
    path: '/privacypolicy',
    component: require('./components/PrivacyPolicy.vue').default
  },
  {
    path: '/terms',
    component: require('./components/Terms.vue').default
  },
  {
    path: '/forgotpassword',
    component: require('./components/ForgotPassword.vue').default
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
});




new Vue({
  router,
  render: h => h(App)
}).$mount('#app')