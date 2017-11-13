/*Challenge I - Level II
Objetivo: Juego Generala
Pautas: emular el juego de la generala teniendo en cuenta que el 
jugador podrá lanzar 5 dados, cuyos valores serán aleatorios.
Se deberá guardar en un arreglo los valores obtenidos
 del juego y el puntaje elegido.
Se considera ganador a quien consiga generala en 20 
tiros de dados, de lo contrario el juego terminará y
 se mostrará el mayor puntaje obtenido*/


//var dado = [1,2,3,4,5,6];
/*var tiro1=[];
var i=0;
while(i<5){
	var a = Math.round((Math.random()*10));
		if(a>0 && a<7){
		tiro1.push(a);
		i++;
		}
}
var jugada = tiro1;
console.log("Tu jugada es: ", jugada);


for (p=jugada.length-1;p>0; p--){
	for(var i =0; i<p; i++){
		if(jugada[i]>jugada[p]){
			swap=jugada[p];
			jugada[p]=jugada[i];
			jugada[i]=swap;
				
		}
	}
}
var jugadaO=jugada;
console.log("Tu jugada ordenada es: ",jugadaO);


function Generala(){
if(jugadaO[0] == jugadaO[jugadaO.length-1]){
	console.log("Ganaste es GENERALA", jugadaO);
}else{
	console.log("No es generala");
}
}

Generala();*/


var jugadaOrdenada =[2,3,4,5,6];
var escalera1 = [1,2,3,4,5];
var escalera2 = [2,3,4,5,6];
var esEscalera =false;



	for(var r=0; r<jugadaOrdenada.length;r++){	
		if(jugadaOrdenada[0] != jugadaOrdenada[r]){
		console.log(jugadaOrdenada);
		for ( var esc=0 ; esc<jugadaOrdenada.length ; esc++){		
			if(jugadaOrdenada[esc] == escalera1[esc]){
			 return true;
			} 
		console.log("Ganaste escalera(1) ", jugadaOrdenada);
		}


	}
}


		/*

		for ( var esc=0 ; esc<jugadaOrdenada.length ; esc++){
			if(jugadaOrdenada[esc] == escalera2[esc]){
			
			} 
			console.log("Ganaste escalera(2) ", jugadaOrdenada);
					}
		
	}

*/




/*var tiro1 =[ 6, 3, 3, 5, 2 ];

var swap;
var p;
var q;
var igual1 =[];
var tiro2 =[];
var igual2 =[];
var cont=0;
var conTotal =0;
console.log(tiro1);
for( p = tiro1.length-1; p>0; p--){
	for(q=0; q<p; q++ ){
		if(tiro1[q]==tiro1[p]){
			var iguales = tiro1[p];
			igual1.push(iguales);
			console.log( "los iguales" ,igual1,"inicio nuevamente");
		} else if (tiro1[q] != tiro1[p]){	
		var dist= tiro1[q];
		tiro2.push(dist);
		console.log( "los distintos" ,tiro2, "inicio nuevamenteII");
		}
	}//var noIgual= tiro1.shift();	
}
*/
/*while(p<tiro1.length){
	while(q < tiro1.length-1){
		if(tiro1[q]==tiro1[p]){
			var iguales = tiro1[p];
			igual1.push(iguales);
			console.log( "los iguales" ,igual1,"inicio nuevamente");
			q++;
		} else if (tiro1[p] != tiro1[q]){	
		var dist= tiro1[p];
		tiro2.push(dist);
		console.log( "los distintos" ,tiro2, "inicio nuevamenteII");
		q++;
		}*/