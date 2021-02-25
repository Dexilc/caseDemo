import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入样式
import "vue-easytable/libs/theme-default/index.css";
// 引入组件库
import VueEasytable from "vue-easytable";

Vue.use(VueEasytable);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
