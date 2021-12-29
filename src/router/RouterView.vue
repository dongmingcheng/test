
<!-- 实现routerView -->
<template>
    <component :is="comp"></component>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { useRouter } from './grouter';

// 获取路由实例
const router = useRouter()

const comp = computed( () => {
    const route = router.routes.find(route => route.path === router.current.value)
    return route ? route.component : null
})

</script>