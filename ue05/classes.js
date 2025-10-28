"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    _color;
    name;
    constructor(_color, name) {
        this._color = _color;
        this.name = name;
    }
    get area() {
        return 0;
    }
    draw() {
        console.log(`Zeichne ${this.name} in ${this._color}`);
    }
}
class Circle extends Shape {
    _radius;
    constructor(color, _radius) {
        super(color, "Kreis");
        this._radius = _radius;
    }
    get area() {
        return Math.PI * (this._radius ** 2);
    }
    draw() {
        console.log(`Zeichne ${this.name} mit Radius ${this._radius} in ${this._color}`);
    }
}
// Klasse Person, mit name als Getter
class Person {
    _name;
    constructor(_name) {
        this._name = _name;
        // constructor
    }
    get name() {
        return this._name;
    }
}
function sayMyName(x) {
    console.log(x.name);
}
sayMyName(new Person("Felix"));
sayMyName(new Shape("rot", "Polygon"));
// Suche etwas mit name
function findByName(items, name) {
    for (const item of items) {
        if (item.name === name) {
            return item;
        }
    }
    return undefined;
}
const s1 = new Circle("rot", 2);
const s2 = new Shape("blau", "Dreieck");
const s3 = new Circle("grün", 5);
const s4 = new Shape("gelb", "Viereck");
const s5 = new Circle("schwarz", 1.5);
const s6 = new Shape("violett", "Stern");
const data = [s1, s2, s3, s4, s5];
let result;
// result = findByName(data, "Stern");  // klappt nicht, weil HasName zurückgegeben wird
function findByNameGeneric(items, name) {
    for (const item of items) {
        if (item.name === name) {
            return item;
        }
    }
    return undefined;
}
result = findByNameGeneric(data, "Stern");
// klappt auch für Person
const persons = [
    new Person("Felix"),
    new Person("Max"),
];
let wanted;
wanted = findByNameGeneric(persons, "Max");
// Generische Klasse
class NumDataStore {
    _items = [];
    add(item) {
        this._items.push(item);
    }
    getAll() {
        return this._items;
    }
}
class StringDataStore {
    _items = [];
    add(item) {
        this._items.push(item);
    }
    getAll() {
        return this._items;
    }
}
class DataStore {
    _items = [];
    add(item) {
        this._items.push(item);
    }
    getAll() {
        return this._items;
    }
}
const shapeStore = new DataStore();
shapeStore.add(s1);
// shapeStore.add(wanted);  // Person passt nicht in DataStore für Shapes!
const personStore = new DataStore();
personStore.add(new Person("Katrin"));
const numberStore = new DataStore();
// Mehrere Typparamater
class Pair {
    item1;
    item2;
    constructor(item1, item2) {
        this.item1 = item1;
        this.item2 = item2;
    }
}
const p1 = new Pair("Max", true);
function printColorfulCube(cc) {
    console.log(`Würfel: Farbe=${cc.color}, Kante=${cc.side}`);
}
let x = { color: "violett", side: 2 };
