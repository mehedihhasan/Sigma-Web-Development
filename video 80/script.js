// let obj={
//     a:1,
//     b:"mehedi"
// }
// console.log(obj);

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){
        this.name = name
        console.log("obj is created.....");

    }

    eats(){
        console.log("khacchi");
    }
    jumps(){
      console.log("Laff dicchi");
    }

}

class Lion extends Animal{

    constructor(name){
        super(name)
        console.log("Obj is created and he is Lion.......");
    }

}

let a = new Animal("Bunny")
console.log(a);

let l= new Lion("Shingho")
console.log(l);