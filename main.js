function tocasom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
};
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classList[1];
    const idAudio = `#som_${instrumentos}`; //template string
    console.log(idAudio)

    tecla.onclick = function () {
        tocasom(idAudio);
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