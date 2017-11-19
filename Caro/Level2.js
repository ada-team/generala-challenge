/*Challenge I - Level II
Objetivo: Juego Generala
Pautas: emular el juego de la generala teniendo en cuenta que el jugador podrá lanzar 5
dados, cuyos valores serán aleatorios.
Se deberá guardar en un arreglo los valores obtenidos del juego y el puntaje elegido.
Se considera ganador a quien consiga generala en 20 tiros de dados, de lo contrario el juego
terminará y se mostrará el mayor puntaje obtenido.*/

var jugador1 = [];
var jugador2 = [];
jugador1.arrGen = []; jugador1.arrCont = []; jugador1.total = 0; jugador1.letra = -1; jugador1.poker = 0; 
jugador1.num6 = 0; jugador1.num5 = 0; jugador1.num4 = 0; jugador1.num3 = 0; jugador1.escalera = 0; jugador1.full = 0;
jugador1.num2 = 0; jugador1.num1 = 0; jugador1.lista = document.getElementById('lista1'); 
jugador2.arrGen = []; jugador2.arrCont = []; jugador2.total = 0; jugador2.letra = -1; jugador2.escalera = 0;
jugador2.full = 0; jugador2.poker = 0; jugador2.num6 = 0; jugador2.num5 = 0; jugador2.num4 = 0; jugador2.num3 = 0;
jugador2.num2 = 0; jugador2.num1 = 0; jugador2.lista = document.getElementById('lista2');
var dados;
var bot1 = document.getElementById('dado1');
var bot2 = document.getElementById('dado2');
var ganar = document.getElementById('gana');

bot1.addEventListener('click', function() {
    tirar(jugador1);
});
bot2.addEventListener('click', function() {
    tirar(jugador2);
});
ganar.addEventListener('click', ganador);

function tirar(jugador) {
    for (var i = 0; i < 5; i++) {
        dados = Math.round(Math.random() * 5) + 1;
        jugador.arrCont[i] = dados;
        jugador.arrCont.sort();
    }
    if (jugador.arrCont[0] == jugador.arrCont[1] && jugador.arrCont[1] == jugador.arrCont[2] &&
        jugador.arrCont[2] == jugador.arrCont[3] && jugador.arrCont[3] == jugador.arrCont[4]) {
        var li = document.createElement('li');
        li.textContent = 'Dados: ' + jugador.arrCont;
        jugador.lista.appendChild(li);
        alert(jugador.arrCont + ' GENERALA!\n Para volver a empezar presione F5');
    } else {
        jugador.letra++;
        if (jugador.poker<1 && (jugador.arrCont[0] == jugador.arrCont[3] || jugador.arrCont[1] == jugador.arrCont[4])) {
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: 45 - POKER';
            jugador.arrGen[jugador.letra] = 45;
            jugador.lista.appendChild(li);
            alert(jugador.arrCont + ' POKER!');
            jugador.poker++;
        } else if (jugador.full<1 && (jugador.arrCont[0] == jugador.arrCont[2] && jugador.arrCont[3] == jugador.arrCont[4] ||
            jugador.arrCont[0] == jugador.arrCont[1] && jugador.arrCont[2] == jugador.arrCont[4])) {
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: 35 - FULL';
            jugador.arrGen[jugador.letra] = 45;
            jugador.lista.appendChild(li);
            alert(jugador.arrCont + ' FULL!');
            jugador.full++;
        } else if (jugador.escalera<1 && (jugador.arrCont[0] == 1 && jugador.arrCont[1] == 2 && jugador.arrCont[2] == 3 
            && jugador.arrCont[3] == 4 && jugador.arrCont[4] == 5 || jugador.arrCont[0] == 2 &&
            jugador.arrCont[1] == 3 && jugador.arrCont[2] == 4 && jugador.arrCont[3] == 5 && jugador.arrCont[4] == 6)) {
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: 25 - ESCALERA';
            jugador.arrGen[jugador.letra] = 25;
            jugador.lista.appendChild(li);
            alert(jugador.arrCont + ' ESCALERA!');
            jugador.escalera++;
        } else if (jugador.arrCont[0] == jugador.arrCont[2] && jugador.arrCont[3] != jugador.arrCont[4]) {
            jugador.total = jugador.arrCont[0]+jugador.arrCont[1]+jugador.arrCont[2];
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: ' + jugador.total;
            jugador.arrGen[jugador.letra] = jugador.total;
            jugador.lista.appendChild(li);
        } else if ( jugador.arrCont[0] != jugador.arrCont[1] && jugador.arrCont[2] == jugador.arrCont[4]) {
            jugador.total = jugador.arrCont[2]+jugador.arrCont[3]+jugador.arrCont[4];
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: ' + jugador.total;
            jugador.arrGen[jugador.letra] = jugador.total;
            jugador.lista.appendChild(li);
        } else if (jugador.arrCont[1] == jugador.arrCont[3] && jugador.arrCont[0] != jugador.arrCont[1]) {
            jugador.total = jugador.arrCont[1]+jugador.arrCont[2]+jugador.arrCont[3];
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: ' + jugador.total;
            jugador.arrGen[jugador.letra] = jugador.total;
            jugador.lista.appendChild(li);
        } else if (jugador.arrCont[3]==jugador.arrCont[4]) {
            jugador.total = jugador.arrCont[3]+jugador.arrCont[4];
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: ' + jugador.total;
            jugador.arrGen[jugador.letra] = jugador.total;
            jugador.lista.appendChild(li);
        } else if (jugador.arrCont[2]==jugador.arrCont[3]) {
            jugador.total = jugador.arrCont[2]+jugador.arrCont[3];
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: ' + jugador.total;
            jugador.arrGen[jugador.letra] = jugador.total;
            jugador.lista.appendChild(li);
        } else if (jugador.arrCont[1]==jugador.arrCont[2]) {
            jugador.total = jugador.arrCont[1]+jugador.arrCont[2];
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: ' + jugador.total;
            jugador.arrGen[jugador.letra] = jugador.total;
            jugador.lista.appendChild(li);
        } else if (jugador.arrCont[0]==jugador.arrCont[1]) {
            jugador.total = jugador.arrCont[0]+jugador.arrCont[1];
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: ' + jugador.total;
            jugador.arrGen[jugador.letra] = jugador.total;
            jugador.lista.appendChild(li);
        } else {
            jugador.total = 0;
            jugador.arrGen[jugador.letra] = jugador.total;
            var li = document.createElement('li');
            li.textContent = 'Dados: ' + jugador.arrCont + '. Total: ' + jugador.total;
            jugador.lista.appendChild(li);
        }
    }
}

function ganador() {
    for (var i = 0; i < jugador1.arrGen.length - 1; i++) {
        jugador1.total += jugador1.arrGen[i];
        jugador2.total += jugador2.arrGen[i];
    }
    if (jugador1.total > jugador2.total) {
        alert('GANA JUGADOR 1!! \n Jugador 1: ' + jugador1.total + '\n Jugador 2: ' + jugador2.total);
    } else if (jugador1.total < jugador2.total) {
        alert('GANA JUGADOR 2!! \n Jugador 2: ' + jugador2.total + '\n Jugador 1: ' + jugador1.total);
    } else {
        alert('Empate');
    }
}