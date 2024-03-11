var btnCalcular = document.querySelector('#btnCalcularTabuada');
var num = document.querySelector('#num');

//Chama função no clique no botão, para validar se o campo está preenchido
btnCalcular.addEventListener("click", function () {
    document.querySelector('#result').innerHTML == '';
    //Chama função do cálcula, caso existir um número válido
    if (validaCampo(num.value) == true) {
        calculaTabuada(num.value);
    }
});



//Limpa a classe de erro sempre que houver interação com o input
num.addEventListener("change", function () {
    num.classList.remove('is-invalid');
})

function validaCampo(num) {
    if (num == "" || num == null) {
        document.querySelector('#num').classList.add('is-invalid');
        return false;
    }
    else {
        return true;
    }
}

function calculaTabuada(num) {
    for (let i = 0; i <= 10; i++) {
        let resultado = document.querySelector('#result');
        resultado.innerHTML += `<p> ${num} X ${i} = ${num * i} </p>`;
    }
}

function limpar() {
    document.querySelector('#num').value = '';
    document.querySelector('#result').innerHTML = '';
}