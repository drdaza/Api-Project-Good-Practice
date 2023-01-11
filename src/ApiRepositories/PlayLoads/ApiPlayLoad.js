export default class ApiPlayLoad{
    name
    image
    id
    type

    /* constructor(name, img, id){
        this.name = name;
        this.image = img;
        this.id = id;
        this.type = null;
    } */
    constructor(name, img, id, type){
        this.name = name;
        this.image = img;
        this.id = id;
        this.type = type;
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