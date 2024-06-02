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

function render() {
    let noteBox = document.getElementById('notes');
    noteBox.innerHTML = ``;
    if (document.getElementById('headline').innerHTML == 'Today´s To Do´s') {
        for (let i = 0; i < titles.length; i++) {
            const title = titles[i];
            const text = texts[i];
            noteBox.innerHTML += newNote(i, noteBox, title, text);
        }
    } 
    else {
        for (let i = 0; i < removetitles.length; i++) {
            const title = removetitles[i];
            const text = removetexts[i];
            noteBox.innerHTML += newNote(i, noteBox, title, text);
        }
    }
}

function newNote(i, noteBox, title, text) {
    return `
    <div class="note">
    <a href="#"><img src="./img/pin.png" alt="Save Pin" id="notePin" ></a>
    <a href="#"><img src="./img/behalter.png" alt="Papierkorb" onclick="removeNote(${i})" id="deleteImg"></a>
    <a href="#"><img src="./img/daten-wiederherstellen.png" alt="Papierkorb" onclick="removeNote(${i})" id="restoreImg"></a>
    <h2 onclick="editNote(${i})">${title}</h2>
    <textarea class="noteText" onclick="editNote(${i})">${text}</textarea>
    </div>
    `
}

function addNote() {
    let titleInput = document.getElementById('title');
    let textInput = document.getElementById('text');

    titles.push(titleInput.value);
    texts.push(textInput.value);

    titleInput.value = '';
    textInput.value = '';

    render();
    save();
}

function load() {
    let titleAstext = localStorage.getItem('titles');
    let textAstext = localStorage.getItem('texts');
    let removetitlesAsText = localStorage.getItem('removetitles');
    let removetextsasText = localStorage.getItem('removetexts');

    if (titleAstext && textAstext && removetitlesAsText && removetextsasText) {
        titles = JSON.parse(titleAstext);
        texts = JSON.parse(textAstext);
        removetitles = JSON.parse(removetitlesAsText);
        removetexts = JSON.parse(removetextsasText);
    }
}

function save() {
    let titleAstext = JSON.stringify(titles);
    let textAstext = JSON.stringify(texts);
    let removetitlesAsText = JSON.stringify(removetitles);
    let removetextsasText = JSON.stringify(removetexts);

    localStorage.setItem('titles', titleAstext);
    localStorage.setItem('texts', textAstext);
    localStorage.setItem('removetitles', removetitlesAsText);
    localStorage.setItem('removetexts', removetextsasText);
}

function removeNote(i) {
    if (document.getElementById('headline').innerHTML === 'Today´s To Do´s') {
        addTrashNote(i);
        titles.splice(i, 1);
        texts.splice(i, 1);
    } else {
        removetitles.splice(i, 1);
        removetexts.splice(i, 1);
    }
    render();
    save();
}

function addTrashNote(i) {
    let deletedTitles = JSON.parse(localStorage.getItem('removetitles')) || [];
    let deletedTexts = JSON.parse(localStorage.getItem('removetexts')) || [];
    deletedTitles.push(titles[i]);
    deletedTexts.push(texts[i]);
    localStorage.setItem('removetitles', JSON.stringify(deletedTitles));
    localStorage.setItem('removetexts', JSON.stringify(deletedTexts));
    // Entferne die gelöschte Notiz aus dem Array
    titles.splice(i, 1);
    texts.splice(i, 1);
    render();
    save();
}


function restore(i) {
    titles.push(removetitles[i]);
    texts.push(removetexts[i]);
    removetitles.splice(i, 1);
    removetexts.splice(i, 1);
    render();
    save();
}

function editNote(i) {
    let noteBox = document.getElementById('edit');
    showEdit();

    let title = titles[i];
    let text = texts[i];

    noteBox.innerHTML = `
    <textarea class="titleEdit" id="titleEdit" cols="40" rows="8">${title}</textarea>
    <textarea class="noteEdit" id="noteEdit" cols="40" rows="8">${text}</textarea>
    <a href="#"><img src="./img/pin.png" alt="Sicherheitsnadel" onclick="editedNote(${i})"></a>
    `;
}

function editedNote(i) {
    let title = document.getElementById('titleEdit').value;
    let note = document.getElementById('noteEdit').value;

    titles[i] = title;
    texts[i] = note;

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

function loadDeletedNotes() {
    let deletedTitles = JSON.parse(localStorage.getItem('removetitles')) || [];
    let deletedTexts = JSON.parse(localStorage.getItem('removetexts')) || [];
    
    // Zeige die gelöschten Notizen an
    for (let i = 0; i < deletedTitles.length; i++) {
        const title = deletedTitles[i];
        const text = deletedTexts[i];
        // Hier kannst du den HTML-Code zum Anzeigen der gelöschten Notiz generieren und einfügen
    }
}

// Rufe die Funktion zum Laden der gelöschten Notizen auf, wenn die Seite geladen wird
window.onload = loadDeletedNotes;

