var dado = [1,2,3,4,5,6];
var lista = document.getElementById('lista'); 
var tiros = 0;
var tirada = [];
var limite = 20;
var puntos=0;
var iguales =[0]; 
var generala = false;


function tirarDados(){
	if(!lis.length){
		if (tiros >= limite || generala===true) {
			if (generala === true){
				alert(`Ganaste! Sacaste Generala!`);
			location.reload();
			} else {
				alert(`Tiraste los dados más de ${limite} veces! Perdiste! Tu total de puntos al finalizar es de: ${puntos}`);
				location.reload();
			}
		} else {
			for( var i= 0 ; i<5; i++){	
				j = dado[Math.floor(Math.random()*dado.length)];
				tirada[i]=j;
			} 

			tirada.sort();

			for (var j=0 ; j<tirada.length; j++){
				var li = document.createElement('li'); 
				li.textContent = tirada[j];
				lista.appendChild(li);
				li.className = 'formaDados';
			}
		}

		if (tirada[0]==1 && tirada[1]==2 && tirada[2]==3 && tirada[3]==4 && tirada[4]==5){
			var h2 = document.createElement('h2');
			h2.textContent = "Escalera!";
			resultados.appendChild(h2);
			puntos = puntos + 30;
			var h3 = document.createElement('h3');
			h3.textContent = "Tienes un total de" + puntos + " puntos!";
			resultados.appendChild(h3);
			console.log(`tu total de puntos es de ${puntos}`);
		} 

		// console.log(`Estos son mis dados de este tiro: ${tirada}`);
		tiros+=1;
			console.log(`Tiro numero: ${tiros}`);
		
		contadorIguales();
	}
}


function contadorIguales(){
	iguales=[1];
	for (var j=0 ; j<tirada.length-1; j++ ){
		if (tirada[j]==tirada[j+1]){
			iguales[iguales.length - 1] ++;	
		}else{
			iguales.push(1);
		}
		// console.log(iguales);
	}
	contadorPuntos();
}

function contadorPuntos() {
	var h2 = document.createElement('h2');
	var h3 = document.createElement('h3');
	var resultados = document.getElementById('resultados');
	console.log(`este es el ultimo iguales ${iguales}`);
	
	if (iguales[k] == 5){ // hacer funcion generala 
			h2.textContent = "Sacaste Generala! Ganaste!";
			resultados.appendChild(h2);
			puntos = puntos + 50;
			h3.textContent = "Tienes un total de" + puntos + " puntos!";
			resultados.appendChild(h3);
			console.log(`tu total de puntos es de ${puntos}`);
			generala = true;
	} else {

		for(var k=0 ; k<iguales.length;k++){
			if (iguales[k] == 3){
				if ((iguales[0] == 2 && iguales[1] == 3)|| (iguales[1] == 2 && iguales[0] == 3)){
					h2.textContent = "Full!";
					resultados.appendChild(h2);
					puntos = puntos + 25;
					h3.textContent = "Tienes un total de " + puntos + " puntos!";
					resultados.appendChild(h3);
					console.log(`tu total de puntos es de ${puntos}`);
				} else {
				h2.textContent = "Trio!";
				resultados.appendChild(h2);
				puntos = puntos + 20;
				h3.textContent = "Tienes un total de " + puntos + " puntos!";
				resultados.appendChild(h3);
				console.log(`tu total de puntos es de ${puntos}`);
				}
			}	
			else if (iguales[k] == 4){
				h2.textContent = "Poker!";
				resultados.appendChild(h2);
				puntos = puntos + 30;
				h3.textContent = "Tienes un total de " + puntos + " puntos!";
				resultados.appendChild(h3);
				console.log(`tu total de puntos es de ${puntos}`);
			}
			
		} // cierre del for
	} //cierre del else 
}


var lis = document.getElementsByTagName('li');

function limpiar(){
	if(lis.length){
		for (var j = 0; j<dado.length -1; j++){
		lista.removeChild(lis[0]);
		//console.log(lis);
		}
	}
}






