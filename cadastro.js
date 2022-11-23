document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        const button = document.querySelector(".button");
        button.click();
    }
});

const nome = document.getElementById('nome');
const username = document.getElementById('username');
const email = document.getElementById('email');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const senha = document.getElementById('senha');
const senha2 = document.getElementById('senha2');

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function logar() {
    if(nome.value, username.value, email.value, senha.value, senha2.value == ""){

    }
    else if (nome.value.length < 5, username.value.length > 5, !emailRegex.test(email.value), senha.value != senha2.value){

    }
    else{
        window.location.href = "principal.html"
    }
}

function validarNome() {
    if (nome.value == ""){
    }
    else if (nome.value.length < 5){
        nome.style.border="3px solid #A72608";
    }
    else{
        nome.style.border="3px solid #a7c957";
        var nomeSave = document.querySelector("#nome").value;
        localStorage.setItem('nome', nomeSave);
    }
}

function validarUsername() {
    if (username.value == ""){
    }
    else if (username.value.length < 5){
        username.style.border="3px solid #A72608";
    }
    else{
        username.style.border="3px solid #a7c957";
        var nomeSave = document.querySelector("#username").value;
        localStorage.setItem('username', usernameSave);
    }
}

function validarEmail() {
    if (email.value == "") {
    }
    else if (!emailRegex.test(email.value)){
        email.style.border = "3px solid #A72608"
    }
    else {
        email.style.border = "3px solid #a7c957"
        var emailSave = document.querySelector("#email").value;
        localStorage.setItem('email', emailSave);
    }
}

function validarNumero() {
    if (numero.value == ""){
    }
    else if (numero.value.length >= 11){
        numero.style.border = "3px solid #a7c957";
    }
    else if (numero.value.length <= 10) {
        numero.style.border = "3px solid #A72608";
        var numeroSave = document.querySelector("#numero").value
        localStorage.setItem('numero', numeroSave)
    }
}

function compararSenha() {
    if (senha.value == "" && senha2.value == "") {
    }
    else if (senha.value == senha2.value) {
        senha.style.border = "3px solid #a7c957";
        senha2.style.border = "3px solid #a7c957";
        var senhaSave = document.querySelector("#senha").value;
        localStorage.setItem('senha', senhaSave)
    }
    else {
        senha.style.border = "3px solid #A72608";
        senha2.style.border = "3px solid #A72608";
    }
}



