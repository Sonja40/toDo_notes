let titles = [];
let notes = [];
let titlesTrash = [];
let notesTrash = [];
load();

function showBurgerMenu() {
    let checkBox = document.getElementById('checkbox');
    if (checkBox.checked == true) {
        document.getElementById('menu').classList.add('show-burgerMenu');
    }
    else {
        document.getElementById('menu').classList.remove('show-burgerMenu');
    }
}

function load() {
    let titlesAsText = localStorage.getItem('titles');
    let notesAsText = localStorage.getItem('notes');

    let titlesAsTrashText = localStorage.getItem('titlesTrash');
    let notesAsTrashText = localStorage.getItem('notesTrash');

    if (titlesAsText && notesAsText && titlesAsTrashText && notesAsTrashText) {
        titles = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
        titlesTrash = JSON.parse(titlesAsTrashText);
        notesTrash = JSON.parse(notesAsTrashText);
    }
}

function save() {
    let titlesAsText = JSON.stringify(titles);
    let notesAsText = JSON.stringify(notes);
    let titlesTrashAsText = JSON.stringify(titlesTrash);
    let notesTrashAsText = JSON.stringify(notesTrash);

    localStorage.setItem('titles', titlesAsText);
    localStorage.setItem('notes', notesAsText);
    localStorage.setItem('titlesTrash', titlesTrashAsText);
    localStorage.setItem('notesTrash', notesTrashAsText);
}

function renderNotes() {
    let noteBox = document.getElementById('notes');
    noteBox.innerHTML = ``;
    if (document.getElementById('index').innerHTML == 'Nonsticky Notes') {
        for (let i = 0; i < titles.length; i++) {
            const title = titles[i];
            const note = notes[i];
            noteBox.innerHTML +=
            createNote(i, noteBox, title, note);
        }
    } else {
        for (let i = 0; i < titlesTrash.length; i++) {
            const title = titlesTrash[i];
            const note = notesTrash[i];
            noteBox.innerHTML +=
            createNote(i, noteBox, title, note);
        }
    }
}

function createNote(i, noteBox, title, note) {
    return `
    <div class="note">
    <a> <img id="notePin" src="./img/green_pin.png" class="input-icon"></a>
    <a> <img id="deleteImg" src="./img/rubbish-6664779_640.png" onclick="deleteNote(${i})" class="input-icon"></a>
    <h2 onclick="editNote(${i})">${title}</h2>
    <textarea class="noteText" onclick="editNote(${i})">${note}</textarea>
    </div>`
}

function addNote() {
    let title = document.getElementById('title');
    let note = document.getElementById('note');

    titles.push(title.value);
    notes.push(note.value);

    document.getElementById('title').value = ``
    document.getElementById('note').value = ``

    save();
    renderNotes();
}
//TODO: Hier hervorheben
function deleteNote(i) {
    if (document.getElementById('index').innerHTML == 'Nonsticky Notes') {
        addTrashNote(i);
        titles.splice(i, 1);
        notes.splice(i, 1);
    }
    else {
        titlesTrash.splice(i, 1);
        notesTrash.splice(i, 1);
    }
    save();
    renderNotes();
}
//TODO: Hier hervorheben


function addTrashNote(i) {
    titlesTrash.push(titles[i]);
    notesTrash.push(notes[i]);
}

function restoreNote(i) {
    titles.push(titlesTrash[i]);
    notes.push(notesTrash[i]);
    deleteNote(i);
}

function editNote(i) {
    let noteBox = document.getElementById('edit');
    showEdit();
    let title = titles[i];
    let note = notes[i];
    noteBox.innerHTML = `
    <textarea class="titleEdit" id="titleEdit" cols="40" rows="5">${title}</textarea>
    <textarea class="noteEdit" id="noteEdit"cols="40" rows="5">${note}</textarea>
    <a> <img id="notePinEdit" src="./img/green_pin.png" onclick="editedNote(${i})"></a>`;
}

function editedNote(i) {
    let title = document.getElementById('titleEdit').value;
    let note = document.getElementById('noteEdit').value;
    titles[i] = title;
    notes[i] = note;
    hideEdit();
    save();
    renderNotes();
}

function showEdit() {
    document.getElementById('edit').classList.add('editShow');
}

function hideEdit() {
    document.getElementById('edit').classList.remove('editShow');
}