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
    localStorage.setItem('entry', entryasTextastext);
    localStorage.setItem('removeContent', removeContentasText);
    localStorage.setItem('removeEntry', removeEntryasText);
}