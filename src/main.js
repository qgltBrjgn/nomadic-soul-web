import Vue from 'vue'
import App from './App.vue'
import Api from './assets/js/api.js';
import Util from './assets/js/util.js';
import Resource from 'vue-resource';
import router from './router';
Vue.use(Resource);
Vue.config.productionTip = false;
// 请求API
Vue.prototype._API = Api;
Vue.http.options.root = '/ns';
// 系统功能
Vue.use(Util);
new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
