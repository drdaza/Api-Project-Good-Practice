export default class ApiPlayLoad{
    name
    image

    constructor(name, img){
        this.name = name;
        this.image = img;
    }
    get name(){
        return this.name
    }
    get image(){
        return this.image
    }
}