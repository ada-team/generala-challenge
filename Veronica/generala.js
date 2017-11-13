var i=0;
var tiro =[];
var categoria1 = [];
var categoria2 = [];
var categoria3 = [];
var categoria4 = [];
var categoria5 = [];
var categoria6 = [];
var Escalera = [];
var Full = [];
var Poker = [];
var Generala = [];
var ultimaPosicion = tiro.length-1;

/*Sacar un numero al azar****/
while (i<5){
	var numeroAleatoreo = Math.floor ((Math.random()*6)+1);
		tiro.push(numeroAleatoreo);
		i++;
}
   console.log("numero al azar",tiro);


/*>>>>>Ordenamiento de numeros al azar>>>>>*/

for (ultimaPosicion = tiro.length-1; ultimaPosicion>0; ultimaPosicion--){
  for (i=0; i<ultimaPosicion; i++){
 	if (tiro [i]> tiro [ultimaPosicion]){
		swap = tiro[ultimaPosicion];
 		tiro[ultimaPosicion] =tiro[i];
 		tiro[i] = swap;
	}
  }
}
console.log("numero ordenado",tiro)

/****Regla Generala****/

function generala(){

	if (tiro [0] == tiro[tiro.length-1]) {
        console.log("Es generala", tiro);}
        else {console.log("No es generala", tiro);
        }
}	
generala();


/*****Regla Escalera*****/
/*var escalera1 = [1,2,3,4,5];
var escalera2 = [2,3,4,5,6];

function escalera(){
	
 for (var i = 0; i < tiro.length; i++) {
	if (tiro == escalera1 || tiro == escalera2) {
        console.log("Es Escalera", tiro);}
  }     
}	
escalera();

var escalera1 = [1,2,3,4,5];
var escalera2 = [2,3,4,5,6];

function escalera(){
	
	var resultado = true;

	if (tiro != 1escalera1)
		resultado = true;
	else{ 
	     for (var i = 0; i < tiro.length; i++){
	     	if (tiro[i] != escalera2 [i]){

	     		resultado= false;
	     		break;
	     	}
	      }
         }
console.log(resultado);
}
 
escalera();*/

var escalera1 = [1,2,3,4,5];
var escalera2 = [2,3,4,5,6];

/*for (i=0;i<tiro.length;i++) 
{ 
if (tiro[i] == escalera1[i]) 
{ 
console.log("Es escalera") 
} 
} */

/***for (x=0;x<tiro.length;x++) 
{ 
for (y=0;y<escalera1.length;y++) 
{ 
if (tiro[x] == escalera1[y]) 
{ 
console.log("Es escalera") 
} 
} 
} */


var iguales=0;
for(var i=0;i<tiro.length;i++)
{
	for(var j=0;j<tiro.length;j++)
	{
		if(tiro[i]===escalera1[j])
		
		console.log("Es escalera");
	}
}













