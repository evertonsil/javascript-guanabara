var btnAdd = document.querySelector('#btnAdd');
var inpNum = document.querySelector('#num');
var btnFinalizar = document.querySelector('#btnFinalizar');
var numeros = [];

btnAdd.addEventListener('click', function () {
    var validacao = validaCampo(num, numeros);

    if (validacao == true) {
        adicionaNumero(num.value)
    }
});

inpNum.addEventListener('change', function () {
    inpNum.classList.remove('is-invalid');
    document.querySelector('#invalidNum').style.display = 'none';
    document.querySelector('#errorDuplicate').style.display = 'none';
});

function validaCampo(num, numeros) {
    if (num.value == '' || num.value == undefined || num.value < 1 || num.value > 100) {
        num.classList.add('is-invalid');
        document.querySelector('#invalidNum').style.display = 'block';
        return false;
    }
    if (numeros.indexOf(num.value) !== -1) {
        num.classList.add('is-invalid');
        document.querySelector('#errorDuplicate').style.display = 'block';
        return false;
    }
    else
        return true;
}

function adicionaNumero(num) {
    numeros.push(num);
    let valor = document.querySelector('#num');
    let listaNum = document.querySelector('#listaNumeros');
    valor.value = '';
    valor.focus();

    listaNum.append(`${num} `);

    return true;
}

btnFinalizar.addEventListener('click', function () {
    var qtd = qtdNumeros(numeros);
    var menor = menorNumero(numeros);
    var maior = maiorNumero(numeros);
    var soma = somaNumeros(numeros);
    var media = mediaNumeros(numeros);

    atualizaCampos(qtd, menor, maior, soma, media);
});

function qtdNumeros(numeros) {
    console.log('Quantidade: ' + numeros.length);

    return numeros.length;
}

function maiorNumero(numeros) {
    //Ordena o array do menor para o maior
    numeros = numeros.sort(function (a, b) {
        return a - b;
    });
    //Pega o último elemento do array
    let maiorNumero = numeros[numeros.length - 1];
    console.log('Maior: ' + maiorNumero);
    return maiorNumero;
}

function menorNumero(numeros) {
    //Ordena o array do menor para o maior
    numeros = numeros.sort(function (a, b) {
        return a - b;
    });
    //Pega o primeiro elemento do array
    let menorNumero = numeros[0];
    console.log('Menor: ' + menorNumero);
    return menorNumero;
}

function somaNumeros(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        let num = parseInt(numeros[i]);
        soma += num[i];
    }
    console.log('Soma: ' + soma);
    return soma;
}

function mediaNumeros(numeros) {
    let soma = 0;
    let media = 0;
    let totalNum = numeros.length;

    for (let i = 0; i < numeros.length; i++) {
        let num = parseInt(numeros[i]);
        soma += num[i];
    }

    media = soma / totalNum;
    console.log('Média: ' + media);
    return media;
}

function limpar() {
    location.reload();
}

function atualizaCampos(qtd, menor, maior, soma, media) {
    let resultado = document.querySelector('#listaNumeros');

    resultado.innerHTML += `<p>A quantidade de números é igual a: ${qtd}</p>`;
    resultado.innerHTML += `<p>O menor número é: ${menor}</p>`;
    resultado.innerHTML += `<p>O maiors número é: ${maior}</p>`;
    resultado.innerHTML += `<p>A soma dos números é igual a: ${soma}</p>`;
    resultado.innerHTML += `<p>A média dos números é igual a: ${media}</p>`;
}
