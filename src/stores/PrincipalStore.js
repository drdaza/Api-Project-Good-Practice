import {defineStore} from 'pinia';
import ApiRepository from '../ApiRepositories/ApiRepository';

export const charactesStore= defineStore({
    id: 'characters',
    state: () => ({
        Characters:[],
    }),
    actions: {
        async AsignCharacters(){
            const Repository = new ApiRepository('Pokemon');
            const Api = Repository.chooseApi();
            
            
            this.Characters = await Api.getAll();
            console.log(this.Characters);
        },
        getChracterbyId(characterId){
            return this.Characters.find(item => item.id == characterId)
        },
        orderAlpahbetic(){
            this.Characters.sort((FirstCharacter, SecondCharacter)=>{
                if(FirstCharacter.name < SecondCharacter.name) return -1;
                if(FirstCharacter.name > SecondCharacter.name) return 1;
                return 0;
            })
        }
    }
})