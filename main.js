function tocasompom() {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto=while

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocasompom;
    contador = contador + 1;

    console.log(contador)
};