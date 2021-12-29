// 简单的vue路由实现
import { ref, inject } from 'vue'
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

const ROUTER_KEY = '__router__'

// 创建路由
const createRouter = options => new Router(options)

// 返回路由实例
const useRouter = () => inject(ROUTER_KEY)

// hash模式

const createWebHashHistory = () => {
    // 监听hashchange,并执行函数fn
    const bindEvents = fn => window.addEventListener('hashchange', fn)

    return {
        bindEvents,
        url: window.location.hash.slice(1) || '/'
    }
}

class Router{
    constructor(options){
        this.history = options.history
        this.routes = options.routes
        this.current = ref(this.history.url)   //当前路由

        this.history.bindEvents( () => this.current.value = window.location.hash.slice(1) )
    }
    // 全局注册
    install(app){
        app.provide(ROUTER_KEY, this)
        app.component('router-link', RouterLink)
        app.component('router-view', RouterView)
    }

}

export { createRouter, createWebHashHistory, useRouter }