
<template>
<div class="collapse-item">
    <div class="title" @click="toggle" >{{title}}</div>
    <div class="content" v-show="isOpen">
        <slot></slot>
    </div> 
</div>
 
</template>
<script>
export default {
    name: 'collapse',
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String
        }
    },
    data() {
        return {
            isOpen: false
        }
    },
    inject:['eventBus'],
    mounted(){
        this.eventBus && this.eventBus.$on('update:selected',(vm)=> {
            if (vm.indexOf(this.name) == -1) {
                this.isOpen = false;  
            } else {
                this.isOpen = true;
            }
        })
    },
    methods:{
        toggle() {
            if (this.isOpen) {
               this.isOpen = false; 
               this.eventBus && this.eventBus.$emit('update:removeSelected',this.name) 
            } else {
               this.isOpen = true;
              this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
            }
        },
    }    
}
</script>
<style lang="scss" scoped>
$border-color: #ddd;
$border-radius: 4px;
.collapse-item {
    > .title {
        border: 1px solid $border-color;
        margin-top: -1px;
        margin-left: -1px;
        margin-right: -1px;
        min-height: 32px;
        display: flex;
        align-items: center;
        padding: 0 8px;
    }
    &:first-child{
        > .title {
            border-top-left-radius: $border-radius;
           border-top-right-radius: $border-radius;
        }
    }
    &:last-child{
        > .title:last-child {
           border-bottom-left-radius: $border-radius;
           border-bottom-right-radius: $border-radius;
        }
    }
    > .content {
        padding: 8px;
    }
   
}

</style>


