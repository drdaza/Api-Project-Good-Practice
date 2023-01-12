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
    return (FavoriteStore.getCharacterbyId(props.character.id)) ? 'active': 'inactive';
    }
  }
);
const typeIfisPokemonCharacter = computed(()=>{
    if(props.character.type == undefined){
        return;
    }
    return props.character.type;
})


</script>
<template>
    <div :class="['card-base',typeIfisPokemonCharacter]">
        <img :src="character.image" alt="">
        <h1>{{character.name}}</h1>
        <div class="buttons-space">
            <Button
                :title="'Favorites'"
                :type-btn="'action'"
                :state-of="stateOfButton"
                @click="emitFvorite"
            ></Button>
            <button>details</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/scss/main' as *;
    img{
      width: 60%;
      height: 60%;
    }
    .card-base{
        @include FlexDisplay(column, center, center, 100%, 100%);
    }
    .normal {
    background-color: #8D6E63;
    }

    .fighting {
        background-color: #e40000;
    }

    .flying {
        background-color: #3498DB;
    }

    .poison {
        background-color: #EC407A;
    }

    .ground {
        background-color: #FF5722;
    }

    .rock {
        background-color: #FF8A65;
    }

    .bug {
        background-color: #ffeb39;
    }

    .ghost {
        background-color: #6A1B9A;
    }

    .steel {
        background-color: #0000;
    }

    .fire {
        background-color: #F39C12;
    }

    .water {
        background-color: #0D47A1;
    }

    .grass {
        background-color: #2E7D32 ;
    }

    .electric {
        background-color: #f1c40fe8;
    }

    .psychic {
        background-color: #E91E63;
    }

    .ice {
        background-color: #26A69A;
    }

    .dragon {
        background-color: #CE93D8;
    }

    .dark {
        background-color: #880E4F;
    }

    .fairy {
        background-color: #FF66CC;
    }

    .shadow {
        background-color: #6A1B9A;
    }
</style>