<template>
    <div class="header" :style="headerStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        headerHeight:{
            type: String
        }
    },
    computed: {
        headerStyle() {
            return {height: this.headerHeight+'px'}
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


