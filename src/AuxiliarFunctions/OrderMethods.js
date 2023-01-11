export function AphabeticOrder(charactersArray){
    charactersArray.sort((FirstCharacter, SecondCharacter)=>{
        if(FirstCharacter.type < SecondCharacter.type) return -1;
        if(FirstCharacter.type > SecondCharacter.type) return 1;
        return 0;
    })
}