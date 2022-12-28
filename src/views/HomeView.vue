<script setup>
import  { charactesStore } from '../stores/PrincipalStore'
import { onBeforeMount } from 'vue';
import CardCharacter from '../components/CardComponent/CardCharacter.vue';

const principalStore = charactesStore();

onBeforeMount(()=>{
  principalStore.AsignCharacters();
}
  
)
console.log(principalStore.Characters);
</script>

<template>
  <main>
    <div class="card-space" v-for="item of principalStore.Characters">
      <CardCharacter
        :character="item"
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