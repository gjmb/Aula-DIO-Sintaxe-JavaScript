//Tipos primitivos

var bool = false;
console.log(bool);

var numero = 4;
console.log(typeof(numero));

var texto = "Hello world!";
console.log(typeof(texto));

var val;
console.log(typeof(val));

val=1;
console.log(typeof(val));
val="Void";
var val;
console.log(typeof(val));

let val2=1;
console.log(typeof(val2));
val2="Void";
console.log(typeof(val2));

const constante=3.14;
console.log(typeof(constante));

var global="global";
console.log(global);

function escopoLocal(){
    let local ="local";
    console.log(local);
}

escopoLocal();
