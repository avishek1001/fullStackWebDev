const imgSrc = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


const container = document.querySelector('#container')

for (let i = 1; i < 152; i++){
    const pokemon = document.createElement('div')
    
    const newImg = document.createElement('img')
    newImg.src = `${imgSrc}${i}.png`
    const label = document.createElement('span')
    label.innerText = `#${i}`
    pokemon.appendChild(newImg)
    pokemon.appendChild(label)

    container.appendChild(pokemon)

}