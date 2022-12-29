<script setup>
import  { charactesStore } from '../stores/PrincipalStore'
import { onBeforeMount } from 'vue';
import CardCharacter from '../components/CardComponent/CardCharacter.vue';
import {FavCharacterStore} from '../stores/FavoriteStores';

const principalStore = charactesStore();
const FavoriteStore = FavCharacterStore();

onBeforeMount(()=>{
  principalStore.AsignCharacters();
}
  
)
const AddFavorite = (productId)=>{
  const TemporalCharacter = principalStore.getChracterbyId(productId) 
  FavoriteStore.AddCharacterToFavorites(TemporalCharacter);
}
</script>

<template>
  <main>
    <div class="card-space" v-for="item of principalStore.Characters">
      <CardCharacter
        :character="item"
        @favhero="AddFavorite(item.id)"
      />
    </div>
  </main>
</template>
<style lang="scss" scoped>
@use '../assets/scss/main' as *;

main{
  @include FlexDisplay(row, space-evenly, center, 100%, auto);
  flex-wrap: wrap;
  .card-space{
    @include FlexDisplay(column, center, center, 23%, 60vh);
    margin-top: 2%;
    border: $terthiary-color 2px solid;
    
  }
}
</style>