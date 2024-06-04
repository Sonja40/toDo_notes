// Funktion zum Laden der Notizen aus dem Local Storage
/*function load() {
    if (localStorage.getItem('titles')) {
        titles = JSON.parse(localStorage.getItem('titles'));
        texts = JSON.parse(localStorage.getItem('texts'));
    }
    if (localStorage.getItem('removetitles')) {
        removetitles = JSON.parse(localStorage.getItem('removetitles'));
        removetexts = JSON.parse(localStorage.getItem('removetexts'));
    }
}
*/

// Funktion zum Speichern der Notizen im Local Storage
 /* function save() {
    localStorage.setItem('titles', JSON.stringify(titles));
    localStorage.setItem('texts', JSON.stringify(texts));
    localStorage.setItem('removetitles', JSON.stringify(removetitles));
    localStorage.setItem('removetexts', JSON.stringify(removetexts));
} */

// Funktion zum Entfernen einer Notiz und Verschieben in den Papierkorb
/*function removeNote(i) {
    if (document.getElementById('headline').innerHTML === 'Today´s To Do´s') {
        removetitles.push(titles[i]);
        removetexts.push(texts[i]);
        titles.splice(i, 1);
        texts.splice(i, 1);
    } else {
        removetitles.splice(i, 1);
        removetexts.splice(i, 1);
    }
    render();
    save();
}
*/
// Funktion zum Wiederherstellen einer Notiz aus dem Papierkorb
/*function restore(i) {
    titles.push(removetitles[i]);
    texts.push(removetexts[i]);
    removetitles.splice(i, 1);
    removetexts.splice(i, 1);
    render();
    save();
}
*/
// Funktion zum Rendern der Notizen
/*function render() {
    let noteBox = document.getElementById('notes');
    noteBox.innerHTML = ``;
    if (document.getElementById('headline').innerHTML === 'Today´s To Do´s') {
        for (let i = 0; i < titles.length; i++) {
            const title = titles[i];
            const text = texts[i];
            noteBox.innerHTML += newNote(i, title, text);
        }
    } else {
        for (let i = 0; i < removetitles.length; i++) {
            const title = removetitles[i];
            const text = removetexts[i];
            noteBox.innerHTML += newTrashNote(i, title, text);
        }
    }
}*/

// Funktion zum Erstellen des HTML-Codes für eine neue Notiz
/*function newNote(i, title, text) {
    return `
    <div class="note">
    <a href="#"><img src="./img/pin.png" alt="Save Pin" class="input-icon"></a>
    <a href="#"><img src="./img/glass-container.png" alt="Papierkorb" onclick="removeNote(${i})" class="input-icon"></a>
    <h2 onclick="editNote(${i})">${title}</h2>
    <textarea class="noteText" onclick="editNote(${i})">${text}</textarea>
    </div>
    `;
}*/

// Funktion zum Erstellen des HTML-Codes für eine neue Notiz im Papierkorb
/*function newTrashNote(i, title, text) {
    return `
    <div class="note">
    <a href="#"><img src="./img/behalter.png" alt="Wiederherstellen" onclick="restore(${i})" class="input-icon"></a>
    <h2>${title}</h2>
    <textarea class="noteText">${text}</textarea>
    </div>
    `;
}

// Aufruf der Ladefunktion beim Start
load();
render();
*/
/*
let titles = [];
let notes = [];
let titlesTrash = [];
let notesTrash = [];
load();
*/
/*
function showBurgerMenu() {
    let checkBox = document.getElementById('checkbox');
    if (checkBox.checked) {
        document.getElementById('menu').classList.add('show-burgerMenu');
    } else {
        document.getElementById('menu').classList.remove('show-burgerMenu');
    }
}
*/
/*
function load() {
    titles = JSON.parse(localStorage.getItem('titles')) || [];
    notes = JSON.parse(localStorage.getItem('notes')) || [];
    titlesTrash = JSON.parse(localStorage.getItem('titlesTrash')) || [];
    notesTrash = JSON.parse(localStorage.getItem('notesTrash')) || [];
}
*/
/*
function save() {
    localStorage.setItem('titles', JSON.stringify(titles));
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('titlesTrash', JSON.stringify(titlesTrash));
    localStorage.setItem('notesTrash', JSON.stringify(notesTrash));
}
*/
/*
function renderNotes() {
    let noteBox = document.getElementById('notes');
    noteBox.innerHTML = '';
    if (document.getElementById('headline').innerHTML === 'Today´s To Do´s') {
        for (let i = 0; i < titles.length; i++) {
            noteBox.innerHTML += createNoteHTML(i, titles[i], notes[i], false);
        }
    } else {
        for (let i = 0; i < titlesTrash.length; i++) {
            noteBox.innerHTML += createNoteHTML(i, titlesTrash[i], notesTrash[i], true);
        }
    }
}
*/

/*
function createNoteHTML(i, title, note, isTrash) {
    return `
    <div class="note">
        <a><img id="notePin" src="./img/green_pin.png"></a>
        <a><img id="deleteImg" src="./img/rubbish-6664779_640.png" onclick="${isTrash ? `deleteForever(${i})` : `deleteNote(${i})`}"></a>
        ${isTrash ? `<a><img id="restoreImg" src="./img/restore_from_trash.png" onclick="restore(${i})"></a>` : ''}
        <h2 onclick="edit(${i}, ${isTrash})">${title}</h2>
        <textarea class="noteText" ${isTrash ? 'readonly' : `onclick="edit(${i}, ${isTrash})"`}>${note}</textarea>
    </div>`;
}
*/
/*
function addNote() {
    let title = document.getElementById('title');
    let note = document.getElementById('note');
    titles.push(title.value);
    notes.push(note.value);
    title.value = '';
    note.value = '';
    save();
    renderNotes();
}
*/
/*
function deleteNote(i) {
    titlesTrash.push(titles[i]);
    notesTrash.push(notes[i]);
    titles.splice(i, 1);
    notes.splice(i, 1);
    save();
    renderNotes();
}
*/
/*
function deleteForever(i) {
    titlesTrash.splice(i, 1);
    notesTrash.splice(i, 1);
    save();
    renderNotes();
}
*/
/*
function restore(i) {
    titles.push(titlesTrash[i]);
    notes.push(notesTrash[i]);
    deleteForever(i);
}
*/
/*
function edit(i, isTrash) {
    let noteBox = document.getElementById('edit');
    showEdit();
    let title = isTrash ? titlesTrash[i] : titles[i];
    let note = isTrash ? notesTrash[i] : notes[i];
    noteBox.innerHTML = `
    <textarea class="titleEdit" id="titleEdit" cols="40" rows="5">${title}</textarea>
    <textarea class="noteEdit" id="noteEdit" cols="40" rows="5">${note}</textarea>
    <a><img id="notePinEdit" src="./img/green_pin.png" onclick="saveEdit(${i}, ${isTrash})"></a>`;
}
*/
/*
function saveEdit(i, isTrash) {
    let title = document.getElementById('titleEdit').value;
    let note = document.getElementById('noteEdit').value;
    if (isTrash) {
        titlesTrash[i] = title;
        notesTrash[i] = note;
    } else {
        titles[i] = title;
        notes[i] = note;
    }
    hideEdit();
    save();
    renderNotes();
}
*/
/*
function showEdit() {
    document.getElementById('edit').classList.add('editShow');
}

function hideEdit() {
    document.getElementById('edit').classList.remove('editShow');
}

load();
renderNotes();
*/