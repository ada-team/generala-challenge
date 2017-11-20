/*
Objetivo: Juego del ahorcado
Pautas: El juego se compondrá de 30 palabras, separadas en 3 niveles de complejidad, dada
por la cantidad de letras que la componen.
• Baja: entre 5 y 6 letras
• Media: entre 6 y 8 letras
• Alta: mas de 9 letras
El juego se dividirá en partidas de 12 palabras, 4 para cada nivel, dentro de la partida.
Las palabras no podrán repetirse dentro de la partida y deberán seleccionarse en forma
aleatoria.
Para pasar de nivel, deberá tener un puntaje mínimo. Siguiendo la siguiente regla:
Nivel 1: 75 puntos
Nivel 2: 150 puntos
Condiciones para acumular puntaje:
Cada letra tendrá un valor de 5 puntos, lo cual determinará el valor de la palabra, cada letra
arriesgada descontará ese mismo valor de la palabra.
Ejemplo:
Carpincho -> valor de la palabra: 45 = 9 x 5
Arriesga A e I, luego adivina, puntaje obtenido: 35 puntos
*/


var baja = ["perro", "vivir", "lider", "comida"];
var media = ["libertad", "cacerola", "cubierto", "densitud"];
var alta = ["acolchado", "obsoletos", "camuflado", "carpintero"];
var arrFinal = [4]
var palabras = [];
var palabra;
var puntajeBaja = 75;
var puntajeMedia = 150;
var repite = [];
var numRep = [];
var puntos;
var puntosObtenidos = 0;


jugarTodo();


function random() {
    var arrTemporal = []
    for (var i = 0; i < 4; i++) {
        arrTemporal[i] = i;
    }
    for (var i = 0; i < 4; i++) {
        arrFinal[i] = arrTemporal.splice(Math.floor(Math.random() * (4 - i)), 1)[0];
    }
    console.log(arrFinal)
    return arrFinal
}

function asignarPalabra(categoria) {
    random();
    for (var i = 0; i < 4; i++) {
        palabras[i] = categoria[arrFinal[i]];
    }
    console.log("PALABRAS RONDA:");
    console.log(palabras[0], palabras[1], palabras[2], palabras[3]);
    return palabras;
}

function jugarTanda(palabras, categoria, puntaje, puntosObtenidos) {
    asignarPalabra(categoria);
    puntosObtenidos = 0;
    for (var i = 0; i < 4; i++) {
        palabra = palabras[i];
        alert("Tanda " + (i + 1) + " (HINT:" + palabras[i] + ")");
        comprobarLetraRepetida(palabra);
        puntosObtenidos = puntosObtenidos + comprobarPalabra(palabra);

    }
    alert("PUNTAJE TOTAL DE LA RONDA:" + puntosObtenidos + " Puntos para pasar de ronda:" + puntaje)
    if (puntosObtenidos >= puntaje) {
        return true
    } else {
        return false
    }
}

function jugarTodo() {

    alert("NIVEL 1");
    if (jugarTanda(palabras, baja, puntajeBaja, puntosObtenidos) == true) {
        alert("PASAS A NIVEL 2");
        if (jugarTanda(palabras, media, puntajeMedia, puntosObtenidos) == true) {
            alert("PASAS A NIVEL 3");
            jugarTanda(palabras, alta, puntajeMedia, puntosObtenidos);
            alert("FELICITACIONES! GANASTE!");
        }
    }

}

function comprobarLetraRepetida(palabra) {
    repite = [false, false, false, false, false, false, false, false, false, false];
    numRep = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < palabra.length; i++) {
        for (var j = 0; j < palabra.length; j++) {
            if (palabra[j] == palabra[i] && j != i) {
                numRep[i] = 2;
                repite[i] = true;
                for (var p = 0; p < palabra.length; p++) {
                    if (palabra[i] == palabra[p] && p != i && p != j) {
                        numRep[i]++;
                    }
                }
            }
        }
    }
}

function comprobarPalabra(palabra) {
    var letrasUsadas = [];
    var usada = false;
    restantes = palabra.length;
    puntos = (palabra.length) * 5;
    do {
        letra = prompt("Ingrese una letra. Palabra de " + palabra.length + " letras. Puntos:" + puntos);
        usada = false;
        for (var i = 0; i < letrasUsadas.length; i++) {
            if (letra == letrasUsadas[i]) {
                alert("Letra ya utilizada");
                usada = true;
            }
        }
        if (usada == false) {
            letrasUsadas.push(letra);
            console.log("LETRAS USADAS:" + letrasUsadas);
            var seEncontro = false;
            var cantRepite = 0;
            for (var n = 0; n < palabra.length; n++) {
                if (letra == palabra[n]) {
                    puntos = puntos + 5;
                    seEncontro = true;
                    restantes--;
                    if (repite[n] == true) {
                        cantRepite = numRep[n];
                    }
                }
            }
            if (seEncontro == false) {
                puntos = puntos - 5;
                alert("No se encontro en la palabra.");

            } else {
                if (restantes > 0) {
                    if (cantRepite > 0) {
                        alert("BIEN!La letra " + letra + " se encuentra " + cantRepite + " veces. Faltan " + restantes + " letra/s.")
                    } else {
                        alert("BIEN!La letra " + letra + " es parte de la palabra. Faltan " + restantes + " letra/s.")
                    }
                } else {
                    alert("MUY BIEN. Formaste la palabra!")
                }
            }
        }
    }
    while (puntos > 0 && restantes > 0);
    return puntos;
}