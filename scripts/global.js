let hamburger = document.getElementById('hamburger')
let divs = document.querySelectorAll('#hamburger div')
let menu = document.getElementById('menu')
let menuBtns = document.querySelectorAll('#menu a')

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

divs[0].style.transition = "transform 1s, background-color 1s"
divs[1].style.transition = "transform 1s, background-color 1s"
divs[2].style.transition = "opacity 0.5s"

function exitize() {
    divs[0].style.transform = "translateY(8px) rotate(45deg)"
    divs[0].style.backgroundColor = 'crimson'
    divs[1].style.transform = "rotate(-45deg)"
    divs[1].style.backgroundColor = 'crimson'
    divs[2].style.opacity = '0'
}

function hamburize() {
    divs[0].style.transform = "translateY(0) rotate(0)"
    divs[0].style.backgroundColor = 'black'
    divs[1].style.transform = "rotate(0)"
    divs[1].style.backgroundColor = 'black'
    divs[2].style.opacity = '1'
}

let delay = 0
for (let btn of menuBtns) {
    btn.classList.add('animate__animated', 'animate__fadeInLeft');
    btn.style.animationDelay = delay+'s'
    delay += .25
}