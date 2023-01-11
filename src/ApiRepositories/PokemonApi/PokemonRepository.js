import ApiPlayLoad from "../PlayLoads/ApiPlayLoad";

export default class PokemonRepository{
    #url;

    constructor(){
        this.#url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
    }
    async getAll(){
        const response = await fetch(this.#url);
        const json = await response.json();

        let charactersPure = [];
        let charactersReturn = [];

        for (const characterRequest of json.results) {
            const characterResponse = await fetch(characterRequest.url);
            const characterJson = await characterResponse.json();

            charactersPure.push(characterJson);
        }
        for (const character of charactersPure) {
            const characterToAdd = new ApiPlayLoad(character.name, character.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default, character.id, character.types[0].type.name);
            
            charactersReturn.push(characterToAdd);
        }
        
        return charactersReturn;
    }
}