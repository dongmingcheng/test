<template>
    <a :href="'#' + props.to">
        <slot></slot>
    </a>
</template>

<script setup>

const props = defineProps({
    to:{
        type:String,
        require: true
    }
})
</script>