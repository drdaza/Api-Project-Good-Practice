<script setup>
import ApiPlayLoad from '../../ApiRepositories/PlayLoads/ApiPlayLoad';
import Button from '../SharedComponents/Button.vue';
const props = defineProps({
    character:{
        type: ApiPlayLoad,
        requied: true
    }
});
const emits = defineEmits(['favhero']);

const emitFvorite = ()=>{
    emits('favhero',  props.character.id)
}

</script>
<template>
    <img :src="character.image" alt="">
    <h1>{{character.name}}</h1>
    <div class="buttons-space">
        <Button
            :title="'Favorites'"
            :type-btn="'action'"
            @click="emitFvorite"
        ></Button>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/main' as *;
    img{
      width: 80%;
      height: 70%;
    }
</style>