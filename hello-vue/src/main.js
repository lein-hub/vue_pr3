import Vue from 'vue'
import App from './App old1.vue'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
