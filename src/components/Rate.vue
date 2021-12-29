<template>
    <div :style="fontstyle">
        <slot></slot>
        <div class="rate" @mouseout="mouseOut">
            <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span @mouseover="mouseOver(num)" @click="onRate(num)" v-for="num in 5" :key="num">★</span>
            </span>
        </div>
        <!-- {{rate}} -->
    </div>

</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    modelValue:Number,
    theme:{
        type:String,
        default:'orange'
    }
})

const emits = defineEmits(['update:modelValue'])
const onRate = num => emits('update:modelValue', num)

// const rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))

const themeObj = {
    'balck': '#000',
    'white': '#fff',
    'red': '#f5222d',
    'orange': '#fa541c',
    'yellow': '#fadb14',
    'green': '#73d13d',
    'blue': '#40a9ff'
}

const fontstyle = computed(() => `color:${themeObj[props.theme]}`)

const width = ref(props.modelValue)
const mouseOut = () => width.value = props.modelValue
const mouseOver = i => width.value = i
const fontwidth = computed(() => `width:${width.value}em`)

</script>

<style scoped>
.rate{
    position: relative;
    display: inline-block;
}
.rate > span.hollow{
    position: absolute;
    display: inline-block;
    top:0;
    left: 0;
    width: 0;
    overflow: hidden;
}


</style>