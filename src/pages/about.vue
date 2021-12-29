<template>
    <h1>这是关于页面</h1>
    <RateVue v-model="score">
        <img src="/favicon.ico" alt="" width="14" />
    </RateVue>
    {{score}}
    <!-- <RateVue :value="4" theme="red" ></RateVue>
    <RateVue :value="3" theme="green"></RateVue> -->

    <Heading :level="3">h函数</Heading>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import RateVue from '../components/Rate.vue';

import Heading from '../components/Heading.jsx'

const update = num => score.value = num

const score = ref(3)
</script>