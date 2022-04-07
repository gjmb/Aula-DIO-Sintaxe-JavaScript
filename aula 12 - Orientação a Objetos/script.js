class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia=agencia;
        this.numero=numero;
        this.tipo=tipo;
        this._saldo=0; //coloca-se o _ para que get e set possam ser apenas o nome
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(val){
        this._saldo=val;
    }

    sacar(valor) {
        if(this._saldo>=valor){
            this._saldo-=valor;
            return 'saque realizado com sucesso.'
        }
        else
            return 'Operação negada. Saldo insuficiente.'        
    }

    depositar(valor){
        this._saldo+=valor;
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero, 'Corrente');
        this._cartaoCredito= cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    } 

    set cartaoCredito(valor){
        this._cartaoCredito=valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero, 'Poupanca', saldo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero, 'Universitaria', saldo);
    }

    sacar(valor){
        if(valor<=500)
            super.sacar(valor);
        else
            return 'Operação negada. Valor acima de R$ 500,00'
    }
}