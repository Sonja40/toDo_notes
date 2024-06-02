// Funktion zum Laden der Notizen aus dem Local Storage
function load() {
    if (localStorage.getItem('titles')) {
        titles = JSON.parse(localStorage.getItem('titles'));
        texts = JSON.parse(localStorage.getItem('texts'));
    }
    if (localStorage.getItem('removetitles')) {
        removetitles = JSON.parse(localStorage.getItem('removetitles'));
        removetexts = JSON.parse(localStorage.getItem('removetexts'));
    }
}

// Funktion zum Speichern der Notizen im Local Storage
function save() {
    localStorage.setItem('titles', JSON.stringify(titles));
    localStorage.setItem('texts', JSON.stringify(texts));
    localStorage.setItem('removetitles', JSON.stringify(removetitles));
    localStorage.setItem('removetexts', JSON.stringify(removetexts));
}

// Funktion zum Entfernen einer Notiz und Verschieben in den Papierkorb
function removeNote(i) {
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

// Funktion zum Wiederherstellen einer Notiz aus dem Papierkorb
function restore(i) {
    titles.push(removetitles[i]);
    texts.push(removetexts[i]);
    removetitles.splice(i, 1);
    removetexts.splice(i, 1);
    render();
    save();
}

// Funktion zum Rendern der Notizen
function render() {
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
}

// Funktion zum Erstellen des HTML-Codes für eine neue Notiz
function newNote(i, title, text) {
    return `
    <div class="note">
    <a href="#"><img src="./img/pin.png" alt="Save Pin" class="input-icon"></a>
    <a href="#"><img src="./img/glass-container.png" alt="Papierkorb" onclick="removeNote(${i})" class="input-icon"></a>
    <h2 onclick="editNote(${i})">${title}</h2>
    <textarea class="noteText" onclick="editNote(${i})">${text}</textarea>
    </div>
    `;
}

// Funktion zum Erstellen des HTML-Codes für eine neue Notiz im Papierkorb
function newTrashNote(i, title, text) {
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
