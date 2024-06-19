let hamburger = document.getElementById('hamburger')
let divs = document.querySelectorAll('#hamburger div')
let menu = document.getElementById('menu')

hamburger.onclick = function () {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'
        hamburger.style.position = 'absolute'
        hamburize()
    } else {
        menu.style.display = 'flex'
        hamburger.style.position = 'fixed'
        exitize()
    }
}

divs[0].style.transition = "transform 1s"
divs[1].style.transition = "transform 1s"
divs[2].style.transition = "opacity 0.5s"

function exitize() {
    divs[0].style.transform = "translateY(8px) rotate(45deg)"
    divs[1].style.transform = "rotate(-45deg)"
    divs[2].style.opacity = '0'
}

function hamburize() {
    divs[0].style.transform = "translateY(0) rotate(0)"
    divs[1].style.transform = "rotate(0)"
    divs[2].style.opacity = '1'
}