// vue3通过Proxy实现响应式， proxy可以对一个对象进行监听，而不是针对某个具体的属性，而且，Proxy可以监听属性删除
import { reactive, computed, watchEffect } from "vue"

const vueProxyTest = () => {
    const getDouble = n => n*2
    let obj = {}
    let count = 1
    let double = getDouble(count)

    let proxy = new Proxy(obj, {
        get: (target, prop) => target[prop],
        set: (target, prop, value) => {
            target[prop] = value
            if(prop === 'count'){
                double = getDouble(value) 
            }
            return true
        },
        deleteProperty(target, prop){
            delete target[prop]
            if(prop === 'count') double = NaN
            return true
        }
    })
    proxy.count = 1
    console.log(obj.count, double)
    proxy.count = 2
    console.log(obj.count, double)
    delete proxy.count
    console.log(obj.count, double)
}

const reactiveTest = () => {
    const obj = reactive({
        count: 1
    })
    const double = computed( () => obj.count*2)
    obj.count = 2

    watchEffect( () => {
        console.log('数据被修改了', obj.count, double.value)
    })
}

export { vueProxyTest, reactiveTest }