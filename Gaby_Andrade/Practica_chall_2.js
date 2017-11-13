
var escalera1 = [1,2,3,4,5];
var escalera2 = [2,3,4,5,6];
var jugadaO =[2,3,3,5,6];
var cont=0;
/*var tiro1=[];
var i=0;
var
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
console.log("Tu jugada ordenada es: ",jugadaO);*/

/*function AllSame(){
	console.log(jugadaO);
	var CallEsc = true;
	for (p=jugadaO.length-1;p>0; p--){
		for(var i =0; i<p; i++){
			console.log( jugadaO[i], jugadaO[p])
			if(jugadaO[i]!==jugadaO[p]&& CallEsc == true){	
				if(p>0 && i<jugadaO.length){			
				CallEsc = true;	
				console.log("error true");
				}
			}else if (jugadaO[i] === jugadaO[p] ){
				if(p>0 && i<p){			
				CallEsc=false;
				console.log("error false");	
				}
			}
		}
	}
	if (CallEsc==true){
	Escalera();	
	} else if(CallEsc==false) {
		console.log('no es esckla');
	}
}	*/


	function Escalera(){
		
		for ( var esc=0 ; esc<jugadaO.length; esc++ ){
			if(jugadaO[esc] == escalera1[esc] ){
				cont++;
				if(cont == jugadaO.length){
				var tenemosEscalera=jugadaO;
				console.log("Sacaste Escalera de: ", tenemosEscalera)		
				} break;
			} 

			if(jugadaO[esc] == escalera2[esc] ){
				cont++;
				if(cont == jugadaO.length){
					var tenemosEscalera=jugadaO;
					console.log("Sacaste Escalera de2: ", tenemosEscalera);
				}break;
			}
			if(jugadaO[esc] !== escalera2[esc]){
				cont++;
				if(cont == jugadaO.length){					
					console.log("No Sacaste Escalera de2: ", jugadaO);				
				}break;		
			}
			if(jugadaO[esc] !== escalera1[esc]){
				cont++;
				if(cont == jugadaO.length){						
					console.log("No Sacaste Escalera de1: ", jugadaO);				
				}	 
			}break
		}
		
	}

	Escalera();
/*var escalera1 = [1,2,3,4,5];
var escalera2 = [2,3,4,5,6];
var jugadaO =[2,3,3,5,6];
var cont=0;

	for (h=0;h<jugadaO.length;h++){
		if(jugadaO[h]==escalera2[h]){
			 cont++;
			if(cont==5){
				console.log("ItsEsc =true");
			}
		}
	}

/*for(var r=0; r<jugadaOrdenada.length;r++){	
		if(jugadaOrdenada[0] != jugadaOrdenada[r]){
		console.log(jugadaOrdenada);
				
			if(jugadaOrdenada[esc] == escalera1[esc]){
			
			} 
		}
	}console.log(jugadaOrdenada);
}*/
	
/*else if(jugadaOrdenada[esc] == escalera1[esc]){
				if(jugadaOrdenada[jugadaOrdenada-1] == escalera2[escalera2-1]){
					console.log("Ganaste escalera(2) ", jugadaOrdenada);
				}
			}*/