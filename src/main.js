import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入v-dialogDrag自定义指令
import './pages/IShare/directives/dialogDrag'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// set ElementUI lang to EN
// Vue.use(ElementUI, { locale });
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App) // render 回调APP放到div里边
}).$mount('#app')
