const player1 = document.querySelector('#p1')
const player2 = document.querySelector('#p2')
const reset = document.querySelector('#reset')

let p1Score = document.querySelector('#p1Score');
let p2Score = document.querySelector('#p2Score');

const select = document.querySelector('#range')


player1.addEventListener('click', function(){
    p1Score.innerText = Number(p1Score.innerText) + 1

    if(p1Score.innerText == select.value){
        p1Score.style.color = 'green'
        p2Score.style.color = 'red'
    }
})

player2.addEventListener('click', function(){
    p2Score.innerText = Number(p2Score.innerText) + 1
    
    if(p2Score.innerText == select.value){
        p2Score.style.color = 'green'
        p1Score.style.color = 'red'
    }
})

reset.addEventListener('click', function(){
    p1Score.innerText = 0
    p2Score.innerText = 0
    p1Score.style.color = 'black'
    p2Score.style.color = 'black'
})