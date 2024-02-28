
class Key {
    private signature: any;

    getSignature() {
        return this.signature.Math.random();
    }
  }

class Person {
   constructor(private key : Key) {}

   getKey() {
        return this.key;
    }
  }


abstract class House {
    public door: true | false;
    public tenants: Array<number> = [];
    constructor(key : Key) {}

    comeIn(person) {
    if(this.door = true) {
        this.tenants.push(person)
    }    
    }
    public abstract openDoor(key : {}) : void;


}

class MyHouse extends House {
    openDoor(key : {}) : void {
        if(key === key) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};