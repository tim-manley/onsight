import { noteNumToLabel } from "./util";

function isLetter(str) {
    return str.length === 1 && str.toLowerCase() !== str.toUpperCase();
}

function isLower(str) {
    return str === str.toLowerCase();
}

export function abcNoteToNote(abcNote) {
    let noteLetterIndex = -1;
    for (let i = 0; i < abcNote.length; i++) {
        if (isLetter(abcNote.charAt(i))) {
            noteLetterIndex = i;
        }
    }
    if (noteLetterIndex === -1) {
        throw new Error("abcNote string doesn't contain a note letter")
    }
    // Number of semitones to shift based on note name
    let shiftMap = {
        "C" : 0,
        "D" : 2,
        "E" : 4,
        "F" : 5,
        "G" : 7,
        "A" : 9,
        "B" : 11
    }
    // Need to map to a number between 0-48
    // Start at note shift value
    let noteNum = shiftMap[abcNote.charAt(noteLetterIndex).toUpperCase()];
    // Shift based on accidental
    if (noteLetterIndex > 0 && abcNote.charAt(noteLetterIndex - 1) === "_") {
        noteNum -= 1;
    } else if (noteLetterIndex > 0 && abcNote.charAt(noteLetterIndex - 1) === "^") {
        noteNum += 1;
    }

    if (isLower(abcNote.charAt(noteLetterIndex))) { // If lower case, add 36
        noteNum += 36;
        // Check for apostraphe
        if (abcNote.length > noteLetterIndex + 1 && abcNote.charAt(noteLetterIndex + 1) === "'") {
            noteNum += 12;
        }
    } else {
        // If there's a character after note letter
        if (abcNote.length > noteLetterIndex + 1) {
            // If there's 1 comma then we add 12
            if (abcNote.length === noteLetterIndex + 2 && abcNote.charAt(noteLetterIndex + 1) === ",") {
                noteNum += 12;
            }
            // If there's 2 commas we don't add anything
        } else {
            noteNum += 24; // No comma means higher
        }
    }
    return noteNumToLabel(noteNum);
}