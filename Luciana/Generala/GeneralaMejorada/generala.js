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
var contadorCoincidencia;
var segundaCoincidencia;
var contadorSegundaCoincidencia;
var puntajeFinalRound=0;
var puntajeMasAlto=0;
var escalera1=[1,2,3,4,5];
var escalera2=[2,3,4,5,6];
var escalera3=[1,3,4,5,6];
var hayEscalera=false;//consecutivos
var hayFull=false; //4 iguales
var ordenados=[0,0,0,0,0];
var puntajeMinimo;
var contadorEscalera;


jugar20Veces(); //ejecuta TODO



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
		console.log("Hay generala. Ganaste!")
		hayGenerala=true;
	} else {
		console.log("No hubo generala (5 dados iguales)")
		hayGenerala=false}
	return hayGenerala;
}

function escalera(ordenados,escal){
	contadorEscalera=0;		//funcion para comparar con cada posibilidad 
	for (var i=0; i<5; i++){
		if (ordenados[i] == escal[i]){
			contadorEscalera++;
			if (contadorEscalera==5){
				hayEscalera=true;
			}
		}
	}	
}

function comprobarEscalera(resultadoTiradas){	
	ordenados=[0,0,0,0,0]; //resetea el array
	ordenados=resultadoTiradas.sort();	//acomoda el array de mayor a menor
	escalera(ordenados,escalera1); //compara con posibilidad 1 de escalera
	escalera(ordenados,escalera2); //compara con posibilidad 2 de escalera
	escalera(ordenados,escalera3); //compara con posibilidad 3 de escalera
	if (hayEscalera==true){
		puntaje1=15;
		puntaje2=10;
		console.log("Hay escalera! Ganas 25 puntos.")
	} 
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
				}
				if (hayFull==false){ //si no hay full suma las coincidencias
				puntaje2=(segundaCoincidencia*contadorSegundaCoincidencia); //suma puntos parciales			
					
				} 
			}
		}
	if(contadorCoincidencia+contadorSegundaCoincidencia==5){ //si hay full suma 35.
		hayFull=true;
		console.log("Full! Ganas 35 puntos.")
		puntaje1=10;
		puntaje2=25;
	}
}


function jugarGenerala(){
	contadorCoincidencia=0;
	contadorSegundaCoincidencia=0;
	coincidencia=0;
	segundaCoincidencia=0;
	puntaje1=0;
	puntaje2=0;
	puntajeMinimo=0;
	hayEscalera=false;
	hayFull=false;

	tiradas();		//crea numeros random y los asigna a las tiradas
	comprobarGenerala(resultadoTiradas); //comprueba si hay 5 dados iguales
	comprobarEscalera(resultadoTiradas);
	if (hayGenerala==false && hayEscalera==false && hayFull==false){ //si no hay generala ni combos busca coincidencias para sumar puntos
		recorrida(resultadoTiradas);
			if(contadorCoincidencia==0){//si no hay ninguna coincidencia
				console.log("No hay coincidencia.")
				puntajeMinimo=ordenados[4];
				console.log("Puntos obtenidos por numero mayor:"+puntajeMinimo)	
			}
			else{	//si una o mas coincidencias
			console.log("Coincide el dado:"+coincidencia+" Cantidad de veces:"+contadorCoincidencia)
			if (hayFull==false){console.log("Puntos obtenidos:"+puntaje1)}
				if (contadorSegundaCoincidencia!=0){
				console.log("Tambien coincide el dado:"+segundaCoincidencia+" Cantidad de veces:"+contadorSegundaCoincidencia)
				if (hayFull==false){console.log("Puntos obtenidos:"+puntaje2)}
			}

		}
	}
	puntajeFinalRound=(puntaje1+puntaje2+puntajeMinimo) //suma los puntajes de posibles coincidencias
	console.log("Puntaje total del round: "+puntajeFinalRound);	
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