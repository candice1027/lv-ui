<template>
    <button @click="showLoading" class="g-button" :class="{'icon-right': iconLocate == 'right' }">
        <g-icon v-if="loading" class="icon icon-loading" iconName="loading"></g-icon>
        <g-icon v-if="icon && !loading" class="icon" :iconName="icon"></g-icon>
        <div class="icon-text">
            <slot></slot>
        </div>   
    </button>
</template>
<script>
import gIcon from './icon.vue'
export default {
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        icon: {},
        'iconLocate': {
            type: String,
            default: 'left',
            validator(value) {
                return !(value == 'left' && value == 'right')
                console.log(value)
            }
        }
    },
    components:{
        gIcon
    },
    methods:{
        showLoading() {
            this.$emit('click')
        }
    },
}
</script>
<style lang="scss" scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    } 
}
.icon-loading {
    animation: spin .5s infinite linear;
}
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
