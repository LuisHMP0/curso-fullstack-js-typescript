/* 
Operadores de comparação
> maior que 
>= maior que ou igual a 
< menor que
<= menor que ou igual a 
== igualdade (valor) RECOMENDADO NÃO USAR 
=== igualdade estrita (valor e tipo)
!= diferente (valor) RECOMENDADO NÃO USAR 
!== diferente estrita (valor e tipo)  
*/

/* 
Operadores Lógicos 
&& -> AND -> E -> Todas as expressões precisam se verdadeiras para retornar true 
|| -> OR -> OU -> Só é falso se todos forem falsos 
! -> NOT -> NÃO -> Todas as expressões precisam ser falsas para retornar false 

EX PRATICO: 
*/
const usuario1 = 'Luis'
const senha1 = '123'

function cadastro(){ 
    const usuario2 = prompt('Coloque seu usuário')
    const senha2 = prompt('Coloque sua senha: ')

    if (usuario1 === usuario2 && senha1 === senha2){ 
        console.log('Bem vindo, Luis!')
    } else { 
        console.log('Usuário ou senha incorreta.')
    }
}

cadastro() // [ERRADO]