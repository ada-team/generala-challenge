var dado = [1, 2, 3, 4, 5, 6];
var tiro = [];
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
var pos = 0;
var antMyArray = myArray[0];
console.log("myArray.length es la funcion es: "+(myArray.length));
    for( var i = 0; i <= myArray.length; i++){
	    if (myArray[i] == antMyArray) {
            match.push(myArray[i]);
            pos = pos+1;
	    	antMyArray = myArray[i];
	    	
		}else{
			return match;
		}

    }
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
	    console.log("unDado muestra: "+unDado);
	    myTiro.push(unDado);

	 }
	return myTiro; 
}


//var rep2 = false;
var cantElem = 0;
var myMatch = [];
var rep4 = false;
var rep3 = false;
var rep2 = false;
var pos2 = 0;
var pos3 = 0;
var todosDistintos = false;
var generala = false;

for (var i = 0; i < 3; i++) {

tiro = createArray(dado);
//tiro = [1,2,3,4,5]
console.log("El tiro muestra: "+tiro);

var orderedArray = quickSort(tiro);
console.log("El array ordenada es: "+tiro);

	var myTiro = tiro;
	while(myTiro.length != 0){
		var myMatch = fRepetidos(myTiro);
		console.log("myMatch es: " +myMatch);

	    cantElem = myMatch.length; 
	    console.log("cantElem es: " +cantElem);

	    for (var j = 0; j < myMatch.length; j++) {
	    	myTiro.shift();
	    }
	    console.log("myTiro muestra: "+myTiro); 

	switch(cantElem){
		case 5 : 
			resultado[6][1] = true;
            generala = true;
			console.log("resultado[6][1]: "+resultado[6][1]);
		break;

	    case 4 : 
	        rep4 = true;
	        console.log("rep4: "+rep4);
		break;

		case 3 : 
	        rep3 = true;
	        pos3 = myMatch[0] - 1;

	        if (resultado[pos3][1] == 0) {
	    		var puntos = myMatch[0] * myMatch.length;
	        	resultado[pos3][1] = puntos;
	        }
	        console.log("rep3: "+rep3);
		break;

		case 2 : 
	        rep2 = true;
	        pos2 = myMatch[0] - 1;

	        if (resultado[pos2][1] == 0) {
	            var puntos = myMatch[0] * myMatch.length;
	            resultado[pos2][1] = puntos;	
	        }
			console.log("rep2: "+rep2);
		break;

		case 0 : 
	        todosDistintos = true;
	        console.log("todosDistintos: "+todosDistintos);
		break;
		default : console.log("Hola"); break;
	}     
	}


	if (rep2 && rep3) {
		resultado[7][1] = true;
		resultado[pos3][1] = 0;
	    resultado[pos2][1] = 0;
	}else if (rep4) {
		resultado[8][1] = true;
	}

	if (todosDistintos && tiro[0] == 1 && tiro[tiro.length-1] == 5) {
	    resultado[9][1] = true;
	}else if (todosDistintos && tiro[0] == 2 && tiro[tiro.length-1] == 6) {
	    resultado[9][1] = true;
	}//else{
	//	for (var i = 0; i < tiro.length; i++) {
	//    var pos = tiro[i] - 1;
	//       resultado[pos][1] = tiro[i]
	// }
	//}
console.log(resultado);
}


