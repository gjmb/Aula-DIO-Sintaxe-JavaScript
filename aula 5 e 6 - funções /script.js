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

var vet = ["a", "b"];

vet.forEach(element => {
   console.log(element); 
});

