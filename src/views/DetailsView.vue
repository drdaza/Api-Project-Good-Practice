<script setup>
import { charactesStore } from '../stores/PrincipalStore';
import CardCharacter from '../components/CardComponent/CardCharacter.vue';

const principalStore = charactesStore()

const printDetails = (characterId)=>{
    for (const character of principalStore.Characters) {
        if(character.id == characterId) return character;
    }
    return;
}
</script>
<template >
    <div>
        <CardCharacter
            :character="principalStore.Characters[0]"
         />
    </div>
</template>
