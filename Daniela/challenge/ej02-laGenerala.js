var dado = [1, 2, 3, 4, 5, 6];
var myMatch = [];
var tiro = [];
var cantElem = 0;
var rep4 = false;
var rep3 = false;
var rep2 = false;
var pos3;
var pos2;
var esGenerala = false;

var resultado = [["Puntos de 1", 0],
				["Puntos de 2", 0],
				["Puntos de 3", 0],
				["Puntos de 4", 0],
				["Puntos de 5", 0],
				["Puntos de 6", 0],
                ["Es Generala", false], 
                ["Es Full", false],
                ["Es Poker", false],
                ["Es Escalera", false]];

function fRepetidos(myArray){
var match = [];
var antMyArray = myArray[1];
var distinct = false;
    for( var i = 0; i < myArray.length && myArray.length != 1 && distinct == false; i++){
	    if (myArray[i] == antMyArray) {    	
            match.push(myArray[i]);
        }else{
        	distinct = true;
        }
        antMyArray = myArray[i];
    }
    return match;
}            


function quickSort(myArray){
var p = myArray.length-1;
var temp;

for (var p = myArray.length-1; p > 0; p--) {
	for (var i = 0; i < p; i++) {
		if (myArray[i] > myArray[p]) {
			temp = myArray[p];
		    myArray[p] = myArray[i]; 	
		    myArray[i] = temp;
		}
	}
}

}

function createArray(myArray){
var myTiro = [];
	for (var i = 0; i < (dado.length-1); i++) {
	    var unDado = Math.floor(Math.random()* dado.length + 1);
	    myTiro.push(unDado);
	 }
	return myTiro; 
}




for (var i = 0; i < 20 && esGenerala == false; i++) {
	myMatch = [];
	tiro = [];
	cantElem = 0;
	rep3 = false;
	rep2 = false;
	

var distintos = [];
	tiro = createArray(dado);
	//tiro = [1,2,3,4,5];     //Es escalera
	//tiro = [1,2,3,4,6]
	//tiro = [1,2,2,2,2];
	//tiro = [2,2,2,2,3];
    //tiro = [2,2,3,4,4];  
    //tiro = [1,3,4,4,5];     //Puede ser confundido como escalera
    //tiro = [2,2,2,2,2];     //Es Generala
    //tiro = [2,2,2,3,3];     //Es Full

	console.log("tiro : "+tiro);

	var orderedArray = quickSort(tiro);
	console.log("----El array ordenado es: "+tiro);
        
    var continued = true;
	var myTiro = tiro;
	
	while(myTiro.length != 0 && continued){
			var myMatch = fRepetidos(myTiro);

		    cantElem = myMatch.length; 
            
		    for (var j = 0; j < myMatch.length; j++) {
		    		myTiro.shift();
		    };
              
		switch(cantElem){
			case 5 : 
				resultado[6][1] = true;
	            esGenerala = true;
			break;

		    case 4 : 
		        resultado[8][1] = true;
		        continued = false; 
			break;

			case 3 : 
		        rep3 = true;
		        pos3 = myMatch[0] - 1;

		        if (resultado[pos3][1] == 0) {
		    		var puntos = myMatch[0] * myMatch.length;
		        	resultado[pos3][1] = puntos;
		        }
			break;

			case 2 : 
		        pos2 = myMatch[0] - 1;
		        if (resultado[pos2][1] == 0 && rep2 == false) {
		            var puntos = myMatch[0] * myMatch.length;
		            resultado[pos2][1] = puntos;
		            rep2 = true;	
		        }
			break;

			case 0 :
		        var todosDistintos = true;
                   
		        for (var k = 0; k < tiro.length; k++) {
		        	if (tiro[k] ==tiro[k+1]) {
		        		todosDistintos = false;
		        	}
		        }

		        if (tiro.length==5 && todosDistintos && tiro[0] == 1 && tiro[tiro.length-1] == 5) {
				    resultado[9][1] = true;
				    continued = false
					}else if (tiro.length==5 && todosDistintos && tiro[0] == 2 && tiro[tiro.length-1] == 6) {
					    resultado[9][1] = true;
					    continued = false
				}else{
                	distintos.push(myTiro.shift()); 
				}
			break;

			default :  console.log(""); break;
			}     
		}


		if (rep2 && rep3) {
			resultado[7][1] = true;
			resultado[pos3][1] = 0;
		    resultado[pos2][1] = 0;
		};
};


if (distintos.length == 5) {
var found = false;
	for (var i = 0; i < distintos.length && found == false; i++) {
	var posNum= distintos[i] - 1;	
		if (resultado[posNum][1] == 0){
			resultado[posNum][1] = distintos[i];
			found = true;
		}
	}
	
}

console.log("------- FP: resultado muestra ------");	
console.log(resultado);
   