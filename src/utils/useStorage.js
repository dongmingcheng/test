import { ref, watchEffect } from "vue";
// 响应式存储
const useStorage = (name, value=[]) => {
    let data = ref(JSON.parse(localStorage.getItem(name) || value))
    watchEffect( () => localStorage.setItem(name, JSON.stringify(data.value)) )
    return data
}

export {useStorage}