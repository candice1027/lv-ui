<template>
    <div class="tabs-item" @click="xxx">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tabsItem',
    data(){
        return {
            active: false
        }
    },
    inject: ['eventBus'],
    created() {
        this.eventBus.$on('update:selected',(name) =>{
            console.log('监听Name的改变',name)
        })
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: [String,Number],
            required: true
        }
    },
    methods: {
        xxx() {
            console.log('触发name的改变',this.name)
            this.eventBus.$emit('update:selected',this.name)
        }
    }
    
}
</script>
<style lang="scss" scoped> 
.tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
}
</style>


