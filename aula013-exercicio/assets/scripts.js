var numStart = document.querySelector('#start');
var numEnd = document.querySelector('#end');
var range = document.querySelector('#range');
var divResult = document.querySelector('#result');
var btnCalc = document.querySelector('#count');
var msgRange = document.querySelector('#msgRange');

btnCalc.addEventListener("click", function () {

    //Limpa os campos
    clear();

    //Validação se os campos estão preenchidos
    var validInputs = checkInputs(numStart.value, numEnd.value, range.value);

    //Chama função do cálculo caso tudo for válido
    if (validInputs == true) {
        calculateRange(numStart.value, numEnd.value, range.value, divResult);
    }
});

function calculateRange(numStart, numEnd, range, divResult) {
    //Convertendo para int
    numStart = Number(numStart);
    numEnd = Number(numEnd);
    range = Number(range);

    if (range <= 0) {
        range = 1;
        alert('Intervalo inválido, considerando um intervalo de 1 para a contagem!');
    }

    //Acrescentando o range
    if (numStart < numEnd) {
        while (numStart <= numEnd) {
            //\u{1F449} é o unicode do emoji
            divResult.append(`${numStart} \u{1F449} `)
            numStart += range;
        }
        divResult.append(`\u{1F3C1}`);
    }

    //Diminuindo o range
    else if (numStart > numEnd) {
        while (numStart >= numEnd) {
            //\u{1F449} é o unicode do emoji
            divResult.append(`${numStart} \u{1F449} `)
            numStart -= range;
        }
        divResult.append(`\u{1F3C1}`);
    }

}

function checkInputs(numStart, numEnd, range) {
    let errorNumStart = document.querySelector('.errorNumStart');
    let errorNumEnd = document.querySelector('.errorNumEnd');
    let errorRange = document.querySelector('.errorRange');

    if (numStart == "") {
        errorNumStart.innerHTML = 'Por favor insira um número para iniciar a contagem!';
        return false;
    }
    else if (numEnd == "") {
        errorNumEnd.innerHTML = 'Por favor insira um número para encerrar a contagem!';
        return false;
    }
    else if (range == "") {
        errorRange.innerHTML = 'Por favor insira um intervalo para a contagem!';
        return false;
    }
    else {
        return true;
    }
}

function clear() {
    //Limpa as mensagens de erro no clique do botão
    let msgErrors = document.querySelectorAll('.error');
    msgErrors.forEach(function (msgError) {
        msgError.innerHTML = '';
    });

    //Limpa campo de resultado
    let result = document.querySelector('#result');
    result.innerHTML = '';
}