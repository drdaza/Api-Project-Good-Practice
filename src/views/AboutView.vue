<script setup>
import CardCharacter from '../components/CardComponent/CardCharacter.vue';
import { FavCharacterStore } from '../stores/FavoriteStores';
const FavoriteStore = FavCharacterStore();
const DeleteFavorite = (productId)=>{
  const TemporalCharacter = FavoriteStore.getCharacterbyId(productId);
  FavoriteStore.AddCharacterToFavorites(TemporalCharacter);
}


</script>
<template>
  <div class="about" >
    <div class="card-space" v-for="item of FavoriteStore.FavCharacters">
    <CardCharacter
      :character="item"
      @favhero="DeleteFavorite(item.id)"
    />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main' as *;

.about{
  @include FlexDisplay(row, space-evenly, center, 100%, auto);
  flex-wrap: wrap;
  .card-space{
    @include FlexDisplay(column, center, center, 23%, 60vh);
    margin-top: 2%;
    border: $terthiary-color 2px solid;
    
  }
}
</style>
