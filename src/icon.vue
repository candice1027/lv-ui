<template>
    <svg class="g-icon" aria-hidden="true">
        <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
</template>
<script>
import './svg.js'
export default {
    props: ['iconName']   
}
</script>
<style>
.g-icon {
    width: 1em;
    height: 1em;
}

</style>


