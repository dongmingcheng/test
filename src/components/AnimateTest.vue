<!-- 过度动画练习 -->
<template>
    <div class="box" :style="{width:width+'px'}"></div>
    <button @click="change">click</button>
    <div class="box1"></div>

    <button @click="toggle">切换显隐</button>
    <transition name="fade">
        <h1 v-if="showTitle">你好</h1>
    </transition>
    
</template>

<script setup>
import { ref } from 'vue'
const width = ref(100)
const change = () => width.value += 100


// vue3过渡动画切换显隐
const showTitle = ref(true)
const toggle = () => showTitle.value = !showTitle.value


</script>

<style scoped>
.box{
    background: red;
    height: 100px;
    transition: width 1s linear;
}
.box1{
    width: 30px;
    height: 30px;
    position: relative;
    background: indianred;
    animation: move 2s linear infinite;
}
@keyframes move {
    0% {left:0px}
    50% {left: 200px;}
    100% {left: 0px}
}
.fade-enter-active,
.fade-leave-active{
    transition: opacity 0.5s linear;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>