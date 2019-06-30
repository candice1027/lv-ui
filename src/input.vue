<template>
 <div class="wrapper" :class="{'error': error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
        <Icon iconName="info" class="error-icon"></Icon>
        <span class="error-message">{{error}}</span>
    </template>
    
 </div>
   
</template>
<script>
import Icon from './icon';
export default {
    props: {
        value: {
            type:String, 
        }, 
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    },
    components: {
        Icon
    }

    // props: ['value']
    
}
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-hover-color: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0,0,0,.5);
$errorColor: #F1453D;
.wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > :not(last-child){margin-right: .5em;}
    > input {
        font-size: inherit;
        height: $height;
        border: 1px solid $border-color;
        padding: 0 8px;
        border-radius: $border-radius;
        &:hover {
            border-color: $border-hover-color
        }
        &:focus {
            outline: none;
            box-shadow: inset 0 1px 3px $box-shadow-color;
        }
        &[disabled],&[readonly] {
            color: #ccc;
            border-color: #ccc;
            cursor: not-allowed;
        }

    }
    &.error {
        > input {
            border-color: $errorColor;
        }
    }
    .error-icon {
        fill: $errorColor;
    }
    .error-message {
        color: $errorColor;
    }
}

</style>


