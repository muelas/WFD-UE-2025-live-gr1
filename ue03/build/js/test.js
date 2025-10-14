"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 4;
let x1 = "Hallo";
// x1 = 1; //Typfehler
let x2 = 2;
x2 = "2";
let x3 = Math.random() > 0.5 ? 1 : "two";
let doNotUse = 1;
doNotUse = "abc";
doNotUse = false;
function abc(x, y) {
}
function abc2(x, y) {
    return x + y; //Stringverketung
}
abc2(1, "2"); // 12
function abc3() {
    // return Math.random > 0.5 ? 1 : "two";    // Fehler: Klammern vergessen
}
// arrays, tuples und Co
let a1 = ["a", "B", "c"];
let a2 = ["one", 2, "three"];
let a3 = ["1"];
a3.push(true);
a3[2] = "123";
// a1.push(true);
let t1 = ["Felix", "Max", 2];
t1[0] = "Andi";
let a = 123;
let p1 = { name: "Felix", age: 7, languages: ["German"], adult: false };
let p2 = { name: "Max", age: 5, languages: ["German"] };
function learnEnglish(p) {
    p.languages.push("English");
}
let s1;
s1 = { name: "Katrin", age: 39, active: true };
let s2;
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
function optional(x, y) {
    if (y === undefined) {
        return "nope";
    }
    else {
        return x + y;
    }
}
let o1 = optional(12, 13);
let o2 = optional(12, 13);
//# sourceMappingURL=test.js.map