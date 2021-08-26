import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Job_ui from "./libs/51Ui/index.js"
import loadingDirective from "./libs/51Ui/loading/loading.js"

Vue.config.productionTip = false
Vue.use(Job_ui)
Vue.directive('loading',loadingDirective)

new Vue({
  render: h => h(App),
}).$mount('#app')
