function showBurgerMenu() {
    let checkBox = document.getElementById('checkbox');
    if (checkBox.checked == true) {
        document.getElementById('menu').classList.add('show-burgerMenu');
    } else {
        document.getElementById('menu').classList.remove('show-burgerMenu');
    }
}

let titles = [];
let texts = [];
let removetitles = [];
let removetexts = [];
load();

function load() {
    titles = JSON.parse(localStorage.getItem('titles')) || [];
    texts = JSON.parse(localStorage.getItem('texts')) || [];
    removetitles = JSON.parse(localStorage.getItem('removetitles')) || [];
    removetexts = JSON.parse(localStorage.getItem('removetexts')) || [];
}

function save() {
    localStorage.setItem('titles', JSON.stringify(titles));
    localStorage.setItem('texts', JSON.stringify(texts));
    localStorage.setItem('removetitles', JSON.stringify(removetitles));
    localStorage.setItem('removetexts', JSON.stringify(removetexts));
}

function render() {
    let noteBox = document.getElementById('notes');
    noteBox.innerHTML = '';
    if (document.getElementById('headline').innerHTML == 'Today´s To Do´s') {
        for (let i = 0; i < titles.length; i++) {
            noteBox.innerHTML += newNote(i, titles[i], texts[i], false);
        }
    } 
    else {
        for (let i = 0; i < removetitles.length; i++) {
            noteBox.innerHTML += newTrashNote(i, removetitles[i], removetexts[i], true);
        }
    }
}

function newNote(i, title, text, isTrash) {
    return `
    <div class="note">
    <a href="#">
        <img src="./img/pin.png" alt="Pin" id="notePin">
    </a>
    <a href="#"> 
        <img src="./img/behalter.png" alt="Papierkorb" id="deleteImg" onclick="removeNote(${i})">
    </a>
    <a href="#">
        <img src="./img/daten-wiederherstellen.png" alt="Zurück" id="restoreImg" class="img" onclick="restore(${i})">
    </a>
    <h2>${title}</h2>
    <textarea class="noteText" readonly>${text}</textarea>
    </div>
    `;
}

function newTrashNote(i, title, text) {
    return `
    <div class="note">
    <a href="#">
        <img src="./img/pin.png" alt="Pin" id="notePin">
    </a>
    <a href="#"> 
        <img src="./img/behalter.png" alt="Papierkorb" id="deleteImg" onclick="deleteForever(${i})">
    </a>
    <a href="#">
        <img src="./img/daten-wiederherstellen.png" alt="Zurück" id="restoreImg" onclick="restore(${i})">
    </a>
    <h2>${title}</h2>
    <textarea class="noteText" readonly>${text}</textarea>
    </div>
    `;
}

function addNote() {
    let title = document.getElementById('title');
    let text = document.getElementById('text');

    titles.push(title.value);
    texts.push(text.value);
    title.value = '';
    text.value = '';

    render();
    save();
}

function removeNote(i) {
    removetitles.push(titles[i]);
    removetexts.push(texts[i]);
    titles.splice(i, 1);
    texts.splice(i, 1);

    render();
    save();
}

function deleteForever(i) {
    removetitles.splice(i, 1);
    removetexts.splice(i, 1);

    save();
    render();
}

function restore(i) {
    titles.push(removetitles[i]);
    texts.push(removetexts[i]);

    deleteForever(i);
}

function editNote(i, isTrash) {
    let noteBox = document.getElementById('edit');
    showEdit();

    let title = isTrash ? removetitles[i] : titles[i];
    let text = isTrash ? removetexts[i] : texts[i];

    noteBox.innerHTML = `
    <textarea class="titleEdit" id="titleEdit" cols="40" rows="8">${title}</textarea>
    <textarea class="noteEdit" id="noteEdit" cols="40" rows="8">${text}</textarea>
    <a href="#"><img src="./img/pin.png" alt="Sicherheitsnadel" onclick="editedNote(${i}, ${isTrash})"></a>
    `;
}

function editedNote(i, isTrash) {
    let title = document.getElementById('titleEdit').value;
    let note = document.getElementById('noteEdit').value;
    if (isTrash) {
        removetexts[i] = texts;
        removetitles[i] = titles;
    } else {
        titles[i] = title;
        texts[i] = note
    }
    hideEdit();
    save();
    render();
}

function showEdit() {
    document.getElementById('edit').classList.add('editShow');
}

function hideEdit() {
    document.getElementById('edit').classList.remove('editShow');
}

load();
render();