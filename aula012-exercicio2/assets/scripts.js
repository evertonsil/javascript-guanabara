//Inicializando, capturando a hora atual
const hoje = new Date();

//Chamando função de data
const dataAtual = getDataCompleta(hoje);

function getDataCompleta(hoje) {
    let opcoesFormatacao = { day: 'numeric', month: '2-digit', year: 'numeric' };
    let dataFormatada = hoje.toLocaleDateString('pt-BR', opcoesFormatacao);

    return dataFormatada;
}

function verificaIdade() {
    let dataAtual = new Date;
    let anoAtual = dataAtual.getFullYear();

    //Capturando data de nascimento e sexo
    var dataNasc = document.querySelector('#dataNasc').value;
    var dataNasc = new Date(dataNasc);
    var dataNasc = dataNasc.getFullYear();
    var radioButtons = document.getElementsByName("rdnSexo");
    var sexo = null;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            sexo = radioButtons[i].value;
            break;
        }
    }

    if (isNaN(dataNasc)) {
        alert('Por favor, preencha a data de nascimento!');
    }
    else if (dataNasc > anoAtual) {
        alert('O ano do nascimento não pode ser maior que o ano atual');
    }
    else {
        let idade = anoAtual - dataNasc;
        var txtIdade = document.getElementById("idade");
        var imgIdade = document.getElementById("imgIdade");
        if (sexo == 'm') {
            txtIdade.innerHTML = `É um homem de ${idade} anos`;
            if (idade <= 13) {
                imgIdade.innerHTML = '<img src="imgs/homem-crianca.png" alt="Retrato de uma criança homem">';
            }
            else if (idade > 13 && idade <= 17) {
                imgIdade.innerHTML = '<img src="imgs/homem-adolescente.png" alt="Retrato de um adolescente homem">';
            }
            else if (idade > 17 && idade <= 59) {
                imgIdade.innerHTML = '<img src="imgs/homem-adulto.png" alt="Retrato de um adulto homem">';
            }
            else {
                imgIdade.innerHTML = '<img src="imgs/homem-idoso.png" alt="Retrato de um idoso homem">';
            }
        }
        else if (sexo == 'f') {
            txtIdade.innerHTML = `É uma mulher de ${idade} anos`;
            if (idade <= 13) {
                imgIdade.innerHTML = '<img src="imgs/mulher-crianca.png" alt="Retrato de uma criança mulher">';
            }
            else if (idade > 13 && idade <= 17) {
                imgIdade.innerHTML = '<img src="imgs/mulher-adolescente.png" alt="Retrato de um adolescente mulher">';
            }
            else if (idade > 17 && idade <= 59) {
                imgIdade.innerHTML = '<img src="imgs/mulher-adulta.png" alt="Retrato de um adulto mulher">';
            }
            else {
                imgIdade.innerHTML = '<img src="imgs/mulher-idosa.png" alt="Retrato de um idoso mulher">';
            }
        }
    }

}






