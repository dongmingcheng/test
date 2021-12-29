// 简易的响应式原理

const Double = () => {
    const getDouble = n => n*2
    let obj = {}
    let count = 1
    let double = getDouble(count)

    Object.defineProperty(obj, 'count', {
        get: () => count,
        set: val => {
            count = val
            double = getDouble(val)
        },
        configurable: true  //当且仅当为true事，该属性的描述符才能被修改，才能被删除，默认是false
    })
    console.log(double)  //打印2
    obj.count = 2
    console.log(double)  //打印4

    //但是defineProperty有一些缺陷，它不会监听删除属性
    delete obj.count
    console.log(double)  //打印4
}

export { Double }