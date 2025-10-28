// Enum definieren
enum Note {
    SehrGut = 1,
    Gut,
    Befriedigend = 3,
    Genuegend,
    NichtGenuegend
}

console.log(Note.Gut);  // 2

// Enum verwenden
let myGrade: Note = Note.Befriedigend;
myGrade = Note.SehrGut;
myGrade = 5;

// myGrade="Genügend"; // nur Enum Werte erlaubt
// myGrade = 6;    // nur Werte erlaubt die auch vorkommen

// StringEnums
enum Color {
    Red = "Red",
    Blue = "Blue",
    Green = "Green",
    // White,  // Fehler: Muss initialisiert werden bei Strings
}

// Mixed Enum - keine gute Idee!
enum Status {
    Active = 1,
    Inactive = "INACTIVE"
}

// Enum mit berechneten Werten
enum Computed {
    A = 1,
    B = A + 42,
    C = A * 12,
}

console.log(Computed.A);
console.log(Computed[1]);