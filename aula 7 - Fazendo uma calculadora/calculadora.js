
function calc(string) {
    let selector = string;
    let result;

    function soma() {
         const v1 = prompt("Informe o primeiro número: ");
        if (v1 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v1))) 
            return alert(`Operação cancelada. ${v1} não é um número.`);
        
        const v2 = prompt("Informe o segundo número: ");
        if (v2 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v2))) 
            return alert(`Operação cancelada. ${v2} não é um número.`);
        

        result = Number(v1) + Number(v2);
        return alert(`${v1} + ${v1} = ${result}`);
    }

    function subtracao() {
        const v1 = prompt("Informe o primeiro número: ");
        if (v1 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v1))) 
            return alert(`Operação cancelada. ${v1} não é um número.`);
        
        const v2 = prompt("Informe o segundo número: ");
        if (v2 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v2))) 
            return alert(`Operação cancelada. ${v2} não é um número.`);
    

        result = Number(v1) - Number(v2);
        return alert(`${v1} - ${v2} = ${result}`);
    }

    function multiplicacao() {
        const v1 = prompt("Informe o primeiro número: ");
        if (v1 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v1))) 
            return alert(`Operação cancelada. ${v1} não é um número.`);
        
        const v2 = prompt("Informe o segundo número: ");
        if (v2 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v2))) 
            return alert(`Operação cancelada. ${v2} não é um número.`);
        


        result = Number(v1) * Number(v2);
        return alert(`${v1} * ${v2} = ${result}`);
    }

    function divisao() {
        const v1 = prompt("Informe o primeiro número: ");
        if (v1 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v1))) 
            return alert(`Operação cancelada. ${v1} não é um número.`);
        
        const v2 = prompt("Informe o segundo número: ");
        if (v2 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v2))) 
            return alert(`Operação cancelada. ${v2} não é um número.`);
        

        if (Number(v2) == 0) {
            return alert("Não é possível dividir por zero.");
        }

        result = Number(v1) / Number(v2);


        return alert(`${v1} / ${v2} = ${result}`);
    }

    function resto() {
        const v1 = prompt("Informe o primeiro número: ");
        if (v1 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v1))) 
            return alert(`Operação cancelada. ${v1} não é um número.`);
        
        const v2 = prompt("Informe o segundo número: ");
        if (v2 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v2))) 
            return alert(`Operação cancelada. ${v2} não é um número.`);
        


        if (Number(v2) == 0) {
            return alert("Não é possível dividir por zero.");
        }

        result = Number(v1) % Number(v2);
        return alert(`${v1} % ${v2} = ${result}`);
    }


    function potenciacao() {
        const v1 = prompt("Informe o primeiro número: ");
        if (v1 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v1))) 
            return alert(`Operação cancelada. ${v1} não é um número.`);
        
        const v2 = prompt("Informe o segundo número: ");
        if (v2 == null)
            return alert("Operação cancelada.");
        else if (isNaN(Number(v2))) 
            return alert(`Operação cancelada. ${v2} não é um número.`);
        

        if (v2 == 0)
            return alert(`${v1} ** ${v2} = 1`);
        result = Number(v1) ** Number(v2)
        alert(`${v1} ** ${v2} = ${result}`);
    }


    switch (selector) {
        case '1':
            soma();
            break;

        case '2':
            subtracao();
            break;

        case '3':
            multiplicacao();
            break;

        case '4':
            divisao();
            break;


        case '5':
            resto();
            break;


        case '6':
            potenciacao();
            break;

        default:
            alert("Operação inválida!");
            break;

    }

}

while (true) {
    let op = prompt("Escolha uma operação para realizar entre dois números: \n 1 - Adição (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/) \n 5 - Resto da divisão (%) \n 6 - Potenciação (**)");
    if (op == null) {
        break;
    } else
        calc(op);

}





