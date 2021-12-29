import { defineComponent, h } from "vue";

const element = defineComponent({
    props: {
        level: {
            type:Number,
            required: true
        }
    },
    // // h函数
    // setup(props, {slots}){
    //     return () => h(
    //         'h' + props.level,
    //         {},
    //         slots.default()
    //     )
    // }

    // jsx
    setup(props, {slots}){
        const tag = 'h' + props.level
        return () => <tag>{slots.default()}</tag>
    }
})

export default element