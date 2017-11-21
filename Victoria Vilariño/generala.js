
/*Objetivo: Juego Generala
Pautas: emular el juego de la generala teniendo en cuenta que el jugador podrá lanzar 5
dados, cuyos valores serán aleatorios.
Se deberá guardar en un arreglo los valores obtenidos del juego y el puntaje elegido.
Se considera ganador a quien consiga generala en 20 tiros de dados, de lo contrario el juego
terminará y se mostrará el mayor puntaje obtenido.*/

var dado=[1,2,3,4,5,6];
var resultadoTiradas=[];
var contadorC=0;
var Generala=false;
var segundaCoincidencia;
var Final=0;
var Alto=0;



vueltas(); 



function random(dado){ 
	resultado=Math.floor(Math.random()*dado.length)
		return resultado;
}

function tiros(){	
for (var i=0; i<5; i++){
	resultadoTiradas[i]=dado[random(dado)];
}
console.log("Salieron los dados: ",resultadoTiradas);
}

function comprobarGenerala(resultadoTiradas){
	if (resultadoTiradas[0]==resultadoTiradas[1] && resultadoTiradas[0]==resultadoTiradas[2] && resultadoTiradas[0]==resultadoTiradas[3] && resultadoTiradas[0]==resultadoTiradas[4]){
		console.log("Ganaste! felicitaciones!")
		Generala=true;
	} else {
		console.log("Lo sentimos! perdiste!")
		Generala=false}
	return Generala;
}

function recorrida(resultadoTiradas){ 

	for (var i=0; i<5; i++){		
		for(var j=4; j>=0; j--){
			if (resultadoTiradas[i]==[resultadoTiradas[j]] && i!=j){	
				coincidencia=resultadoTiradas[i];	
				contadorC=2;
				for (var n=0; n<5; n++){	
					if (resultadoTiradas[n]==coincidencia && n!=i && n!=j){
						contadorC++;	
					}
				}
				p1=(coincidencia*contadorC);	
			}
		}
	}

	

	for (var i=0; i<5; i++){
		for(var j=4; j>=0; j--){
			if (resultadoTiradas[i]==[resultadoTiradas[j]] && i!=j && resultadoTiradas[i]!=coincidencia){
				segundaCoincidencia=resultadoTiradas[i];
				contadorSegundaCoincidencia=2;
				for (var n=0; n<5; n++){	
					if (resultadoTiradas[n]==segundaCoincidencia && n!=i && n!=j){
						contadorSegundaCoincidencia++;							
					}
				}
				p2=(segundaCoincidencia*contadorSegundaCoincidencia); 
			}
		}
	}
}


function jugarGenerala(){
	contadorCoincidencia=0;
	contadorSegundaCoincidencia=0;
	p1=0;
	p2=0;
	tiros();		
	comprobarGenerala(resultadoTiradas); 
	if (Generala==false){ 
		recorrida(resultadoTiradas);
			if(contadorCoincidencia==0){
				console.log("No hay coincidencia entre los dados. Puntos obtenidos:0");	
			}
			else{	
			console.log("coincide el dado:",coincidencia,"Cantidad:",contadorCoincidencia," Puntos obtenidos:",p1);
				if (contadorSegundaCoincidencia!=0){
				console.log("tambien coincide el dado:",segundaCoincidencia," Cantidad:",contadorSegundaCoincidencia," Puntos obtenidos:",p2);
			}

		}
	}
	Final=(p1+p2) 
	console.log("puntaje total: ",Final);	
}


function vueltas(){	
	for(var i=1; i<20 && Generala==false; i++){
		console.log("Ronda: ",i);
		
		jugarGenerala(); 
		if(Final>Alto){
			Alto=Final;
		}
	
	}
	console.log("Puntaje mas alto durante la partida:",Alto);
}