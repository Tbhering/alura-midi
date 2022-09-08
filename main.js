function tocasom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        elemento === null;
        console.log('Elemento não encontrado');
    };
}
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classList[1];
    const idAudio = `#som_${instrumentos}`; //template string
    console.log(idAudio)

    tecla.onclick = function () {
        tocasom(idAudio);
    }
    tecla.onkeydown = function (e) {
        console.log(e.code === 'Space' || e.code === 'Enter')
        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa')
        }

    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
};

/*while (contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classList[1];
    const idAudio = `#som_${instrumentos}`; //template string
    console.log(idAudio)
    tecla.onclick = function () {
        tocasom(idAudio);}
    contador = contador + 1;

    console.log(contador)
};*/