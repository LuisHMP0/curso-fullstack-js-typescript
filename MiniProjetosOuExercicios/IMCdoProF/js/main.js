const form = document.querySelector('#formulario');//oegando o formulario

form.addEventListener('submit', function (e) { // Criando o evento de enviar 
    e.preventDefault(); // não deixa o formulário ser enviado
    const inputPeso = e.target.querySelector('#peso')// Pegando o peso no input 
    const inputAltura = e.target.querySelector('#altura')// Pegando a altura no input
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) { // Se não for verdadeiro 
        setResultado('Peso inválido,', false); // retorna peso inválido
        return; 
    }

    if (!altura) { //mesma coisa
        setResultado('Altura inválida', false);
        return; 
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1 ', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];   
    if (imc >= 34.9) return nivel[4];   
    if (imc >= 29.9) return nivel[3];   
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];  
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2); // formata o número para ter apenas duas casas decimais
}

function criaParagrafo() {
    const p = document.createElement('p'); //Criando elemento no HTML pelo JS
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#res');
    resultado.innerHTML = ''; // Deixando vazio

    const p = criaParagrafo();
    p.innerHTML = msg; //colocando "msg" no paragrafo
    resultado.appendChild(p); // colocando o paragrafo na div resultado
}
