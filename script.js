
let email = document.getElementById('email');
let txt_email = email.value;
let senha = document.getElementById('password');
let txt_senha = senha.value;
let txt_remember = document.getElementById('checkbox');
const button = document.getElementById('button');

button.addEventListener('click', imprimir);

function imprimir(){
    let email = document.getElementById('email');
    let txt_email = email.value;
    let senha = document.getElementById('password');
    let txt_senha = senha.value;
    let txt_remember = document.getElementById('checkbox');
    let isremember = txt_remember.checked;
    console.log(`${txt_email}`)
    console.log(`${txt_senha}`)
    if (isremember === true) {
        console.log(`Lembrar senha? - Sim!`)
    }else{
        console.log(`Lembrar senha? - Não!`)
    }
    
}

