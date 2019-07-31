<template>
    <div class="col" 
    :class="colClass"
    :style="colStyle"
    >
        <slot></slot>
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
    methods: {
        createClasses(obj,str='') {
            if (!obj) {return []}
            let array = [];
            if (obj.span) {
                array.push(`col-${str}${obj.span}`)
            }
            if (obj.offset) {
                array.push(`offset-${str}${obj.offset}`)
            }
            return array;
        }
    },
    computed: {
        colClass() {
            let {span,offset,phone,ipad,narrow,pc,wide} = this;
            console.log(narrow)
            let createClasses = this.createClasses;
            return [
                ...createClasses({span,offset}),
                ...createClasses(ipad,'ipad-'),
                ...createClasses(narrow,'narrow-'),
                ...createClasses(pc,'pc-'),
                ...createClasses(wide,'wide-')
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
           gutter: 0 
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
        $class-prefix: col-narrow-;
        $offset-prefix: offset-narrow-;
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
        $class-prefix: col-wide-;
        $offset-prefix: offset-wide-;
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


