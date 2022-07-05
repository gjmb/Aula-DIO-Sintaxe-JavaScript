

var numeroAtualWrapper = document.getElementById('numeroAtual');
var numeroAtual = 0;

document.getElementsByName('subtrair')[0].addEventListener('click', function () {
    if (numeroAtual > -10)
        numeroAtual = numeroAtual - 1;

    if (numeroAtual < 0)
        numeroAtualWrapper.style.color = "red";

    if (numeroAtual >= -10)
        numeroAtualWrapper.innerHTML = numeroAtual;


});


document.getElementsByName('somar')[0].addEventListener('click', function () {
    if (numeroAtual < 10)
        numeroAtual = numeroAtual + 1;
        
    if (numeroAtual >= 0)
        numeroAtualWrapper.style.color = "black";

    if (numeroAtual <= 10)
        numeroAtualWrapper.innerHTML = numeroAtual;

});


