<template>
    <div class="col" 
    :class="colClass"
    :style="colStyle"
    >
        <!-- <div style="border: 1px solid green;"> -->
            <slot></slot>
        <!-- </div> -->
    </div>
</template>
<script>
let validator = (value) =>{
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach((key) =>{
        if (!['span','offset'].includes(key)) {
            valid = false
        }
    })
    return valid;
}
export default {
    props: {
        span: {
            type: [Number, String]
        },
        offset:{
            type: [Number,String]
        },
        gutter: {
            type: [Number,String]
        },
        phone: {
            type: Object,
            validator
            // validator(value) {
            //     let keys = Object.keys(value);
            //     let valid = true;
            //     keys.forEach((key) =>{
            //         if (!['span','offset'].includes(key)) {
            //             valid = false
            //         }
            //     })
            //     return valid;
            // }
        },
        ipad: {
            type: Object,
            validator
        },
        narrowPc: {
            type: Object,
            validator
        },
        pc: {
            type: Object,
            validator
        },
        widePc: {
            type: Object,
            validator
        },
    },
    computed: {
        colClass() {
            let {span,offset,phone,ipad,narrowpc,pc,widepc} = this;
            return [
                `col-${span}`,
                offset&&`offset-${offset}`,
                ...(phone ? [`col-phone-${phone.span}`] : []),
                ...(ipad ? [`col-phone-${ipad.span}`] : []),
                ...(narrowpc ? [`col-phone-${narrowpc.span}`]: []),
                ...(pc ? [`col-phone-${pc.span}`] : []),
                ...(widepc ? [`col-phone-${widepc.span}`] : []),
            ]
        },
        colStyle(){
            return {
                paddingLeft: this.gutter/2+'px',
                paddingRight: this.gutter/2+'px'
            }
        }

    },
    data() {
        return {
           //gutter: 0 
        }
    }
    
}
</script>
<style lang="scss" scoped>
.col {
    // width: 50%;
    height: 50px;
    $class-prefix: col-;
    $offset-prefix: offset-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n / 24) * 100%
        }
         &.#{$offset-prefix}#{$n} {
            margin-left: ($n / 24) * 100%
        }
    }
    @media (max-width: 576px) {
        $class-prefix: col-phone-;
        $offset-prefix: offset-phone-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%
            }
            &.#{$offset-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
    }
    @media (min-width: 576px) and (max-width:768px) {
        $class-prefix: col-ipad-;
        $offset-prefix: offset-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%
            }
            &.#{$offset-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
    }
    @media (min-width: 769px) and (max-width:992px) {
        $class-prefix: col-narrow-pc-;
        $offset-prefix: offset-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%
            }
            &.#{$offset-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
    }
    @media (min-width: 993px) and (max-width:1200px) {
        $class-prefix: col-pc-;
        $offset-prefix: offset-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%
            }
            &.#{$offset-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
    }
    @media (min-width: 1201px) {
        $class-prefix: col-wide-pc-;
        $offset-prefix: offset-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%
            }
            &.#{$offset-prefix}#{$n} {
                margin-left: ($n / 24) * 100%
            }
        }
    }
}


</style>


