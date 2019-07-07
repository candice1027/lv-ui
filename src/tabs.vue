<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name:'tabs',
    props:{
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['horizontal','vertical'].indexOf(value) >= 0
            }
        }
    },
    data() {
        return {
            eventBus: new Vue()  
        }
    },
    provide(){
        return {
            eventBus: this.eventBus,
        }
    },
    created() {
        // this.$emit('update:selected','xxx')
    },
    mounted() {
        if (this.$children.length === 0) {
           console && console.warn && console.warn('tabs的子组件应该是tabs-head 和 tabs-body,但是您没有传入子组件')
        }
        this.$children.forEach((vm) => {
            if (vm.$options.name == 'tabsHead') {
                vm.$children.forEach(childVm => {
                    if (childVm.$options.name === 'tabsItem'
                        && childVm.name === this.selected
                    ) {
                     this.eventBus.$emit('update:selected',this.selected,childVm)
                    }
                })
            }
        })
        
    }
}
</script>
<style>
.tabs {

}
</style>


