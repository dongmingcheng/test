<template>
    <input type="text" v-model="title" @keydown.enter="addTodo"/>
    <button v-if="active !== 0" @click="clear">清理</button>
    <ul v-if="todos.length">
        <transition-group name="flip-list" tag="ul">
            <li v-for="(todo, i) in todos" :key="todo.title">
                <input type="checkbox" v-model="todo.done" />
                <span>{{todo.title}}</span>
                <span class="remove-btn" @click="removeTodo($event, i)"> ❌ </span>
            </li>
        </transition-group>
        
    </ul>
    <div v-else>暂无数据</div>
    <div>
        全选<input type="checkbox" v-model="allDone">
        <span>{{ active }} / {{ all }}</span>
    </div>
    <div>
        {{ x }} / {{ y }}
    </div>

    <transition name="modal">
        <div class="info-wrapper" v-if="showModal" >
            <div class="info">
            你什么都没有输入！
            </div>
        </div>
    </transition>

    <span class="dustbin">
        🗑️
    </span>
    <div class="animate-wrap">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="animate" v-show="animate.show">
                📃
            </div>
        </transition>
         
    </div>
    
</template>

<script setup>
import { ref, computed, reactive } from '@vue/reactivity';
import { useMouse } from '../utils/mouse';
// import { Double } from '../utils/vueDefineProperty'     //vue2简易双向绑定实现
import { vueProxyTest, reactiveTest } from '../utils/vueProxy'  //vue3简易双向绑定实现

let { x, y } = useMouse()
// Double()
// vueProxyTest()
reactiveTest()
const useTodo = () => {
    const title = ref("")
    const todos = ref([]) 
    const showModal = ref(false)
    const addTodo = () => {
        if(!title.value) {
            showModal.value = true
            setTimeout(() => {
                showModal.value = false
            },1500)
            return 
        }
        title.value && todos.value.push({ title:title.value, done:false})
        title.value = ''
    }
    const clear = () => todos.value = todos.value.filter(x => !x.done)

    const all = computed( () => todos.value.length )
    const active = computed( () => todos.value.filter(x => x.done).length )
    const allDone = computed({
        get: () => active.value === todos.value.length && active.value !== 0,
        set: (value) => todos.value.forEach( x => x.done = value)
    })

    return {title, todos, addTodo, clear, all, active, allDone, showModal}
}
const {title, todos, addTodo, clear, all, active, allDone, showModal} = useTodo()

const animate = reactive({
    show:false,
    el:null
})

const beforeEnter = el => {
    const dom = animate.el
    const rect = dom.getBoundingClientRect()
    const x = window.innerWidth - rect.left - 60
    const y = rect.top - 10
    el.style.transform = `translate(-${x}px, ${y}px)`
}

const enter = (el, done) => {
    document.body.offsetHeight
    el.style.transform = `translate(0,0)`
    el.addEventListener(`transitionend`, done)
}

const afterEnter = el => {
    animate.show = false
    el.style.display = 'none'
}
const removeTodo = (e, i) => {
    animate.el = e.target
    animate.show = true
    todos.value.splice(i, 1)
}


</script>

<style scoped>
h1 {
    color: green;
}
.info-wrapper {
    position: fixed;
    top: 20px;
    width: 200px;
    margin-left: 50%;
    transform: translateX(-50%);
}
.info {
    padding: 20px;
    color: white;
    background: #d88986;
}
.modal-enter-from {
    opacity: 0;
    transform: translateY(-60px);
}

.modal-enter-active {
    transition: all .3s ease;
}

.modal-leave-to {
    opacity: 0;
    transform: translateY(-60px);
}

.modal-leave-active {
    transition: all .3s ease;
}

li{
    transform: translateX(-30px);
    list-style: none;
}

.flip-list-move {
    transition: transform .8s ease;
}

.flip-list-enter-active,
.flip-list-leave-active {
    transition: all 1s ease;
}

.flip-list-enter-from,
.flip-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.animate-wrap .animate {
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 100;
    transition: all .5s linear;
}
.dustbin{
    position: fixed;
    right: 10px;
    top: 10px;
    z-index: 100;
}
</style>