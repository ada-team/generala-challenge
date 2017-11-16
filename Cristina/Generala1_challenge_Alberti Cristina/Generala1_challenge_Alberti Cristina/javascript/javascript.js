var i;
var j;
var k;
var l;
var nroJuego;
var nroTirada;
var imagen;	
var padre;
var listaDados = [0,0,0,0,0];
var vezCadaNro = [0,0,0,0,0,0];
var vezOrdenado;
var nroGenerado;
var imgID;
var newImg;
var newChk;
var chkID;
var lista;
//var nroRadioButton;
var newLabel;
var newRadio;
var newRadioValue;
var newRadioTest;
var newRadioID;
var nChkButton;
var ButtonTirada;
var lGenerala;
var valor;
var totalP;
var tbchar;
var nptos;
var max;




function validar(tbID, tdVal) {//busca el maximo y borra la lista del puntaje en c/jugada
  
  
  document.getElementById(tbID).innerHTML = tdVal.toString();

  
  if (tdVal > max) {
    max = tdVal;
  }
    
  tbchar = max.toString();
  document.getElementById("totalPuntos").value = max;

  lista = document.getElementById('lista');


  l = lista.hasChildNodes();

  while (l){
    lista.removeChild(lista.childNodes[0]);
     l = lista.hasChildNodes();

  }
  

  
  tirarDados(); 

}

function createRadioButton() {//crear un lista y me muestra el puntaje obtenido

   
   lista = document.getElementById("lista"); 
   
   newLabel = document.createElement("li");
   newLabel.innerHTML = newRadioText;
   lista.appendChild(newLabel);

   }

function cambiar() {

   imagen=document.getElementById(imgID);
   imagen.src=newImg;

   }


function puntos() {//Crea 2 arrays  1 con la cantidad de veces q salio cada/numero y en otro lo ordena



   vezCadaNro = [0,0,0,0,0,0];

   for ( i=0; i<5; i++ ){
       k = listaDados[i] - 1;
       vezCadaNro[k]++;
   }

   vezOrdenado = vezCadaNro.slice();       
   vezOrdenado.sort();
 
   if ( vezOrdenado[5] == 5 ){

      if (nChkButton == 5) {
         lGenerala = true;
      } else {  
           newRadioValue = "G-60";
           newRadioText  = "Generala";
           createRadioButton();
      }
   }

   if (vezOrdenado[5] == 4 && vezOrdenado[4] == 1) {

      if (nChkButton == 5) {
         newRadioValue = "P-45";
         newRadioText  = "Poker servido";
      } else {
        newRadioValue = "P-40";
        newRadioText  = "Poker";
      }
      createRadioButton();

   }
              
   if (vezOrdenado[5] == 3 && vezOrdenado[4] == 2) {

      if (nChkButton == 5) {
         newRadioValue = "F-35";
         newRadioText  = "Full servido";
      } else {
        newRadioValue = "F-30";
        newRadioText  = "Full";
      }
      createRadioButton();

   }

 
   if (vezCadaNro[0] == 1 && vezCadaNro[1] == 1 && vezCadaNro[2] == 1 && vezCadaNro[3] == 1 && vezCadaNro[4] == 1) {

      if (nChkButton == 5) {
         newRadioValue = "E-25";
         newRadioText  = "Escalera servida";
      } else {
        newRadioValue = "E-20";
        newRadioText  = "Escalera";
      }
      createRadioButton();

   }
    if (vezCadaNro[5] == 1 && vezCadaNro[1] == 1 && vezCadaNro[2] == 1 && vezCadaNro[3] == 1 && vezCadaNro[4] == 1) {

      if (nChkButton == 5) {
         newRadioValue = "E-25";
         newRadioText  = "Escalera servida";
      } else {
        newRadioValue = "E-20";
        newRadioText  = "Escalera";
      }
      createRadioButton();

   }

   
      for (l=0;l<6; l++) {   
         lmas1 = l + 1;
         if ( vezCadaNro[l] > 0) {
            puntaje = vezCadaNro[l] * lmas1;
            newRadioValue = lmas1.toString() + "-" + puntaje.toString();
            newRadioText  = puntaje.toString() + " puntos para el " + lmas1.toString();
            createRadioButton();        
         }
      }


}


function tirarDados(){ //  2 - tiro los dados generando un numero aleatorio con maximo 20 tiradas

  if (nroTirada==20){
    alert("fin");
} else {
     nroTirada++;
     console.log(nroTirada);
}
   
      for ( j=1; j<6; j++ ) {
  

            nroGenerado = Math.floor(Math.random()* 6 ) + 1;
            listaDados[j-1] = nroGenerado;
            imgID = "img" + j.toString() ;

            switch (nroGenerado) {
                case 1:
                     newImg = "img/uno.jpg";
                     break;
                case 2:
                     newImg = "img/dos.jpg";
                     break;
                case 3:
                     newImg = "img/tres.jpg";
                     break;
                case 4:
                     newImg = "img/cuatro.jpg";
                     break;
                case 5:
                     newImg = "img/cinco.jpg";
                     break;
                case 6:
                     newImg = "img/seis.jpg";
             }
             
            cambiar(); //cambia la imagen segun el numero obtenido aleatoriamente

      }
 
      puntos();
      
}



function InicioJuego() { //1 - inicio juego, elimino la imagen y voy a la funcion tirar dados

            
         max = 0;

         imagen = document.getElementById("cubilete");	
         padre = imagen.parentNode;
         padre.removeChild(imagen);
         
         nroTirada = 0;
          
         tirarDados();

         }
  
