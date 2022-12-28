import ApiPlayLoad from "../PlayLoads/ApiPlayLoad";

export default class DisneyRepository{
    #url
    constructor(){
        this.#url = 'https://api.disneyapi.dev/characters?page=1';
    }

    async getAll(){
        const response = await fetch(this.#url);
        const json = await response.json();

        let characters = [];

        for (const character of json.data){
            
            const characterToAdd = new ApiPlayLoad(character.name, character.imageUrl);
            characters.push(characterToAdd);
            
        }

        return characters;
    }
}