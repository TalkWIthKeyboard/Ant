import Vue from 'vue'
import App from './App.vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
// 使用 carbon 主题
import 'muse-ui/dist/theme-carbon.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'
import router from './routers'
import api from './config/api'


//开启debug模式
Vue.config.debug = true;
// 加载网络库
Vue.use(VueResource);
// 加载组件库
Vue.use(MuseUI);
Vue.use(MintUI);
// 加载api文件为全局
Vue.prototype.$api = api;

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
}).$mount(App);
