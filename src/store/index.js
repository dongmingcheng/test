import { createStore } from "vuex";
// import { createStore } from "../utils/gvuex";

const store = createStore({
    state () {
        return {
            count: 60
        }
    },

    getters: {
        double(state) {
            return state.count * 2
        }
    },
    mutations: {
        add(state){
            state.count++
        }
    },
    // 异步修改数据,在异步接口中，通过commit修改
    actions: {
        asyncAdd({commit}){
            setTimeout( () => {
                commit('add')
            },2000)
        }
    }
})

export default store