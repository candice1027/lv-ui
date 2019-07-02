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
        }
    },
    computed: {
        colClass() {
            let {span,offset} = this
            return [
                `col-${span}`,
                offset&&`offset-${offset}`
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
}

</style>


