
function somaNumeros(vet){
    return vet.reduce(function(prev, current){return prev + current});

}


const numeros = [1,2,3,4];

console.log(somaNumeros(numeros));
