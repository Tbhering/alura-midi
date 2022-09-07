function tocasom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto=while

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumentos}`;
    console.log(idAudio)

    tecla.onclick = function () {
        tocasom(idAudio);
    }
    contador = contador + 1;

    console.log(contador)
};
