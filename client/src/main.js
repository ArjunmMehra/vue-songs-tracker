// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import store from './store/store'
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'
import('vuetify/dist/vuetify.min.css')
// import { MyPlugin } from './plugins/MyPlugin'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Toaster)
Vue.use(VueYouTubeEmbed)
// Vue.use(MyPlugin)

Vue.component('panel', Panel)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Toaster,
  components: { App },
  template: '<App/>'
})
