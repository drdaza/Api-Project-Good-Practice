import {defineStore} from 'pinia';
import ApiPlayLoad from '../ApiRepositories/PlayLoads/ApiPlayLoad';

export const FavCharacterStore= defineStore({
    id: 'Favcharacters',
    state: () => ({
        FavCharacters:[],
    }),
    actions: {
        AddCharacterToFavorites(character){
            const HeroToAdd = this.FavCharacters.find(item => item.id === character.id);
            console.log(HeroToAdd);
            if(HeroToAdd){
                console.log("is repeat");
                this.DeleteCharacterToFavorites(HeroToAdd);
                return
            }
            const newCharactertoAdd = new ApiPlayLoad(character.name, character.image, character.id)
            console.log('anidadio');
            this.FavCharacters.push(newCharactertoAdd)
        },
        getCharacterbyId(id){
            return this.FavCharacters.find(item => item.id === id);
        },
        DeleteCharacterToFavorites(character){
            const indexCharacter = this.FavCharacters.indexOf(character);
            this.FavCharacters.splice(indexCharacter,1);
        }
    }
})