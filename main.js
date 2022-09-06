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




/*

document.querySelector('.tecla_pom').onclick = tocasompom;


function tocasomclap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocasomclap;

function tocasomtim() {
    document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocasomtim;

function tocasompuff() {
    document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocasompuff;

function tocasomsplash() {
    document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocasomsplash;

function tocasomtoim() {
    document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocasomtoim;

function tocasompsh() {
    document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocasompsh;

function tocasomtic() {
    document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocasomtic;

function tocasomtom() {
    document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocasomtom;
*/