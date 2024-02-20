//Inicializando, capturando a hora atual
const hoje = new Date();

//Chamando funções de data e hora atuais e formatadas
const horaAtual = getHoraCompleta(hoje);
const dataAtual = getDataCompleta(hoje);

//Setando hora atual na página
setHoraData(horaAtual, dataAtual);

//Setando imagem de acordo com o horário atual
setImgHora(horaAtual);

function getHoraCompleta(hoje) {
    let horaAtual = hoje.getHours();
    let minutoAtual = hoje.getMinutes();
    let minutoFormatado = (minutoAtual < 10) ? "0" + minutoAtual : minutoAtual;
    let horaCompleta = horaAtual + ':' + minutoFormatado + 'h';

    return horaCompleta;
}

function getDataCompleta(hoje) {
    let opcoesFormatacao = { day: 'numeric', month: '2-digit', year: 'numeric' };
    let dataFormatada = hoje.toLocaleDateString('pt-BR', opcoesFormatacao);

    return dataFormatada;
}

function setHoraData(horaAtual, dataAtual) {
    let txtHoraAtual = document.querySelector('.txtHoraAtual');
    txtHoraAtual.innerHTML = `<p>Agora são <strong>${horaAtual}</strong></p>`;

    let txtDiaAtual = document.querySelector('.txtDiaAtual');
    txtDiaAtual.textContent += ` - ${dataAtual}`;
}

function setImgHora(horaAtual) {
    horaAtual = parseInt(horaAtual, 10);

    let imgHoraAtual = document.querySelector('.imgHoraAtual')
    let bgBody = document.querySelector('body');
    if (horaAtual > 1 && horaAtual <= 12) {
        imgHoraAtual.innerHTML = "<img src='./assets/imgs/amanhecendo.jpg' alt='Cidade durante a manhã' width='100%'>";
        bgBody.style.backgroundColor = "#63ddff";
    }
    else if (horaAtual > 12 && horaAtual <= 18) {
        imgHoraAtual.innerHTML = "<img src='./assets/imgs/tarde.jpg' alt='Cidade durante a tarde' width='100%'>";
        bgBody.style.backgroundColor = "#2562fa";
    }
    else {
        imgHoraAtual.innerHTML = "<img src='./assets/imgs/noite.jpg' alt='cidade durante a noite' width='100%'>";
        bgBody.style.backgroundColor = "#051b52";
    }
}




