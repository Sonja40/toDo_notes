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
            <a><img id="notePin" src="./img/pin.png onclick="editNote(§{i})"><a/>
            <a><img id="removeImg" src="./img/glass-container.png onclick="deleteNote(§{i})"
            <h2>${content}</h2>
            <p>${entry}</p>
            </div>
        `;
    }
}

function addNote() {
    let content = document.getElementById('content');
    let entry = document.getElementById('entry');


}