function IMC(pes, alt) { // Calculo do IMC
    let alt2 = alt ** 2;
    let imc = pes / alt2;
    return imc;
}

function valid(pes, alt) { // Verificando se há um número em ambos os inputs
    if (isNaN(pes) || isNaN(alt) || pes <= 0 || alt <= 0) {
        return false;
    } else {
        return true;
    }
}

function calcular() {
    let peso = document.getElementById('peso');
    let altura = document.getElementById('altura');
    
    let pesoValor = Number(peso.value);
    let alturaValor = Number(altura.value);

    if (valid(pesoValor, alturaValor)) {
        let res = document.getElementById('res');
        res.innerHTML = `Seu IMC é `
        
    } else {
        alert('Coloque um número válido.');
    }
}
