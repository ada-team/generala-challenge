/*Objetivo: Juego Generala
Pautas: emular el juego de la generala teniendo en cuenta que el jugador podrá lanzar 5
dados, cuyos valores serán aleatorios.
Se deberá guardar en un arreglo los valores obtenidos del juego y el puntaje elegido.
Se considera ganador a quien consiga generala en 20 tiros de dados, de lo contrario el juego
terminará y se mostrará el mayor puntaje obtenido.*/

var dado=[1,2,3,4,5,6];
var resultadoRandom;
var resultadoTiradas=[];
var hayGenerala=false;
var coincidencia;
var contadorCoincidencia=0;
var segundaCoincidencia;
var contadorSegundaCoincidencia=0;
var puntajeFinalRound=0;
var puntajeMasAlto=0;
var jugarHastaGanar=0;


while (hayGenerala==false){
jugar20Veces(); //ejecuta TODO
jugarHastaGanar++;
console.log("Veces necesarias para ganar:"+(jugarHastaGanar*20))


function random(dado){ 	//crea numero random
	resultadoRandom=Math.floor(Math.random()*dado.length)
		return resultadoRandom;
}

function tiradas(){	//asigna un numero random por cada dado
for (var i=0; i<5; i++){
	resultadoTiradas[i]=dado[random(dado)];
}
console.log("Dados obtenidos: "+resultadoTiradas);
}

function comprobarGenerala(resultadoTiradas){ //comprueba si hay generala o no
	if (resultadoTiradas[0]==resultadoTiradas[1] && resultadoTiradas[0]==resultadoTiradas[2] && resultadoTiradas[0]==resultadoTiradas[3] && resultadoTiradas[0]==resultadoTiradas[4]){
		console.log("Hay generala. Ganaste!<-----------")
		hayGenerala=true;
	} else {
		console.log("No hubo generala (5 dados iguales)")
		hayGenerala=false}
	return hayGenerala;
}

function recorrida(resultadoTiradas){ //busca coincidencias

	for (var i=0; i<5; i++){		//primer posible coincidencia
		for(var j=4; j>=0; j--){
			if (resultadoTiradas[i]==[resultadoTiradas[j]] && i!=j){	//si coinciden 2
				coincidencia=resultadoTiradas[i];	
				contadorCoincidencia=2;
				for (var n=0; n<5; n++){	//busca si ese numero coincide mas veces y las suma al contador
					if (resultadoTiradas[n]==coincidencia && n!=i && n!=j){
						contadorCoincidencia++;	
					}
				}
				puntaje1=(coincidencia*contadorCoincidencia);	//suma puntos parciales
			}
		}
	}

	

	for (var i=0; i<5; i++){  //segunda posible coincidencia
		for(var j=4; j>=0; j--){
			if (resultadoTiradas[i]==[resultadoTiradas[j]] && i!=j && resultadoTiradas[i]!=coincidencia){ //si coinciden 2 y son distintos a la primer coincidencia
				segundaCoincidencia=resultadoTiradas[i];
				contadorSegundaCoincidencia=2;
				for (var n=0; n<5; n++){	//busca si ese numero coincide mas veces y las suma al contador
					if (resultadoTiradas[n]==segundaCoincidencia && n!=i && n!=j){
						contadorSegundaCoincidencia++;							
					}
				}
				puntaje2=(segundaCoincidencia*contadorSegundaCoincidencia); //suma puntos parciales
			}
		}
	}
}


function jugarGenerala(){
	contadorCoincidencia=0;
	contadorSegundaCoincidencia=0;
	puntaje1=0;
	puntaje2=0;
	tiradas();		//crea numeros random y los asigna a las tiradas
	comprobarGenerala(resultadoTiradas); //comprueba si hay 5 dados iguales
	if (hayGenerala==false){ //si no hay generala busca coincidencias para sumar puntos
		recorrida(resultadoTiradas);
			if(contadorCoincidencia==0){//si no hay ninguna coincidencia
				console.log("No hay coincidencia. Puntos obtenidos:0")	
			}
			else{	//si una o mas coincidencias
			console.log("coincide el dado:"+coincidencia+" Cantidad de veces:"+contadorCoincidencia+" Puntos obtenidos:"+puntaje1)
				if (contadorSegundaCoincidencia!=0){
				console.log("tambien coincide el dado:"+segundaCoincidencia+" Cantidad de veces:"+contadorSegundaCoincidencia+" Puntos obtenidos:"+puntaje2)
			}

		}
	}
	puntajeFinalRound=(puntaje1+puntaje2) //suma los puntajes de posibles coincidencias
	console.log("puntaje total del round: "+puntajeFinalRound);	
}


function jugar20Veces(){	//ejecuta la generala 20 veces y muestra el puntaje mas alto
	for(var i=0; i<20 && hayGenerala==false; i++){
		console.log("ROUND "+i);
		console.log("_____________________________________")
		jugarGenerala(); //ejecuta el juego (todas las funciones agrupadas)
		if(puntajeFinalRound>puntajeMasAlto){
			puntajeMasAlto=puntajeFinalRound;
		}
		console.log("_____________________________________")	
	}
	console.log("Puntaje mas alto de las 20 rondas:"+puntajeMasAlto);
}

}