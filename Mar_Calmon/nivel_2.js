var dados = [];
var puntaje =[];
var i;
var cant_tiros= 0;


function randomGenerala(){
	
	//while(cant_tiros<20 || puntaje!=50){

		for(i=0; i<=4; i++){

		var random = Math.floor(Math.random()*6)+1;
		dados.push(random);
		
		}


	//}
	
	console.log(dados);

};


	randomGenerala();

		var tiro = (dados.sort());

		console.log(tiro);

		var coincide = 0;

		for(i=0; i<tiro.length; i++){

			if(tiro[i]==i+1){

				coincide++;
			
				if(coincide == 5){

					console.log("Sacaste escalera");
					puntaje.push(20);
				}
			}
	
		}
		//console.log("Coincidencias: ", coincide);

		coincide = 0;

		for(i=0; i<tiro.length; i++){

			if(tiro[i]==i+2){

				coincide++;
			
				if(coincide == 5){
					
					console.log("Sacaste escalera");
					puntaje.push(20);
				}
			}
	
		}
		//console.log("Coincidencias:", coincide);

		//Para encontrar Generala debemos comparar si todos los elementos del array son iguales
		coincide=0;
		for(i=0; i<tiro.length; i++){

			if(tiro[i]==tiro[i+1]){
				coincide++;
				//console.log(coincide);
			}
		}

		if(coincide==4){
			
			puntaje.push(50);
			console.log(puntaje);
			return ("Sacaste Generala! GANASTE!!!");
		}else if(coincide==3){

			if(tiro[0]==tiro[3] || tiro[1]==tiro[4]){
				
				console.log("Sacaste Poker!");
				puntaje.push(40);
				//console.log(puntaje);
			}else{
				
				console.log("Sacaste Full!");
				puntaje.push(30);
			}

		}else if(coincide==2){


		}

		cant_tiros++;
		console.log("cantidad de tiros:", cant_tiros);	
	


//console.log(juegoGenerala());

var mayor=0;

for(var i=0; i < puntaje.length-1; i++){

	if(puntaje[i]>puntaje[i+1]){
		mayor=puntaje[i];
	}else{
		mayor=puntaje[i+1];
	}
}

console.log("Su mayor puntaje es: ",mayor);