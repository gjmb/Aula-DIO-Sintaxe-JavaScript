
var a ="2";
var b=1;

function f(){
    console.log("Nice!");
}

f();


function fatorial(number){
    if(number>1){
        return number*fatorial(number-1);;
    } else {
        return 1;
    }
    
}

console.log(fatorial(4));

function comparaNumeros(n1,n2){
    return n1==n2 ? `Os números ${n1} e ${n2} são iguais. `:`Os números ${n1} e ${n2} não são iguais. `;
}

function f(n1, n2){
    if(n1==0)
        n1='0';
    else if(n2==0)
        n2='0';

    if(!n1 || !n2 || isNaN(Number(n1)) || isNaN(Number(n2))){
        
            return 'Valores inválidos.';
    }

    const soma=Number(n1)+Number(n2);

    if (soma > 20)
        return comparaNumeros(n1,n2) +'Sua soma é ' + soma + ', que é maior que 10 e maior que 20.'; 
    
    if (soma==20)
        return comparaNumeros(n1,n2) +'Sua soma é ' + soma + ', que é maior que 10 e igual a 20.'; 

    if(soma < 10)
        return comparaNumeros(n1,n2) +'Sua soma é ' + soma + ', que é menor que 10 e menor 20.';
    
        return comparaNumeros(n1,n2) +'Sua soma é ' + soma + ', que é igual a 10 e menor 20.'; 


    
    
}

var a =9;
var b='a';
var r=f(a, b);
console.log(r);