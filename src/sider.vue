<template>
    <transition name="fade">
        <div class="sider" v-if="show">
            <slot></slot>
            <button @click="hide">隐藏</button>
        </div>
    </transition> 
</template>
<script>
export default {
    name: 'sider-ui',
    data() {
        return {
            show: true
        } 
    },
    methods:{
        hide() {
            this.show = false;
        }
    }  
}
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  margin-left: -200px;
}

</style>


