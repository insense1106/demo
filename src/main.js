import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import meta from "vue-meta";
import metaInfo from "./metaInfo";
import toast from "./components/common/toast/index";
import fastClick from "fastclick";
import Vuelazyload from "vue-lazyload";
//vue.use(Vuelazyload); // Uncaught ReferenceError: vue is not defined 使用懒加载报错!
Vue.use(meta, metaInfo);
Vue.use(toast);
fastClick.attach(document.body); // 降低 点击事件的延迟， 减少300ms
Vue.config.productionTip = false; // 取消生产环境的提醒
Vue.prototype.$bus = new Vue(); // 创建事件总线
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
