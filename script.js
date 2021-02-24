const joke = document.getElementById('joke');
const button = document.querySelector('.container button');
generateJoke();
button.addEventListener('click', generateJoke)

function generateJoke() {
    const config = {
        headers: {
            "accept": "application/json"
        }
    }
    fetch("https://icanhazdadjoke.com", config)
    .then((res) => res.json())
    .then((data) => joke.innerHTML = data.joke )
    
}