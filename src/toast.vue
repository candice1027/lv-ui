<template>
    <div class="toast" ref="wrapper" :class="postionClass">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span ref="close" class="close" v-if="!autoClose" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>
<script>
export default {
    name:'toast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseTime: {
            type: Number,
            default: 1
        },
        closeButton: {
            type: Object,
            default:() => {
                return {
                    text: '关闭',
                    callBack: null
                }
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        },
        toastPosition:{
            type: String,
            default: 'top',
            validator(value) {
                return ['top','bottom','middle'].indexOf(value) >= 0
            }
        }
    },
    computed:{
        postionClass(){
            return {
                [`toast-position-${this.toastPosition}`]:true
            }  
        }
    },
    mounted() {
        this.updateStyle() 
        this.execAutoClose()   
    },
    methods: {
        updateStyle() {
            this.$nextTick(()=>{
                this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height+'px';
            })
        },
        execAutoClose() {
            if (this.autoClose) {
                setTimeout(() =>{
                    this.closeToast();
                },this.autoCloseTime*1000)
            }
        },
        closeToast() {
            this.$el.remove();
            this.$emit('close')
            this.$destroy();
        },
        onClickClose() {
            this.closeToast();
            if (this.closeButton && typeof this.closeButton.callBack === 'function') {
                this.closeButton.callBack(this);
            }  
        },
        toast() {
            console.log('获取了这个toast')
        }
    }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0,0,0,.5);
$toast-color: #fff;
@keyframes fade-in {
    0%{opacity: 0;}
    100% {opacity: 1;}
}
@keyframes fade-bottom {
    0%{ transform: translate(-50%,100%)}
    100% {transform: translate(-50%,0)}
}
.toast {
    animation: fade-in 1s;
    min-height: $toast-min-height;
    font-size: $font-size;
    line-height: 1.8;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    color: $toast-color;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
    padding: 0 16px;
    .message {
        padding: 8px 0;
    }
}
.toast-position {
    &-bottom {
        bottom: 0;
        animation: fade-bottom 1s;
    }
    &-top {
        top: 0;
    }
    &-middle {
        top: 50%;
        transform: translateY(-50%)
    }
}
.close {
    padding-left: 16px;
    flex-shrink: 0;
}
.line {
    height: 100%;
    border-left: 1px solid #ccc;
    margin-left: 16px;
}

</style>


