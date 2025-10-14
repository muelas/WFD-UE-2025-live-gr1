// src/main.ts

function gruss(person: { name: string; alter: number }) {
    console.log(`Hallo, ${person.name}! Du bist ${person.alter} Jahre alt.`);
}

const entwickler = {
    name: "Alex",
    alter: 30,
};

const Praktikant: any = null; // Absichtlich ein Fehler!

gruss(entwickler);
gruss(Praktikant); // Das wird einen Fehler verursachen, da any Typprüfungen ausschaltet

console.log("Skript fertig geladen.");