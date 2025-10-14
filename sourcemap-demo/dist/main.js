"use strict";
// src/main.ts
function gruss(person) {
    console.log(`Hallo, ${person.name}! Du bist ${person.alter} Jahre alt.`);
}
const entwickler = {
    name: "Alex",
    alter: 30,
};
const Praktikant = null; // Absichtlich ein Fehler!
gruss(entwickler);
gruss(Praktikant); // Das wird einen Fehler verursachen, da any Typprüfungen ausschaltet
console.log("Skript fertig geladen.");
//# sourceMappingURL=main.js.map