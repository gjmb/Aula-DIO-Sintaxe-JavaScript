
const classeModoEscuro = "dark-mode";

const botao = document.getElementById("mode-selector");

const h1 = document.getElementById("page-title");

const body = document.getElementsByTagName("body")[0];

const footer =  document.getElementsByTagName("footer")[0];

botao.addEventListener("click", mudaModo);



function mudaModo(){
    mudaClasses();
    mudaTextos();
} 

function mudaClasses(){
    botao.classList.toggle(classeModoEscuro);
    h1.classList.toggle(classeModoEscuro);
    body.classList.toggle(classeModoEscuro);
    footer.classList.toggle(classeModoEscuro);
}

function mudaTextos(){
    const modoClaro = "Light Mode";
    const modoEscuro = "Dark Mode";
    if(body.classList.contains(classeModoEscuro)){
        botao.innerHTML=modoClaro;
        h1.innerHTML=modoEscuro + " ON";
    } else {
        botao.innerHTML=modoEscuro;
        h1.innerHTML=modoClaro + " ON";

    }

}



