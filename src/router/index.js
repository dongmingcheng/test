/**
 * createRouter新建路由实例
 * createWebHashHistory配置我们内部使用hash模式的路由,也就是url上会通过#来区分
 */

import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'

// import { createRouter, createWebHashHistory } from './grouter'

import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Test from '../pages/test.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    }

]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router