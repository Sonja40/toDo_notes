function showBurgerMenu() {
    let checkBox = document.getElementById('checkbox');
    if (checkBox.checked == true) {
        document.getElementById('menu').classList.add('show-burgerMenu')
    } else {
        document.getElementById('menu').classList.remove('show-burgerMenu')
    }
}

let content = [];
let entry = [];
let removeContent = [];
let removeEntry = [];
load();

function load() {
    let contentastext = localStorage.getItem('content');
    let entryasText = localStorage.getItem('entry');
    let removeContentasText = localStorage.getItem('removeContent');
    let removeEntryasText = localStorage.getItem('removeEntry');
    if (contentastext && entryasText && removeContentasText && removeEntryasText) {
        content.JSON.parse(contentastext);
        entry.JSON.parse(entryasText);
        removeContent.JSON.parse(removeContentasText);
        removeEntry.JSON.parse(removeEntryasText);
    }
}

function save() {
    let contentastext = JSON.stringify(content);
    let entryasText = JSON.stringify(entry);
    let removeContentasText = JSON.stringify(removeContent);
    let removeEntryasText =JSON.stringify(removeEntry);
    localStorage.setItem('content', contentastext);
    localStorage.setItem('entry', entryasText);
    localStorage.setItem('removeContent', removeContentasText);
    localStorage.setItem('removeEntry', removeEntryasText);
}

function render() {
    let basket = document.getElementById('addNote');
    basket.innerHTML = '';
    
    for (i = 0; i < content.length; i++ ) {
        const content = content[i];
        const entry = entry[i];

        basket.innerHTML += `
            <div class="note">
            <p> <b>Neue Liste: </b>${content}</p>
            <p> <b>Neue Notiz: </b>${entry}</p>
            <button onclick="addNote()" id="add-todo">
                <img src="../img/pin.png" alt="save Pin" class="input-icon trash">
                </button>
            </div>
        `;
    }
}

function renderTrashBin() {
    let basket = document.getElementById('trash');
    basket.innerHTML = ``;

    for (let i = 0; i < removeContent.length; i++) {
        const content = removeContent[i];
        const entry = removeEntry[i];

        basket.innerHTML += `
        <div class="note">
            <p> <b>Neue Liste: </b>${content}</p>
            <p> <b>Neue Notiz: </b>${entry}</p>
            <button onclick="addNote()" id="add-todo">
                <img src="../img/pin.png" alt="save Pin" class="input-icon trash">
                </button>
        </div>
        <div class="input-icon">
            <button onclick="openTrash()">
            <img src="../img/behalter.png" alt="Trash-bin" class="input-icon">
            </button>
            <button onclick="addNote()" id="add-todo">
            <img src="../img/pin.png" alt="save Pin" class="input-icon trash">
            </button>
        </div>
        `;
    }
}


function addNOte() {
    let content = document.getElementById('todo-input');
    let entry = document.getElementById('note-text');

    if (content.value == '' & entry.value == '') {
        alert("Bitte einen neue Liste und neue Notiz engeben!");
    }
    else if (content.value == '') {
        alert('Bitte neue Liste anlegen!') ;
    }
    else if (entry.value == '') {
        alert('Bitte Notizfeld ausfüllen!')
    }
    else {
        content.push(content.value);
        entry.push(entry.value);
        render();
        save();
    }
}