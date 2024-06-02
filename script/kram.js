<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/x-icon" href="./img/green_pin.png">
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">
    <title>Notizblock</title>
</head>

<body onload="renderNotes()">
    <main>
        <header>
            <input onchange="showBurgerMenu()" id="checkbox" type="checkbox">
            <div class="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul id="menu" class="burgerMenu">
                <a href="index.html">Notizen</a>
                <a href="trash.html">Papierkorb</a>
                <a href="impressum.html">Impressum</a>
                <a href="datenschutz.html">Datenschutz</a>
            </ul>
            <h1 id="index">Nonsticky Notes</h1>
        </header>

        <div class="seperatorHead"></div>

        <div class="edit" id="edit">
        </div>

        <section class="inputSection">
            <div class="inputFields">
                <div class="titleAndPin">
                    <input type="text" id="title" placeholder="Titel">
                    <a> <img id="greenPin" src="./img/green_pin.png" onclick="addNote()"></a>
                </div>
                <textarea id="note" placeholder="Schreibe deine Notiz..."></textarea>
            </div>

        </section>

        <section class="notes" id="notes">

        </section>
    </main>

    <footer>
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
    </footer>
</body>

</html>