<template>
    <h1>这是测试练习页面</h1>
    <!-- 动画 -->
    <h3>动画</h3>
    <AnimateTest></AnimateTest>

    <!-- vuex实现简单累加器 -->
    <CountVue></CountVue>

    <!-- jsx -->
    <TodoJsx></TodoJsx>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import AnimateTest from '../components/AnimateTest.vue'
import CountVue from '../components/Count.vue';

import TodoJsx from '../components/Todo.jsx'
</script>