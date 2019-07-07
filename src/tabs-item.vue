<template>
    <div class="tabs-item" @click="changeTab" :class="classes" :data-name="name">
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
        if (this.eventBus) {
            this.eventBus.$on('update:selected',(name) =>{
                this.active = name === this.name
            })
        } 
    },
    methods: {
        changeTab() {
            if (!this.disabled) {
                // console.log('触发name的改变',this.name)
                this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
                this.$emit('click',this)
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
        cursor: not-allowed;
    }
}
</style>


