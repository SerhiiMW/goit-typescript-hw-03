
class Key {
    private signature: number = Math.random();

    getSignature() : number {
        return this.signature;
    }
  }

class Person {
   constructor(private key : Key) {}

   getKey() : Key {
        return this.key;
    }
  }


abstract class House {
    protected door: boolean = false;
    private tenants: Array<Person> = [];
    constructor(protected key : Key) {}

    comeIn(Person) : void {
    if(this.door === true) {
        this.tenants.push(Person)
    }    
    }
    public abstract openDoor(key : Key) : void;


}

class MyHouse extends House {
    openDoor(key : Key) : void {
        if(key.getSignature() === this.key.getSignature()) {
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