<template>
    <button class="g-button" :class="{'icon-right': iconLocate == 'right' }">
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="icon-text">
            <slot></slot>
        </div>
        
    </button>
</template>
<script>
export default {
    props:['icon','icon-locate'],   
}
</script>
<style lang="scss" scoped>
.g-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
        border-color: var(--border-color-hover)
    }
    &:active {
        background-color: var(--button-active-bg);
    }
    &:focus {
        outline: none;
    }
    .icon {
        order: 1;
        margin-right: .3em;
    }
    .icon-text {
        order: 2;
    }
}
.icon-right {
    .icon-text {
        order: 1;
    }
    .icon {
        order: 2;
        margin-left: .3em;
        margin-right: 0;
    }
}

</style>
