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
                isActive: this.active,
                Disabled: this.disabled
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
            if (!this.disabled) {
                console.log('触发name的改变',this.name)
                this.eventBus.$emit('update:selected',this.name,this)
            }  
        }
    }
    
}
</script>
<style lang="scss" scoped> 
$blue: #409eff;
$disabled-text-color: grey;
.tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &.isActive {
        color: $blue;
        font-weight: bold;
    }
    &.Disabled {
        color: $disabled-text-color;
    }
}
</style>


