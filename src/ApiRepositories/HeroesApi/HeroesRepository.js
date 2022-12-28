import ApiPlayLoad from "../PlayLoads/ApiPlayLoad";

export default class HeroesRepository{
    #url
    constructor(){
        this.#url = 'https://akabab.github.io/superhero-api/api/all.json';
    }
    async getAll(){
        const response = await fetch(this.#url);
        const json = await response.json();
        
        let characters = [];
        
        for (const character of json) {
            
            const characterToAdd = new ApiPlayLoad(character.name, character.images.lg);
            characters.push(characterToAdd);
        }
        
        return characters;
    }
}