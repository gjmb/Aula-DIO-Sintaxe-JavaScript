
let aluno = {
    nome:'',
    nota:'',
    turma:'',
    newAluno: function (nome, nota, turma){
        this.nome = nome;
        this.nota=nota;
        this.turma=turma;    
    }

};

let alunos=[];

alunos.push(new aluno.newAluno('a1',7,'1'));
alunos.push(new aluno.newAluno('a2',5,'2'));
alunos.push(new aluno.newAluno('a3',2,'3'));

function alunosAprovados(alunos, media){
    aprovados=[];
    for(aluno of alunos){

        const {nota} = aluno;
        if(nota>=media)
            aprovados.push(aluno);
    }    
    return aprovados;
}

aprovados = alunosAprovados(alunos, 5);

for(aluno of aprovados)
    console.log(aluno.nome + ' ' + aluno.nota);

function idade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade+anos} anos de idade.`;
}

const pessoa1={
    nome:'p1',
    idade:20
}

const animal1={
    nome:'a1',
    idade:2,
    raca:'ndf'
}

console.log(idade.call(pessoa1, 30));

console.log(idade.apply(animal1, [30]));