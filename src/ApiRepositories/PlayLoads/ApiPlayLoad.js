export default class ApiPlayLoad{
    name
    image
    id

    constructor(name, img, id){
        this.name = name;
        this.image = img;
        this.id = id;
    }
    setname(name){
        this.name = name;
    }
    get name(){
        return this.name;
    }
    setid(id){
        this.id = id;
    }
    get id(){
        return this.id;
    }
}