

const username = document.querySelector("#username")
const password = document.querySelector("#password")
const btn = document.querySelector("#btnSubmit")

btn.addEventListener("click", function (event) {
event.preventDefault()
if (username.value == "pablom" && password.value == "1234") {
    alert("Bienvenido a su sistema")
    location.href = "./welcome-page.html"
} else {
    alert("Usuario o password incorrecto")
    location.href = "./error.html"
}
})



/* 


{
    username.classList.add("errorField")
  }
  if (password.value == "") {
    password.classList.add("errorField")
  }
})

username.addEventListener("keyup", function () {
  username.classList.remove("errorField")
})
password.addEventListener("keyup", function () {
  password.classList.remove("errorField")
})

 *//* function login (){
    let user =  "pablom";
    let pass =  "1234";
    let veces = 0;
    
    
        var username = element.getElementsById("username").value;
        var password = element.getElementsById("password").value;
        if (username == user && password == pass) {
            alertzZ("Welcome"); veces=3;
        } else {
            alert("Usernam or password incorrect");
            veces = veces + 1;//incremento el numero de intentos
            if(veces == 3) {
                alert('Acceso restringido');
                alert('Saliendo de la pagina .....');
            }
        }
    
    } */