
const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 36

const up = () => {
    fontSize += 5
    p.style.fontSize = fontSize + 'px'
}

const down = () => {
    if(fontSize < 21) return
    fontSize -= 5
    p.style.fontSize = fontSize + 'px'
}

const changeColor = () => {

    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    p.style.color = `rgb(${r}, ${g}, ${b})`
}


sizeUp.addEventListener('click', up)
sizeDown.addEventListener('click', down)
color.addEventListener('click', changeColor)

