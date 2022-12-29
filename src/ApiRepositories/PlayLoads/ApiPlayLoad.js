export default class ApiPlayLoad{
    name
    image
    id

    constructor(name, img, id){
        this.name = name;
        this.image = img;
        this.id = id;
    }
    get name(){
        return this.name
    }
    get image(){
        return this.image
    }
}