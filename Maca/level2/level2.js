/*
Pautas: emular el juego de la generala teniendo en cuenta que el jugador podrá lanzar 5
dados, cuyos valores serán aleatorios.
Se deberá guardar en un arreglo los valores obtenidos del juego y el puntaje elegido.
Se considera ganador a quien consiga generala en 20 tiros de dados, de lo contrario el juego
terminará y se mostrará el mayor puntaje obtenido

GENERALA
Categorías 
Para calcular el puntaje correspondiente a una categoría de números del 1 al 6, se deben sumar
los números iguales. Por ejemplo, si un jugador, tirara tres dados con el número 6, se sumará,
6+6+6=18, este resultado se anotará en la casilla correspondiente al número 6. Si son tres 1 
se debe anotar 3 al 1, si hay dos 6 se debe anotar 12 al 6.

1: se coloca el número que dé la suma de 1 obtenidos.
2: se coloca el número que dé la suma de 2 obtenidos.
3: se coloca el número que dé la suma de 3 obtenidos.
4: se coloca el número que dé la suma de 4 obtenidos.
5: se coloca el número que dé la suma de 5 obtenidos.
6: se coloca el número que dé la suma de 6 obtenidos.
Escalera: 25 puntos si es servida, 20 si fue armada. Se forma con una progresión de números. 
Hay tres posibilidades: 1-2-3-4-5, 2-3-4-5-6 y 3-4-5-6-1 ("escalera al as").
Full: 35 puntos si es servido o 30 puntos si es armado. Se forma con dos grupos de dados 
iguales, uno de tres y otro de dos dados.
Póker: 45 puntos si es servido o 40 puntos si es armado. Se forma con cuatro dados iguales.
Generala: 50 puntos si se logra formar cinco números iguales en dos o tres tiros.

*/
/*
Paso a paso:
1. Tiro los dados hasta 20 veces.
    a. Tiro 5 dados aleatorios. Los dados obtenidos se ordenan de menor a mayor

    2. Hay números repetidos?

        a. Si. Pueden ser:
    
            -- Sencillo:  
                -- Uno repetido. Hasta 3 veces. Ej: [6, 6, 6, 5, 4] 
                -- Dos repetidos. Ej: [6, 6, 5, 5, 4]
                Puntos: Numero repetido * cantidad de veces 

            -- Full: Dos númeos repetidos, 3 veces y 2 veces. Ej: [6, 6, 6, 5, 5,]
                Puntos: 35 puntos

            -- Póker: Un número cuatro veces repetido. Ej: [6, 6, 6, 6, 5]
                Puntos: 45 puntos

            -- Generala: Un número cinco veces repetido. Ej: [6, 6, 6, 6, 6]
                Puntos: 50 puntos, 
                Gana autómáticamente.

        b. No. Puede ser escalera: Progresión de números. Sólo hay tres posibilidades.
            -- [1, 2, 3, 4, 5] 
            -- [2, 3, 4, 5, 6]
            -- [1, 3, 4, 5, 6]
            Puntos: 25 puntos.


    3. Sumo los puntos obtenidos

*/

/*
Pseudocódigo:

durante 20 tiros 
while(tiros < 20 || no es generala){
    function tiro dados y los ordeno();
    if (tienen números repetidos) {
        Switch (Cuántos números están repetidos) {
            case sólo 1 número repetido: 
                Cuántas veces se repite ese número?
                    5:
                    -- Generala, 50 puntos parciales. Y GANA.

                    4:    
                    -- Póker, 45 puntos parciales. 

                    2 o 3:
                    -- Sencillo. (nroRepetido*cantidadDeVeces) puntos parciales.

            case 2 números repetidos: 

                3 y 2 veces cada uno:
                -- Full. 35 puntos parciales.
            }
        
        } else if ( es escalera){
             25 puntos parciales
    
        } else {
            tira de nuevo.
        }
        
    }
}


*/



var puntajeParcial = 0;
var puntajeTotal = 0;
var tiros = 0;
var misDados;
// crear mi array de dados random:
var misDados = tiroDados();



while (tiros < 3) {
    misDados = ordenoDados(tiroDados())
    console.log("Tiro los dados y saco: " + misDados);

    console.log("Pruebo contadorRepetidos() " + tieneRepetidos(misDados));

    tiros++;
}

function tiroDados() {
    var misDados = [];
    for (var i = 0; i < 5; i++) {
        misDados[i] = Math.floor((Math.random() * 6) + 1);
    }
    return misDados;
}

function ordenoDados(array) {
    var swap;
    for (var pivot = array.length - 1; pivot > 0; pivot--) {
        for (var i = 0; i < pivot; i++) {
            if (array[i] > array[pivot]) {
                swap = array[pivot];
                array[pivot] = array[i];
                array[i] = swap;
            }
        }
    }
    return array;
}

function tieneRepetidos(misDados) {

    var repetidos = [];
    var cantRepetidos = 0;
    var puntos;

    if (misDados[0] === misDados[4]) { //si es generala
        generalaPuntos();
    } else if (misDados[0] === misDados[3] ||
        misDados[1] === misDados[4]) { // si es poker
        pokerPuntos();
    } else { // si no es generala ni poker
        for (var i = 0; i < misDados.length; i++) {
            for (var j = i + 1; j <= misDados.length; j++) {

                if (misDados[i] === misDados[j] && misDados[i] === misDados[j + 1]) {
                    repetidos.push(misDados[i], misDados[j], misDados[j + 1]);

                    cantRepetidos++;
                    console.log('Se agregó el dado ' + misDados[i] +
                        ' y  hay ' + cantRepetidos + ' número/s repetido/s');
                    /*
                    Acá puedo resolverlo con un continue; o con un break; probar.
                     */
                } else if (misDados[i] === misDados[j]) {
                    repetidos.push(misDados[i], misDados[j]);
                    cantRepetidos++;
                    console.log('Se agregó el dado ' + misDados[i] +
                        ' y  hay ' + cantRepetidos + ' número/s repetido/s');
                } 
            }
        }

        return repetidos
    }
}

function generalaPuntos() {
    var puntos = 50;
    console.log('Es generala, campeonx! Ganaste.');
    return puntos;
}

function pokerPuntos() {
    var puntos = 45;
    console.log('Es poker, capx');
    return puntos;
}