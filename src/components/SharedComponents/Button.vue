<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
    title:{
        type: String,
        default: 'button'
    },
    typeBtn:{
        type: String,
        default: 'action'
    },
    stateOf:{
        type: String,
        
    }
});
</script>
<template>
    <button :class="['btn',props.stateOf]">{{ props.title }}</button>
</template>
<style lang="scss" scoped>
.btn {
    width: 10vw;
    height: 5vh;
    border-radius: 50px;
    font-size: 100%;

    
}
.inactive {
        background-color: lightblue;
    }
.active{
        background-color: red;
    }
</style>