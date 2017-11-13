

/*Challenge I - Level II
Objetivo: Juego Generala
Pautas: emular el juego de la generala teniendo en cuenta que el jugador podrá lanzar 5
dados, cuyos valores serán aleatorios.
Se deberá guardar en un arreglo los valores obtenidos del juego y el puntaje elegido.
Se considera ganador a quien consiga generala en 20 tiros de dados, de lo contrario el juego
 terminará y se mostrará el mayor puntaje obtenido.*/

var max=0;

for (var i = 0; i<20; i++) {
	var array=[];
	var contadores=[];
	var cont1=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont6bis=0;

  for (var j = 0; j<5; j++) {
 	
 	var dado=Math.ceil(Math.random()*6);
 	if (dado==1){
 		cont1++;

 	}
 	if (dado==2){
 		cont2++;

 	}
 	if (dado==3){
 		cont3++;

 	}
 	if (dado==4){
 		cont4++;

 	}
 	if (dado==5){
 		cont5++;

 	}
 	if (dado==6){
 		cont6++;

 	}
 	
 	array[j]= dado
  }
  contadores=[cont1,cont2,cont3,cont4,cont5,cont6];
  array.sort();
  console.log (array);
  contadores.sort();
  console.log (contadores); 
  var puntos=0;
  var total1=0;
  var total2=0;
  var total3=0;
  var total4=0;
  var total5=0;
  var total6=0;

  
  if (contadores[5]==5){
  	puntos=50;
  	console.log('Generala!!!! Ganaste. Puntos:'+ puntos);
  	break;
  	
  }	else if (contadores[5]==4 && contadores[3]==1){
  	puntos=45;
  	console.log('FULL! Puntos:'+puntos)

  	
  }else if (contadores[5]==3 && contadores[4]==2){
  	puntos=35;
  	console.log('POKER! Puntos:'+puntos);


  } else if (contadores[0]==0 && contadores[1]==1 && contadores[2]==1 && contadores[3]==1 && contadores[4]==1 && contadores[5]==1){
    puntos=25;
    console.log('ESCALERA! Puntos:'+ puntos);
  } else { 
  		
  	var mayor = array[4];
  	var contmayor=0;

		for (var k= 0; k<5; k++) {
			         
		  if(array[k]== mayor){
		    contmayor++
		  }
		}
		puntos=contmayor*mayor;
    console.log('Puntos:'+ puntos);
   }
   console.log('Trirada nro:'+ (i));

   if (puntos>max){
    max=puntos;
     }
  }
   if (contadores[5]!==5){
   console.log('El maximo puntaje obtenido es :'+ max);
    }




