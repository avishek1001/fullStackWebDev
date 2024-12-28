
// fetch("https://swapi.dev/api/people/1/")
// .then((res) => {
//     return res.json()
// })
// .then((data) => {
//     console.log(data)
// })

const jsonData = async (n) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/${n}/`)
        const data = await res.json()
        console.log(data)
    } catch (e) {
        console.log('error!! ', e)
    }
}