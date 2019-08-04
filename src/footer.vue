<template>
    <div class="footer" :style="footerStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        footerHeight:{
            type: String
        }
    },
    computed: {
        footerStyle() {
            return {height: this.footerHeight+'px'}
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


