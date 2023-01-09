import DisneyRepository from "./DisneyApi/DisneyRepository";
import HeroesRepository from "./HeroesApi/HeroesRepository";
import PokemonRepository from "./PokemonApi/PokemonRepository";

export default class ApiRepository{
    #api;

    constructor(defineApi){
        this.#api = defineApi;
    }

    chooseApi(){
        if(this.#api === 'Disney') return new DisneyRepository();

        if(this.#api === 'Heroes') return new HeroesRepository();

        if(this.#api === 'Pokemon') return new PokemonRepository();
    }

}