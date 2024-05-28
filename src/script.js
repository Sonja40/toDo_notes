function showBurgerMenu() {
    let checkBox = document.getElementById('checkbox');
    if (checkBox.checked == true) {
        document.getElementById('menu').classList.add('show-burgerMenu')
    } else {
        document.getElementById('menu').classList.remove('show-burgerMenu')
    }
}

