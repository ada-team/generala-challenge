var dado = [1, 2, 3, 4, 5, 6];
var myMatch = [];
var tiro = [];
var cantElem = 0;
var rep4 = false;
var rep3 = false;
var rep2 = false;
var pos3;
var pos2;
var todosDistintos = false;
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
//var pos = 0;
var antMyArray = myArray[1];
var distinct = false;
// console.log("myArray[0] muestra: "+myArray[0])
// console.log("myArray[1] muestra: "+myArray[1])
// console.log("F: myArray.length en la funcion es: "+(myArray.length));
// console.log("F: antMyArray en la funcion es: "+antMyArray);
    for( var i = 0; i < myArray.length && myArray.length != 1 && distinct == false; i++){
    	// console.log("myArray[i] muestra: "+myArray[i]);
	    if (myArray[i] == antMyArray) {
	    	// console.log("Entro al if");
            match.push(myArray[i]);
        }else{
        	distinct = true; //Para cortar
        }
        antMyArray = myArray[i];
    }
    return match; //Si son todos iguales
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
	    // console.log("F: unDado muestra: "+unDado);
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
pos3;
pos2;
todosDistintos = false;
	

var distintos = [];
	tiro = createArray(dado);
	//tiro = [1,2,3,4,5];     //Es escalera
	//tiro = [1,2,3,4,6]
	//tiro = [1,2,2,2,2];
	//tiro = [2,2,2,2,3];
    // tiro = [2,2,3,4,4];  
    //tiro = [1,3,4,4,5];   //Puede ser confundido como escalera
    //tiro = [2,2,2,2,2];     //Es Generala
    //tiro = [2,2,2,3,3];     //Es Full

	 console.log("tiro : "+tiro);

	var orderedArray = quickSort(tiro);
	 console.log("----El array ordenado es: "+tiro);
        
        var continued = true;
		var myTiro = tiro;
		while(myTiro.length != 0 && continued){
			var myMatch = fRepetidos(myTiro);
			// console.log("W: myMatch es: " +myMatch);

		    cantElem = myMatch.length; 
		    // console.log("W: cantElem es: " +cantElem);
            
            // console.log("tiro1 es: "+tiro);
		    for (var j = 0; j < myMatch.length; j++) {
		    	
		    		myTiro.shift();
		    	
		    };
		    // console.log("W: myTiro muestra: "+myTiro); 
            // console.log("tiro2 es: "+tiro);
              
		switch(cantElem){
			case 5 : 
				resultado[6][1] = true;
	            esGenerala = true;
				// console.log("-> S: resultado[6][1]: "+resultado[6][1]);
			break;

		    case 4 : 
		        resultado[8][1] = true;
		        continued = false; 
		        // console.log("-> S: rep4 es true ");
			break;

			case 3 : 
		        rep3 = true;
		        pos3 = myMatch[0] - 1;

		        if (resultado[pos3][1] == 0) {
		    		var puntos = myMatch[0] * myMatch.length;
		        	resultado[pos3][1] = puntos;
		        }
		        // console.log("-> S: rep3: "+rep3);
			break;

			case 2 : 
		        
		        pos2 = myMatch[0] - 1;

		        if (resultado[pos2][1] == 0 && rep2 == false) {
		            var puntos = myMatch[0] * myMatch.length;
		            resultado[pos2][1] = puntos;
		            rep2 = true;	
		        }
				// console.log("-> S: rep2: "+rep2);
			break;

			case 0 :
			    //Retorna 0 si el primer valor es distinto o si son todos distintos 
		        var todosDistintos = true;
                   
		        for (var k = 0; k < tiro.length; k++) {
		        	if (tiro[k] ==tiro[k+1]) {
		        		todosDistintos = false;
		        	}
		        }


		        // console.log("tiro3 es: "+tiro);
		        if (tiro.length==5 && todosDistintos && tiro[0] == 1 && tiro[tiro.length-1] == 5) {
				    resultado[9][1] = true;
				    continued = false
					}else if (tiro.length==5 && todosDistintos && tiro[0] == 2 && tiro[tiro.length-1] == 6) {
					    resultado[9][1] = true;
					    continued = false
				}else{
                	distintos.push(myTiro.shift()); 
				}
		        // console.log("-> S: distintos: "+distintos);
			break;
			default : // console.log("-> S: Seleccionar un número"+tiro); break;
			}     
		}


		if (rep2 && rep3) {
			resultado[7][1] = true;
			resultado[pos3][1] = 0;
		    resultado[pos2][1] = 0;
		};
	/*	
	console.log("------- FP: resultado muestra ------");	
	console.log(resultado);
console.log("FOR: i muestra: "+i);	
*/
};


if (distintos.length == 5) {

	// console.log("Seleccionar un numero: "+distintos);
	// console.log("Selecciono el de la posicion 2: "+distintos[2]);
    
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
   