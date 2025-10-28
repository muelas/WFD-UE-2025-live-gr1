"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enum definieren
var Note;
(function (Note) {
    Note[Note["SehrGut"] = 1] = "SehrGut";
    Note[Note["Gut"] = 2] = "Gut";
    Note[Note["Befriedigend"] = 3] = "Befriedigend";
    Note[Note["Genuegend"] = 4] = "Genuegend";
    Note[Note["NichtGenuegend"] = 5] = "NichtGenuegend";
})(Note || (Note = {}));
console.log(Note.Gut); // 2
// Enum verwenden
let myGrade = Note.Befriedigend;
myGrade = Note.SehrGut;
myGrade = 5;
// myGrade="Genügend"; // nur Enum Werte erlaubt
// myGrade = 6;    // nur Werte erlaubt die auch vorkommen
// StringEnums
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Blue"] = "Blue";
    Color["Green"] = "Green";
    // White,  // Fehler: Muss initialisiert werden bei Strings
})(Color || (Color = {}));
// Mixed Enum - keine gute Idee!
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status["Inactive"] = "INACTIVE";
})(Status || (Status = {}));
// Enum mit berechneten Werten
var Computed;
(function (Computed) {
    Computed[Computed["A"] = 1] = "A";
    Computed[Computed["B"] = 43] = "B";
    Computed[Computed["C"] = 12] = "C";
})(Computed || (Computed = {}));
console.log(Computed.A);
console.log(Computed[1]);
