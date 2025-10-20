class Person {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    addHobby(hobby: string): void {
        this.hobbies.push(hobby);
    }
}

// Modifier
class Person2 {

    private _name: string;
    private _age: number;
    private _hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]) {
        this._name = name;
        this._age = age;
        this._hobbies = hobbies;
    }

    addHobby(hobby: string): void {
        this._hobbies.push(hobby);
    }

    public get name(): string {
        return this._name;
    }

    public set name(val: string) {
        if (val === "") {
            console.error("Name cannot be empty");
            return;
        }
        this._name = val;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {    //kein modifier --> public
        if (value < 0)
            return;
        this._age = value;
    }

    public get hobbiesAsString(): string {
        return this._hobbies.join(", ");
    }
}

const p2 = new Person2("Max", 5, ["Fußball"]);
// console.log(p2._name);
console.log(p2.name);
console.log(p2.age);    // 5
p2.age = -42;
console.log(p2.age);    // still 5
console.log(p2.hobbiesAsString);
p2.addHobby("Kartenspielen");
console.log(p2.hobbiesAsString);


// Parameter Properties
class Person3 {

    constructor(
        private _name: string,
        private _age: number,
        private _hobbies: string[],
        private _adult: boolean = false) {
    }

    addHobby(hobby: string): void {
        this._hobbies.push(hobby);
    }

    public get name(): string {
        return this._name;
    }

    public set name(val: string) {
        if (val === "") {
            console.error("Name cannot be empty");
            return;
        }
        this._name = val;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {    //kein modifier --> public
        if (value < 0)
            return;
        this._age = value;
    }

    public get hobbiesAsString(): string {
        return this._hobbies.join(", ");
    }
}

const p3 = new Person3("Felix", 7, ["Fußball"]);
const p4 = new Person3("Katrin", 39, ["lesen"], true);

// Vererbung - mit Parameter Properties
class Student extends Person {
    constructor(
        name: string, age: number, hobbies: string[],
        private readonly sid: number) {
        super(name, age, hobbies);
    }
}

// Funktions Typen
type Func1 = (x: number, y: string) => number | string;

const f1: Func1 = (param1: number, param2: string): number | string => {
    if (param1 > param2.length) {
        return param1;
    } else {
        return param2;
    }
}

function testMe(f: Func1, a: number, b: string): void {
    console.log(f(a, b));
    // f(b, a); // Typen inkompatibel
}

testMe(f1, 12, "abc");
