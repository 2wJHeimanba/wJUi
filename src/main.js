import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Job_ui from "./libs/51Ui/index.js"

Vue.config.productionTip = false
Vue.use(Job_ui)

new Vue({
  render: h => h(App),
}).$mount('#app')
