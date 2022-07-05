
const maca ={
    value:2
}

const laranja ={
    value:3
}

function mapComThis(vet, thisArg){
    return vet.map(function(item){ return item*this.value}, thisArg);
}

const numeros =[1,2];

console.log(mapComThis(numeros,maca));

console.log(mapComThis(numeros,laranja));


function mapSemThis(vet){
    return vet.map((item)=>item*2);
}

console.log(mapSemThis(numeros));

console.log(mapSemThis(numeros));