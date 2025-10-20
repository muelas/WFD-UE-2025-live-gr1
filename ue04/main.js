"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    addHobby(hobby) {
        this.hobbies.push(hobby);
    }
}
// Modifier
class Person2 {
    _name;
    _age;
    _hobbies;
    constructor(name, age, hobbies) {
        this._name = name;
        this._age = age;
        this._hobbies = hobbies;
    }
    addHobby(hobby) {
        this._hobbies.push(hobby);
    }
    get name() {
        return this._name;
    }
    set name(val) {
        if (val === "") {
            console.error("Name cannot be empty");
            return;
        }
        this._name = val;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0)
            return;
        this._age = value;
    }
    get hobbiesAsString() {
        return this._hobbies.join(", ");
    }
}
const p2 = new Person2("Max", 5, ["Fußball"]);
// console.log(p2._name);
console.log(p2.name);
console.log(p2.age); // 5
p2.age = -42;
console.log(p2.age); // still 5
console.log(p2.hobbiesAsString);
p2.addHobby("Kartenspielen");
console.log(p2.hobbiesAsString);
// Parameter Properties
class Person3 {
    _name;
    _age;
    _hobbies;
    _adult;
    constructor(_name, _age, _hobbies, _adult = false) {
        this._name = _name;
        this._age = _age;
        this._hobbies = _hobbies;
        this._adult = _adult;
    }
    addHobby(hobby) {
        this._hobbies.push(hobby);
    }
    get name() {
        return this._name;
    }
    set name(val) {
        if (val === "") {
            console.error("Name cannot be empty");
            return;
        }
        this._name = val;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0)
            return;
        this._age = value;
    }
    get hobbiesAsString() {
        return this._hobbies.join(", ");
    }
}
const p3 = new Person3("Felix", 7, ["Fußball"]);
const p4 = new Person3("Katrin", 39, ["lesen"], true);
// Vererbung - mit Parameter Properties
class Student extends Person {
    sid;
    constructor(name, age, hobbies, sid) {
        super(name, age, hobbies);
        this.sid = sid;
    }
}
const f1 = (param1, param2) => {
    if (param1 > param2.length) {
        return param1;
    }
    else {
        return param2;
    }
};
function testMe(f, a, b) {
    console.log(f(a, b));
    // f(b, a); // Typen inkompatibel
}
testMe(f1, 12, "abc");
//# sourceMappingURL=main.js.map