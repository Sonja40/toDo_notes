function showBurgerMenu() {
    let checkBox = document.getElementById('checkbox');
    if (checkBox.checked == true) {
        document.getElementById('menu').classList.add('show-burgerMenu')
    } else {
        document.getElementById('menu').classList.remove('show-burgerMenu')
    }
}

let contentInput = [];
let entryInput = [];
let removeContentInput= [];
let removeEntryInput = [];


function render() {
    let contentInput = JSON.parse(localStorage.getItem('todo-input') || '[]');
    let entryInput = JSON.parse(localStorage.getItem('note-text') || '[]');
    let newNotes = document.getElementById("newNotes");
    newNotes.innerHTML = "";
    
    for (i = 0; i < entry.length; i++ ) {
        newNotes.innerHTML += `
        <div class="new-container">
            <div class="note">
            <textarea class="title" readonly>${contentInput[i]}</textarea>
            <textarea class="text" readonly>${entryInput[i]}</textarea>
            <button onclick="removeNote(${i})">
                <img src="../img/pin.png" alt="save Pin" class="input-icon trash">
            </button>
        </div>`;
    }
}


function addNote() {
    let content = document.getElementById('todo-input').value;
    let entry = document.getElementById('note-text').value;

    if (contentInput.trim() || entryInput.trim()) {
        alert("Bitte Notizfeld ausfüllen!");
        return;
    }

    let { contentInput, entryInput } = load();

    contentInput.push(content);
    entryInput.push(entry);
   
    save(contentInput, entryInput);
    document.getElementById('todo-input').value = '';
    document.getElementById('note-text').value = '';

    render()
    
}

function save(contentInput, entryInput) {
    localStorage.setItem('contentInput', JSON.stringify(contentInput));
    localStorage.setItem('entryInput', JSON.stringify(entryInput));
}


function load() {
    let contentInput = JSON.parse(localStorage.getItem('todo-input') || '[]');
    let entryInput = JSON.parse(localStorage.getItem('note-text') || '[]');

    return { contentInput, entryInput};
}

function renderNewNoteElement(i) {
    return `
    <div class="newNoteContainer">
            <div class="note">
                <textarea class="title" readonly>${contentInput[i]}</textarea>
                <textarea class="text" readonly>${entryInput[i]}</textarea>
                <button onclick="removeNote(${i})">
                    <img src="../img/pin.png" alt="save Pin" class="input-icon trash">
                </button>
            </div>
        </div>
    `
}


function removeNote(i) {
    let contentInput = JSON.parse(localStorage.getItem('contentInput'));
    let entryInput = JSON.parse(localStorage.getItem('entryInput'));
    let removeContentInput = JSON.parse(localStorage.getItem('removecontentInput') || '[]');
    let removeEntryInput = JSON.parse(localStorage.getItem('removeEntryInput') || '[]');

  
    removeContentInput.push(contentInput[i]);
    removeEntryInput.push(entryInput[i]);

  
    contentInput.splice(i, 1);
    entryInput.splice(i, 1);

  
    localStorage.setItem('titles', JSON.stringify(contentInput));
    localStorage.setItem('texts', JSON.stringify(entryInput));
    localStorage.setItem('deletedTitles', JSON.stringify(removeContentInput));
    localStorage.setItem('deletedTexts', JSON.stringify(removeEntryInput));

  
    render();
}