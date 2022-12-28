import {defineStore} from 'pinia';
import ApiRepository from '../ApiRepositories/ApiRepository';

export const charactesStore= defineStore({
    id: 'characters',
    state: () => ({
        Characters:[],
    }),
    actions: {
        async AsignCharacters(){
            const Repository = new ApiRepository('Disney');
            const Api = Repository.chooseApi();
            
            
            this.Characters = await Api.getAll();
            console.log(this.Characters);
        }
    }
})