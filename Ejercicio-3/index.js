

const username = document.querySelector("#username")
const password = document.querySelector("#password")
const btn = document.querySelector("#btnSubmit")

btn.addEventListener("click", function (event) {
event.preventDefault()
if (username.value == "pablom" && password.value == "1234") {
    alert("Bienvenido a su sistema")
    location.href = "./welcome-page.html";
} else {
    alert("Usuario o password incorrecto")
    location.href = "./error.html";
}
})