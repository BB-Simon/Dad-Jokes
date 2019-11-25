const res = document.getElementById("res");
const get_joke = document.getElementById("get_joke");

get_joke.addEventListener("click", getJoke);

getJoke();

async function getJoke() {
  const jokeRes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  const joke = await jokeRes.json();
  res.innerHTML = joke.joke;
}
