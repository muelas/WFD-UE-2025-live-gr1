class Shape {
    constructor(
        protected _color: string,
        public name: string,
    ) {
    }

    get area(): number {
        return 0;
    }

    draw(): void { // kein Modifier --> public
        console.log(`Zeichne ${this.name} in ${this._color}`);
    }
}

class Circle extends Shape {
    constructor(
        color: string,
        private _radius: number,
    ) {
        super(color, "Kreis");
    }

    get area(): number {
        return Math.PI * (this._radius ** 2);
    }

    draw(): void {
        console.log(`Zeichne ${this.name} mit Radius ${this._radius} in ${this._color}`);
    }
}

// Klasse Person, mit name als Getter
class Person implements HasName {
    constructor(
        private _name: string,
    ) {
        // constructor
    }

    get name(): string {
        return this._name;
    }
}

interface HasName {
    name: string;
}

function sayMyName(x: HasName) {
    console.log(x.name);
}

sayMyName(new Person("Felix"));
sayMyName(new Shape("rot", "Polygon"));


// Suche etwas mit name
function findByName(items: HasName[], name: string): HasName | undefined {
    for (const item of items) {
        if (item.name === name) {
            return item;
        }
    }
    return undefined;
}

const s1: Shape = new Circle("rot", 2);
const s2: Shape = new Shape("blau", "Dreieck");
const s3: Shape = new Circle("grün", 5);
const s4: Shape = new Shape("gelb", "Viereck");
const s5: Shape = new Circle("schwarz", 1.5);
const s6: Shape = new Shape("violett", "Stern");

const data: Shape[] = [s1, s2, s3, s4, s5];
let result: Shape | undefined;

// result = findByName(data, "Stern");  // klappt nicht, weil HasName zurückgegeben wird

function findByNameGeneric<T extends HasName>(items: T[], name: string): T | undefined {
    for (const item of items) {
        if (item.name === name) {
            return item;
        }
    }
    return undefined;
}

result = findByNameGeneric<Shape>(data, "Stern");

// klappt auch für Person
const persons: Person[] = [
    new Person("Felix"),
    new Person("Max"),
];
let wanted: Person | undefined;

wanted = findByNameGeneric<Person>(persons, "Max");


// Generische Klasse
class NumDataStore {
    private _items: number[] = [];

    public add(item: number) {
        this._items.push(item);
    }

    public getAll(): number[] {
        return this._items;
    }
}

class StringDataStore {
    private _items: string[] = [];

    public add(item: string) {
        this._items.push(item);
    }

    public getAll(): string[] {
        return this._items;
    }
}

class DataStore<X> {
    private _items: X[] = [];

    public add(item: X) {
        this._items.push(item);
    }

    public getAll(): X[] {
        return this._items;
    }
}

const shapeStore: DataStore<Shape> = new DataStore<Shape>();
shapeStore.add(s1);
// shapeStore.add(wanted);  // Person passt nicht in DataStore für Shapes!

const personStore: DataStore<Person> = new DataStore<Person>();
personStore.add(new Person("Katrin"));

const numberStore: DataStore<number> = new DataStore<number>();


// generisches Interface
interface IBox<T> {
    content: T;
}

// Mehrere Typparamater
class Pair<S, T> {
    item1: S;
    item2: T;

    constructor(item1: S, item2: T) {
        this.item1 = item1;
        this.item2 = item2;
    }
}

const p1: Pair<string, boolean> = new Pair("Max", true);


// Intersection Type
interface Colorful {
    color: string;
}

interface Cube {
    side: number;
}

function printColorfulCube(cc: Colorful & Cube) {
    console.log(`Würfel: Farbe=${cc.color}, Kante=${cc.side}`);
}

type ColorfulCube = Colorful & Cube;

let x: ColorfulCube = {color: "violett", side: 2};

// Alternative mit Interfaces
interface IColorfulCube extends Colorful, Cube {
    
}