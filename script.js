console.log("Welcome to the Lobster Club Improv Comedy Show!");

const options = {
    method: 'GET', // specify this is a GET request, not a PUT or POST
    headers: {
        "Accept": "application/json" // request the response in JSON format
    }
}

async function getJoke() {
    try {
        response = await fetch("https://icanhazdadjoke.com/", options).then(response => response.json())
        document.getElementById("joke-text").innerText = response.joke
        document.getElementById("joke-pic").src = document.getElementById("joke-pic").src
    }
    catch (error) {
        console.log(error.message)
    }
}
let btn = document.getElementById("joke-gen");
btn.addEventListener("click", getJoke)


getJoke();