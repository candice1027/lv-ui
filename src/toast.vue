<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'toast'
    
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,.5);
$toast-color: #fff;
.toast {
    height: $toast-height;
    font-size: $font-size;
    line-height: 1.8;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    color: $toast-color;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    padding: 0 16px;
}

</style>


