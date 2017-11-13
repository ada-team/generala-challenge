/*Challenge I - Level II
Objetivo: Juego Generala
Pautas: emular el juego de la generala teniendo en cuenta que el jugador podrá lanzar 5
dados, cuyos valores serán aleatorios.
Se deberá guardar en un arreglo los valores obtenidos del juego y el puntaje elegido.
Se considera ganador a quien consiga generala en 20 tiros de dados, de lo contrario el juego
terminará y se mostrará el mayor puntaje obtenido.*/

var arrGen = [];
var arrGen2 = [];
var arrCont = [];
var arrCont2 = [];
var dados, total1, total2;
var c = -1,
    f = -1;
var bot1 = document.getElementById('dado1');
var bot2 = document.getElementById('dado2');
var lista1 = document.getElementById('lista1');
var lista2= document.getElementById('lista2');
var ganar = document.getElementById('gana');

bot1.addEventListener('click', tirar);
bot2.addEventListener('click', tirar2);
ganar.addEventListener('click', ganador);

function tirar() {
    for (var i = 0; i < 5; i++) {
        dados = Math.round(Math.random() * 5) + 1;
        arrCont[i] = dados;
    }
    if (arrCont[0] == arrCont[1] && arrCont[1] == arrCont[2] && arrCont[2] == arrCont[3] && arrCont[3] == arrCont[4]) {
        var li=document.createElement('li');
        li.textContent='Dados: '+arrCont;
        lista1.appendChild(li);
        alert(arrCont+' GENERALA!');
    } else {
        total1 = arrCont[0] + arrCont[1] + arrCont[2] + arrCont[3] + arrCont[4];
        c++;
        if (arrGen.length < 20) {
            arrGen[c] = total1;
            var li=document.createElement('li');
            li.textContent='Dados: '+arrCont+'. Total: '+arrGen[c];
            lista1.appendChild(li);
        }
    }
}


function tirar2() {
    for (var i = 0; i < 5; i++) {
        dados = Math.round(Math.random() * 5) + 1;
        arrCont2[i] = dados;
    }
    if (arrCont2[0] == arrCont2[1] && arrCont2[1] == arrCont2[2] && arrCont2[2] == arrCont2[3] && arrCont2[3] == arrCont2[4]) {
        var li=document.createElement('li');
        li.textContent='Dados: '+arrCont2;
        lista2.appendChild(li);
        alert(arrCont2+' GENERALA!');
    } else {
        total2 = arrCont2[0] + arrCont2[1] + arrCont2[2] + arrCont2[3] + arrCont2[4];
        f++;
        if (arrGen2.length < 20) {
            arrGen2[f] = total2;
            var li=document.createElement('li');
            li.textContent='Dados: '+arrCont2+'. Total: '+arrGen2[f];
            lista2.appendChild(li);
        }
    }
}

function ganador(){
	if (arrGen.length==20&&arrGen2.length==20) {
		for (var i = 0; i < arrGen.length-1; i++) {
			total1+=arrGen[i];
			total2+=arrGen2[i];
		}
		if (total1>total2) {
			alert('GANA JUGADOR 1!! \n Jugador 1: '+total1+'\n Jugador 2: '+total2);
			}else if (total1<total2) {
				alert('GANA JUGADOR 2!! \n Jugador 2: '+total2+'\n Jugador 1: '+total1);
			}else{
				alert('Empate');
		}
	}
}