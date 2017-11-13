/////////JUEGO GENERALA///////////
//Pautas: emular el juego de la generala teniendo en cuenta que el jugador podrá lanzar 5 dados,
// cuyos valores seran aleatorios.
//Se debera guardar en un arreglo los valores obtenidos del juego y el puntaje elegido.
//Se considera ganador a quien consiga generala en 20 tiros de dados, de lo contrario el juego
//terminara y se mostrara el mayor puntaje obtenido.

//variable total con los puntajes obtenidos(resultado de la concatenacion de los array de las categorias)
var puntajeObtenido= [];

//uso un for para representar los 20 tiros obligatorios que se jugaran, a menos que se haga generala

for (var tiro = 0; tiro < 20; tiro++) {
	

//declaro la variable "jugada" para representar cada tiro aleatorio de los 5 dados
var jugada =[];
for (var i = 0; i < 6; i++) {
	jugada[i]= Math.floor(Math.random() * 6 + 1) ;        
}

console.log(jugada);



}
console.log(puntajeObtenido);



// una vez que obtengo los numeros aleatorios de mi tirada de dados, los ordenos para empezar a agruparlos segun
//las reglas del juego.

var ultimoElemento =jugada.length-1;
var intercambio;
for (var ultimoElemento = jugada.length-1; ultimoElemento > 0; ultimoElemento--) {
	for (var i = 0; i < ultimoElemento; i++) {
		if (jugada[i]>jugada[ultimoElemento]) {
			intercambio=jugada[ultimoElemento];
			jugada[ultimoElemento]=jugada[i];
			jugada[i]=intercambio;
		}	

	}	//console.log(jugada);

}	console.log(jugada);


//apicando las reglas del juego: ver si  es o no generala

	if (jugada[0] == jugada[jugada.length-1]) {
        console.log("es generala! ganaste el juego.", jugada);
	} //consultado si los dados dan poker:
		else if(
		jugada[0]== jugada[jugada.length-2] ||
		jugada[1] == jugada[jugada.length-1]){
		console.log("hiciste Poker, suma X puntos");
		}
		//else if( ){


		//}



var dado1_=[];
var dado_2=[];
var dado_3=[];
var dado_4=[];
var dado_5=[];
var dado_6=[];
var escaleraPuntos=[];
var generala= [];
var full= [];
var poker=[];
var jugada=[1,3,3,2,5];
var escalera1=[1,2,3,4,5];
var escalera2=[2,3,4,5,6];

//function escalera(){
/*	if(jugada[] == escalera1[] || jugada[] == escalera2[]){
		//console.log("es escalera")
		escaleraPuntos.push(25);	
		console.log("es escalera", escaleraPuntos);
	}
		console.log(escaleraPuntos);

//}
var a = [1,2,3,5];
var b = [4,7,5,5];

*//*
var jugada=[1,4,5,5,5];
var escalera1=[1,2,3,4,5];
var escalera2=[2,3,4,5,6];
var hizoEscalera= false
console.log(jugada);
/*
for(i=0;i<jugada.length;i++){
    for(j=0;j<escalera1.length;j++){
       if(escalera1[j]===jugada[i]){
hizoEscalera=true;
   }

   }

 }
 console.log(hizoEscalera);


for(i=0;j<jugada.length;i++){
       if(escalera1[j]===jugada[i]){
   escaleraPuntos.push(25);	
       }

   }
//escalera();
*/
