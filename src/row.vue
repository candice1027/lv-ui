<template>
    <div class="row" :class="rowClass"
    :style="rowStyle"
    >
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        gutter: {
            type: [Number,String]
        },
        align: {
            type: String,
            validator(value) {
                return ['left','right','center'].includes(value)
            }
        }
    },
    computed: {
        rowClass() {
            let { align } = this;
            return [align && `align-${this.align}`]
        },
        rowStyle() {
            return {
                marginLeft: -this.gutter/2+'px',
                marginRight:-this.gutter/2+'px'
            }
        }
    },
    mounted(){
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter;
        })
    }  
}
</script>
<style lang="scss" scoped>
.row {
    display: flex;
    // margin: 0 -10px;
    // border: 1px solid blue;
}
.align-left {
    justify-content: flex-start;
}
.align-right {
    justify-content: flex-end;
}
.align-center {
    justify-content: center;
}

</style>


