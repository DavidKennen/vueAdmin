import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Blob from './vendor/Blob'
import Export2Excel from './vendor/Export2Excel.js'
import "./components/index"
import echarts from 'echarts';

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')