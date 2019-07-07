<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'tabsPane',
    props: {
        name: {
            type: [String,Number],
            required: true
        }
    },
    data() {
        return {
            active: false
        }
    },
    inject: ['eventBus'],
     created() {
        this.eventBus.$on('update:selected',(name) =>{
            this.active = name === this.name
        })
    },
    computed: {
        classes(){
            return {
                isActive: this.active
            }  
        }
    },
    mounted() {

    } 
}
</script>
<style lang="scss" scoped>
.tabs-pane {
    &.isActive {
        // background-color: red;
    }

}
</style>


