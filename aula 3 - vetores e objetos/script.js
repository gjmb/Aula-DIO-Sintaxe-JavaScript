

let vet =["Hello", 1, true , ["true", false, 0]];
//console.log(vet);
//console.log(vet[3][1]);

//vet.forEach(function(item, index){console.log(item, index)});

vet.push("Word");

//vet.forEach(function(item, index){console.log(item, index)});

vet.pop();

//vet.forEach(function(item, index){console.log(item, index)});

vet.shift();

//vet.forEach(function(item, index){console.log(item, index)});

vet.unshift("First");

//vet.forEach(function(item, index){console.log(item, index)});

console.log(vet[3].indexOf("true"));

console.log(vet);
vet.splice(0,3);
console.log(vet);


let newVet = vet[0].slice(2,3);

console.log(newVet);

let obj ={
    string:'string',
    numero:1,
    bool:false,
    objInt:{string:'string 2'},
    f:function(){
        return this.numero;
    }
}


var func = obj.f();

console.log(func);

var {string, numero} = obj;
console.log({string, numero}.string);



