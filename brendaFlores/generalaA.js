function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function arrayAle(j){
	var dados = [];
	for(var i=1;i<=j;i++){

		dados.push(random(1,6));
	}
	return dados
}


//var dadosp = dados;

var dados2=arrayAle(6)

//var tirada =[random(1,6),random(1,6),random(1,6),random(1,6),random(1,6)];

/*console.log(dados);
dados2.forEach(function(dado){
	console.log(dado);

})*/

var tiradas=0;
var vueltas=0;

/*function escalera(dados){
	for (i = 0; i < dados.length; i++) {
		if (dados[i] != dados[i+1]) {
			

		}
		
	}

	
}*/



while(tiradas<20){
	var dados= arrayAle(5);
	console.log(dados);
	var match=1;
	
	for(i=0;i<dados.length;i++){
		if(dados[i]==dados[i+1]){
			match++;

			console.log(dados[i],match);
		}/*else{
			if(dados[i]!=2 || dados[i]!=1 || dados[i]!=6){

			}*/
		}


	tiradas++;	
			
	}

	



switch(match){
	case 4:
	console.log("armaste generala: 50 puntos");
	break;
	case 3:
	console.log("Armaste poker: 40 puntos");
	case 2:
	console.log("Armaste full: 30 puntos");
	break;


}

