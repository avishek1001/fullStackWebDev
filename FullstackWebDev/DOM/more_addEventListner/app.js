const buttons = document.querySelectorAll('button')

function randColor(){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
}

for(let b of buttons){
    b.style.width = '70px'
    b.style.height = '70px'

    b.addEventListener('click', () => {
        b.style.backgroundColor = randColor()
    })
}