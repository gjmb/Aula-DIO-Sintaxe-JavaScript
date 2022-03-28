
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


/*Exercicio: Fazer uma função que recebe dois números e diz se eles são iguais, > ou < que 10 e > ou < que 20 */

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
var r=f();
console.log(r);


/*Exercicio: verifica se palavra é palindromo */

function verificaPalindromo1(p1){
    if(!p1)
        return `Valores Inválidos.`
    
    return p1.split("").reverse().join("")==p1 ? `É um palindromo.` : `Não é um palindromo.`;
}

console.log(verificaPalindromo1("anilin"));

function verificaPalindromo2(p1){
    if(!p1)
        return `Valores Inválidos.`
    let leng = p1.length-1;
    let palindromo=true;
    for (let index = 0; index < p1.length/2; index++) {
        if(p1[index]==p1[leng]){
            leng--;
            continue;
        } else {
            palindromo=false;
            break;
        }
    }
   
    if(palindromo)
        return `É um palindromo.`        
    else
        return `Não é um palindromo.`
}

console.log(verificaPalindromo2("anilina"));

/*Exercicio: substitui elementos pares de um vetor por zero */

let ar = [0,1,2,3,4,5,6,7,8];

function substituiPares(vet){
    if(!ar || vet==0)
        return -1;

    for (let index = 0; index < vet.length; index++) {
        if(vet[index]%2===0)
            vet[index]=0;        
    }

    return 1;
}

console.log(substituiPares(ar));
console.log(substituiPares([]));

console.log(ar);

var obj ={
    chave: 6
}

