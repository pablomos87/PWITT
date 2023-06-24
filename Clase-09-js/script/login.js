let user = prompt("Por favor, ingrese su usuario: ")
let pass = prompt("Ingrese su password: ") 
console.log(user);
console.log(pass);

if (user == "Pepe" && pass == "1234") {
    alert("Bienvenido a su sistema")
    location.href = "../pages/admin.html"
} else {
    alert("Usuario o password incorrecto")
    location.href = "../pages/error.html"

}
