<template>
    <div class="tabs-item" @click="changeTab" :class="classes">
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
    computed: {
        classes() {
            return {
                isActive: this.active
            }
        }
    },
    created() {
        this.eventBus.$on('update:selected',(name) =>{
            this.active = name === this.name
        })
    },
    methods: {
        changeTab() {
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
    &.isActive {
        background-color: red;
    }
}
</style>


