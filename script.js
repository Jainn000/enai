const username = document.getElementById("username");
const password = document.getElementById("password");
const wrong = document.getElementById("wrong")

function handleSubmit(event) {
    event.preventDefault(); // cegah reload

    if (username.value == "galih khairul fikri" && password.value == "2006-08-07") {
        window.location.href = "hbd.html"
    } else {
        wrong.innerHTML = "Wrong Password"
    }
}

function btn(event) {
    event.preventDefault(); // cegah reload
    window.location.href = "card.html"
}
