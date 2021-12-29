<template>
    <div @click="add">
        {{count}} -- {{double}}
    </div>

    <div @click="asyncAdd">
        异步累加
    </div>

</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
// import { useStore } from '../utils/gvuex';

const store = useStore()
const count = computed(()=> store.state.count)
const add = () => store.commit('add')
const double = computed(() => store.getters.double)
// 异步累加，写在action中，需要用dispatch获取
const asyncAdd = () => store.dispatch('asyncAdd')
</script>