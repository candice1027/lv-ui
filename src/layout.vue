<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted() {
        this.$children.forEach(vm => {
            if (vm.$options.name === 'sider-ui') {
                this.layoutClass.hasSider = true;
                console.log('sider-ui')
            }
        })
        console.log(this.$children)
    }
    
}
</script>
<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider {
        flex-direction: row;
    }
}


</style>


