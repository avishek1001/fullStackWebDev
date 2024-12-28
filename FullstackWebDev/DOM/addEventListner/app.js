const btn = document.querySelector('#btn')
const header = document.querySelector('h1')

header.style = 'color:red'

btn.addEventListener('click', () => {
    alert('Hello World!')
    btn.style.color = 'green';
})

header.addEventListener('click', () => {
    header.style.color = 'green';
})