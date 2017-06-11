// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MobileNavbar from './mobile-navbar.vue'
import ProfileSidebar from './profile-sidebar.vue'
import CreateChallenge from './create-challenge.vue'
import RandomChallenge from './random-challenge.vue'
import CompletedChallenge from './completed-challenge.vue'

Vue.config.productionTip = false

Vue.component('mobile-navbar', MobileNavbar)
Vue.component('profile-sidebar', ProfileSidebar)
Vue.component('create-challenge', CreateChallenge)
Vue.component('random-challenge', RandomChallenge)
Vue.component('completed-challenge', CompletedChallenge)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
