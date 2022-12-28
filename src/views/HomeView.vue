<script setup>
import  { charactesStore } from '../stores/PrincipalStore'
import { onBeforeMount } from 'vue';

const principalStore = charactesStore();

onBeforeMount(()=>{
  principalStore.AsignCharacters();
}
  
)
console.log(principalStore.Characters);
</script>

<template>
  <main>
    <div v-for="item of principalStore.Characters">
      <img :src="item.image" alt="">
      <h1>{{item.name}}</h1>
    </div>
  </main>
</template>
