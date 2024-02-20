const usuario =  {
    nome: 'Luis',
    sobrenome: 'Marrocos Pinheiro', 
    idade: 19,
    email: 'luishmp302@gmail.com',
    msg: 'Gostei muito!'
}

const usuario1 = {
    nome: 'Claudio',
    sobrenome: 'Silva', 
    idade: 19,
    email: 'claudinho123@gmail.com',
    msg: 'Não curti muito o atendimento'
}

const usuario2 = {
    nome: 'Thiago',
    sobrenome: 'Mendonça', 
    idade: 22,
    email: 'thiagofera351@gmail.com',
    msg: 'FICOU OTIMO!'
}


function msg(name){
    return `${name.nome}: ${name.msg}`
}

console.log(msg(usuario2))
