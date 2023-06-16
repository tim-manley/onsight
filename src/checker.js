import { abcNoteToNote } from "./abcutil";
import $ from "jquery"

let currentNoteIndex;
let currentNote;

function getNoteTag(noteIndex) {
    let noteWrapper = $("#target").find(`[data-index='${noteIndex}']`);
    if (noteWrapper == null) { // Note out of range
        return null;
    }
    let note = noteWrapper.children()[1]; // Need to be more specific than 1 in future
    return note;
}

function getAbcNote(noteIndex) {
    let note = getNoteTag(noteIndex);
    try {
        let abcNoteVal = note.getAttribute("data-name");
        return abcNoteVal;
    } catch (error) {
        console.log("No notes");
        return null;
    }
}

function highlightNote(noteIndex, color) {
    let note = getNoteTag(noteIndex);
    if (note == null) {
        return -1;
    }
    note.style.color = color;
    return 1;
}

function nextNote() {
    highlightNote(currentNoteIndex, 'green');
    currentNoteIndex++;
    if (highlightNote(currentNoteIndex, 'red') === -1) {
        return;
    };
    let abcNote = getAbcNote(currentNoteIndex);
    currentNote = abcNoteToNote(abcNote);
}

export function checker() {
    // Color the first note blue
    highlightNote(0, 'red');
    currentNoteIndex = 0;
    currentNote = abcNoteToNote(getAbcNote(currentNoteIndex));

    // Set checking params
    const timeThresh = 600;
    const interval = 100;
    let elapsed = 0;

    // Private checker helper
    function checkCorrect() {
        let playedNote = document.getElementById('note').innerHTML;
    
        if (playedNote === currentNote) {
            elapsed += interval;
    
            if (elapsed >= timeThresh) {
                nextNote();
                elapsed = 0;
            }
        } else {
            elapsed = 0;
        }
    }

    // Start listening and comparing to current note
    setInterval(checkCorrect, interval);
}