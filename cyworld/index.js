const menuHome = () => {
    document.getElementById('contentFrame').setAttribute('src', './home.html')
    document.getElementById('menuHome').style = "color: #000; background-color: #fff;"
    document.getElementById('menuJukebox').style = "color: #fff; background-color: #298eb5;"
    document.getElementById('menuGame').style = "color: #fff; background-color: #298eb5;"
}

const menuJukebox = () => {
    document.getElementById('contentFrame').setAttribute('src', './jukebox.html')
    document.getElementById('menuHome').style = "color: #fff; background-color: #298eb5;"
    document.getElementById('menuJukebox').style = "color: #000; background-color: #fff;"
    document.getElementById('menuGame').style = "color: #fff; background-color: #298eb5;"
}

const menuGame = () => {
    document.getElementById('contentFrame').setAttribute('src', './game.html')
    document.getElementById('menuHome').style = "color: #fff; background-color: #298eb5;"
    document.getElementById('menuJukebox').style = "color: #fff; background-color: #298eb5;"
    document.getElementById('menuGame').style = "color: #000; background-color: #fff;"
}