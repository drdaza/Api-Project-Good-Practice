<script setup>
import ApiPlayLoad from '../../ApiRepositories/PlayLoads/ApiPlayLoad';
import Button from '../SharedComponents/Button.vue';
import { computed, ref } from 'vue';
import { FavCharacterStore } from '../../stores/FavoriteStores';
const FavoriteStore = FavCharacterStore();

const props = defineProps({
    character:{
        type: ApiPlayLoad,
        requied: true
    }
});
const emits = defineEmits(['favhero']);

const emitFvorite = ()=>{
    emits('favhero',  props.character.id);
    
}
const stateOfButton = computed(()=>{
    if(FavoriteStore.FavCharacters.length>0){
    return (FavoriteStore.getCharacterbyId(props.character.id)) ? 'active': 'inactive';}});


</script>
<template>
    <img :src="character.image" alt="">
    <h1>{{character.name}}</h1>
    <div class="buttons-space">
        <Button
            :title="'Favorites'"
            :type-btn="'action'"
            :state-of="stateOfButton"
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