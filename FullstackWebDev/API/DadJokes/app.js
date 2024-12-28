
const jokes = async () => {
    try {
        
        const apiData = await axios.get('https://icanhazdadjoke.com', {headers: {'Accept' : 'application/json'}});
        const theJoke = apiData.data.joke;
        console.log(theJoke);
    } catch (e) {
        console.log("Error!!!", e)
    }
}