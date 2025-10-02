const myObj = {
    name: "Max",
    age: 5,

    hobbies: ["Fußball", "Lego"],
    subobject: {
        key: "value",
        subsubobject: {
            key2: "value",
        }
    },

    action: function () {
        //todo
    },

    action2: (param) => {
        //todo
    },

    action3() {
        //todo
    }
};

console.log(myObj.subobject.subsubobject.key2);

const secondObj = {
    name: "Felix",
    alter: 7,
};

console.log(myObj);

// ### Klassen ###
console.log("### Klassen ###");

class Person {
    #name;
    #firstname;
    #age;

    constructor(name, fn, age) {
        this.#name = name;
        this.#age = age;
        this.#firstname = fn;
    }

    get name() {
        return this.#name;
    }

    set name(val) {
        this.#name = val;
    }

    get firstname() {
        return this.#firstname;
    }

    set firstname(value) {
        this.#firstname = value;
    }

    get fullname() {
        return this.#name + " " + this.#firstname;
    }

    set fullname(val) {
        const n = val.split(" ");
        this.#name = n[0];
        this.#firstname = n[1];
    }

    // name() {
    //     return this.#name;
    // }
    //
    // setName(val) {
    //     this.#name = val;
    // }

    action() {
        console.log("I am a person");
    }
}


const p = new Person("Müller", "Max", 5);
// ohne set/get
// console.log(p.name());
// p.setName("Moritz");
// mit set/get
// p.name = "Moritz";
console.log(p.name);
console.log(p.firstname);
console.log(p.fullname);
p.fullname = "Müller Felix";
console.log(p.fullname);
p.action();

// ### Vererbung ###
console.log("### Vererbung ###");

class Student extends Person {
    #nervenzusammenbruch;

    constructor(n, fn, a, nz) {
        super(n, fn, a);
        this.#nervenzusammenbruch = nz;
    }

    studentAction() {
        console.log("ACTION!");
    }

    action() {
        console.log("I am a student");
    }
}

const s1 = new Student("Müller", "Felix", 7, false);
const p1=new Person("Müller","Katrin",39);
s1.studentAction();
p1.action();
s1.action();

// ### Async mit Promises ###
console.log("#### Async mit Promises ###");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(data => console.log(data[0].name));