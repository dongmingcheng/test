/**
 * 实现简易的vuex原理
 */

import { inject, reactive } from 'vue'

const STORE_KEY = '__store__'

// 获取store实例的方法
const useStore = () => inject(STORE_KEY)

// 创建store实例
const createStore = options => new Store(options)

// store类

class Store {
    constructor(options) {
        this.$options = options
        // 创建双向绑定的数据
        this._state = reactive({
            data: options.state()
        })

        this._mutations = options.mutations

        this._actions = options.actions
    } 

    get state(){
        return this._state.data
    }

    commit = (type, payload) => {
        const entry = this._mutations[type]
        entry && entry(this.state, payload)
    }

    // 实现action
    dispatch = (type, payload) => {
        const entry = this._actions[type]
        entry && entry({commit:this.commit})
    }

    // 全局注册
    install(app) {
        app.provide(STORE_KEY, this)
    }
}

export { createStore, useStore }