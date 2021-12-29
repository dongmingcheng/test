import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router from './router/index'

// 引入vuex
import store from './store/index';

// 引入element3
import Element3 from 'element3'

// 全局使用element3样式
import 'element3/lib/theme-chalk/index.css'


createApp(App)
    .use(router) 
    .use(store) 
    .use(Element3)  
    .mount('#app')
