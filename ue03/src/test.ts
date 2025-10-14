let x = 4;
let x1: string = "Hallo";
// x1 = 1; //Typfehler
let x2: string | number = 2;
x2 = "2";

let x3 = Math.random() > 0.5 ? 1 : "two";

let doNotUse: any = 1;
doNotUse = "abc";
doNotUse = false;

function abc(x: number, y: number): void {

}

function abc2(x: number, y: string) {
    return x + y;   //Stringverketung
}

abc2(1, "2");    // 12

function abc3() {
    // return Math.random > 0.5 ? 1 : "two";    // Fehler: Klammern vergessen
}

// arrays, tuples und Co
let a1 = ["a", "B", "c"];
let a2 = ["one", 2, "three"];
let a3: (string | boolean)[] = ["1"];
a3.push(true);
a3[2] = "123";
// a1.push(true);

let t1: [string, string, number] = ["Felix", "Max", 2];
t1[0] = "Andi";
// t1[2] = "Katrin";

// types und objects
type aType = number | string;
let a: aType = 123;

type Person = {
    name: string,
    age: number,
    languages: string[],
    adult?: boolean,
}

let p1: Person = {name: "Felix", age: 7, languages: ["German"], adult: false};
let p2: Person = {name: "Max", age: 5, languages: ["German"]};

function learnEnglish(p: Person) {
    p.languages.push("English");
}

// interfaces
interface Student {
    name: string,
    age: number,
    active?: boolean,
}

let s1: Student;
s1 = {name: "Katrin", age: 39, active: true};

let s2: { height: number, width: number, fill?: boolean };
s2 = {
    height: 12,
    width: 2,
    fill: false,
};

let s3 = {
    height: 12,
    width: 2,
    fill: false,
};

// optionale parameter
function optional(x: number, y?: number): number | string {
    if (y === undefined) {
        return "nope";
    } else {
        return x + y;
    }
}

let o1: number = optional(12, 13) as number;
let o2: number | string = optional(12, 13);