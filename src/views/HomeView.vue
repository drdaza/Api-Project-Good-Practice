<script setup>
import  { charactesStore } from '../stores/PrincipalStore'
import { onBeforeMount } from 'vue';
import CardCharacter from '../components/CardComponent/CardCharacter.vue';
import {FavCharacterStore} from '../stores/FavoriteStores';
import { ref, computed } from 'vue';
const selected = ref('');
const categoryFilter = ref('');

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
const OrderArray=(value)=>{
  if(value=='A - Z'){
    principalStore.orderAlpahbetic();
  }
}
const FilterCategory = computed(()=>{
  let filterCharacters = [];
  if(categoryFilter.value=='all'|| categoryFilter.value=='') return principalStore.Characters;
  for (const character of principalStore.Characters) {
      if(character.type==categoryFilter.value) filterCharacters.push(character)
  }
  return filterCharacters;
})
</script>

<template>
  <main>
    
    <select v-model="selected" @change="OrderArray(selected)" >
      <option disabled value="">Please select one</option>
      <option>A - Z</option>
      <option>Z - A</option>
      <option>C</option>
    </select>
    <select v-model="categoryFilter" >
      <option disabled value="">Please select one filter</option>
      <option>all</option>
      <option>bug</option>
      <option>dragon</option>
      <option>grass</option>
    </select>
    <!-- <button @click="OrderArray">A-Z</button> -->
    
    <div>Selected: {{ selected }}</div>
    <section class="card-section">
      <div class="card-space" v-for="item of FilterCategory">
        <CardCharacter
          :character="item"
          @favhero="AddFavorite(item.id)"
        />
      </div>
    </section>
  </main>
</template>
<style lang="scss" scoped>
@use '../assets/scss/main' as *;
main{

  @include FlexDisplay(column, space-evenly, center, 100%, auto);
  .card-section{
    @include FlexDisplay(row, space-evenly, center, 100%, auto);
    flex-wrap: wrap;
  .card-space{
      @include FlexDisplay(column, center, center, 27%, 40vh);
      margin-top: 2%;
      border: $terthiary-color 2px solid;
      
    }
  }
}
</style>