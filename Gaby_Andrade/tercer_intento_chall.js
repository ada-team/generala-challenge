var escalera1 = [1,2,3,4,5];
var escalera2 = [2,3,4,5,6];
var jugadaO =[2,3,4,5,5];
var esDistinto = true;
var iguales=[];
var sonIguales;
// para escalera
function Escalera(){
	 for(var indEsc=0; indEsc<5 ; indEsc++ ){
	 	if(jugadaO[indEsc]==escalera1[indEsc]){
	 		if(indEsc==4){
	 			console.log("Tienes Escalera1 de: ",jugadaO,"Tienes 40 puntos");
	 		}	 			
	 	}
	 	if(jugadaO[indEsc]==escalera2[indEsc]){
	 		if(indEsc==4){
	 			console.log("Tienes Escalera2 de: ",jugadaO,"Tienes 40 puntos");
	 		}	 			
	 	}
	}
}

//para saber numeros oguales
for( i=jugadaO.length-1; i>0; i--){
	for(j=0; j<i;j++){
		if(jugadaO[i]==jugadaO[j]){ // me muestra que hay numeros que son iguales en el array
			
			iguales.push(jugadaO[i]);
		 	console.log(iguales);

		 } else	if(jugadaO[i] != jugadaO[j] ){ 
			if(i==1 && j==0){
			Escalera();
			}
		}
	}
}	console.log(i,j);
  

	
