class Mazo {
    constructor(barajaPicas, barajaCorazones, barajaTreboles, barajaDiamantes) {
        this.picas = barajaPicas;
        this.corazones = barajaCorazones;
        this.diamantes = barajaDiamantes;
        this.treboles = barajaTreboles;
    }
}

class Baraja extends Mazo {
    constructor(cartas, palo) {
        super();
        this.cartas = cartas;
        this.palo = palo;
    }
}

const cartas = {
    1: 'A',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: 'J',
    12: 'Q',
    13: 'K',
};
const palos = {
    corazones: '♥',
    diamantes: '♦',
    treboles: '♣',
    picas: '♠',
};
const barajaPicas = new Baraja(cartas, palos.picas);
const barajaCorazones = new Baraja(cartas, palos.corazones);
const barajaTreboles = new Baraja(cartas, palos.treboles);
const barajaDiamantes = new Baraja(cartas, palos.diamantes);
const mazo = new Mazo(
    barajaPicas,
    barajaCorazones,
    barajaTreboles,
    barajaDiamantes
);
let divNumero = 1;
let parrafoNumero = 1;
function pedirCarta() {
    const numeroDeCartaAleatorio = cartas[aleatorio(1, 13)];
    const paloDeCartaAleatorio = Object.values(palos)[aleatorio(0, 3)];
    let nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('card');
    nuevoDiv.classList.add(`${paloDeCartaAleatorio}`);
    nuevoDiv.setAttribute('id', `down-div-${divNumero}`);
    document.querySelector('#down-container').appendChild(nuevoDiv);

    let nuevoParrafo = document.createElement('p');
    nuevoParrafo.setAttribute('id', `carta-${parrafoNumero}`);
    nuevoParrafo.classList.add('card-number');
    nuevoParrafo.textContent = `${numeroDeCartaAleatorio}`;
    document.querySelector(`#down-div-${divNumero}`).appendChild(nuevoParrafo);
    divNumero++;
    console.log(numeroDeCartaAleatorio);
    console.log(paloDeCartaAleatorio);
    console.log(divNumero);
}
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
