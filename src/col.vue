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
        // gutter: {
        //     type: [Number,String]
        // },
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
        narrow: {
            type: Object,
            validator
        },
        pc: {
            type: Object,
            validator
        },
        wide: {
            type: Object,
            validator
        },
    },
    computed: {
        colClass() {
            let {span,offset,phone,ipad,narrow,pc,wide} = this;
            console.log(narrow)
            return [
                `col-${span}`,
                offset&&`offset-${offset}`,
                ...(phone ? [`col-phone-${phone.span}`] : []),
                ...(ipad ? [`col-ipad-${ipad.span}`] : []),
                ...(narrow ? [`col-narrow-pc-${narrow.span}`]: []),
                ...(pc ? [`col-pc-${pc.span}`] : []),
                ...(wide ? [`col-wide-pc-${wide.span}`] : []),
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
    @media (min-width: 577px) {
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
    @media (min-width: 769px) {
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
    @media (min-width: 993px) {
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


