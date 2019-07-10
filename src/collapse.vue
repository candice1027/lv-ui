<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'collapse',
    props: {
        single: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Array
        }
    },
    data(){
        return {
            eventBus: new Vue(),
            selectedArray:[]
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
        
    },
    mounted(){
        if (this.selected) {
            this.eventBus && this.eventBus.$emit('update:selected',this.selected)
        } 
        this.eventBus && this.eventBus.$on('update:addSelected',(vm) => {
            this.selectedArray.push(vm)
            this.$emit('update:selected', this.selectedArray)
        })
        this.eventBus && this.eventBus.$on('update:removeSelected',(vm) => {
            let index = this.selectedArray.indexOf(vm)
                this.selectedArray.splice(index,1)
            this.$emit('update:selected', this.selectedArray)
        })
        this.$children.forEach(vm =>{
            vm.single = this.single
        })
    }
}
</script>
<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.collapse {
    border: 1px solid $border-color;
    border-radius: $border-radius;
    // border-bottom: none;
}

</style>


