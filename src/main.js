import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Job_ui from "./libs/51Ui/index.js"
import loadingDirective from "./libs/51Ui/loading/loading.js"
import create from "./utils/create.js"
import MessageBox from "./utils/MessageBox.js"

Vue.config.productionTip = false
Vue.use(Job_ui)
Vue.directive('loading',loadingDirective)
Vue.prototype.$create=create
Vue.prototype.$alert=MessageBox

new Vue({
  render: h => h(App),
}).$mount('#app')
