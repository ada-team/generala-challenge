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
var nroRadioButton;
var newLabel;
var newRadio;
var newRadioValue;
var newRadioTest;
var newRadioID;
var nChkButton;
var ButtonTirada;
var lGenerala;

function validar(tbID, tdVal) {
  document.getElementById(tbID).innerHTML=tdVal.toString();
  var totalP = 0;
  totalP = totalP + parseInt(document.getElementById("uno").innerText);
  totalP = totalP + parseInt(document.getElementById("dos").innerText);
  totalP = totalP + parseInt(document.getElementById("tres").innerText);
  totalP = totalP + parseInt(document.getElementById("cuatro").innerText);
  totalP = totalP + parseInt(document.getElementById("cinco").innerText);
  totalP = totalP + parseInt(document.getElementById("seis").innerText);
  totalP = totalP + parseInt(document.getElementById("escalera").innerText);
  totalP = totalP + parseInt(document.getElementById("full").innerText);
  totalP = totalP + parseInt(document.getElementById("poker").innerText);
  totalP = totalP + parseInt(document.getElementById("generala").innerText);

  document.getElementByID("totalPuntos").innerHTML = totalP.toString();
  
}

function createRadioButton() {

   nroRadioButton++;
   
   lista = document.getElementById("lista"); 
   
   newLabel = document.createElement("label");
   newRadio = document.createElement("input");
   newRadio.setAttribute("type", "radio");
   newRadio.setAttribute("name", "radio");
   newRadio.value = newRadioValue;
   newRadioID = "radio" + nroRadioButton.toString();
   newRadio.id = newRadioID;
   newLabel.appendChild(newRadio);
   newLabel.appendChild(document.createTextNode(newRadioText));

   lista.appendChild(newLabel);

   }

function cambiar() {

   imagen=document.getElementById(imgID);
   imagen.src=newImg;

   }


function puntos() {

   nroRadioButton = 0;

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

 
   if (vezOrdenado[1] == 1 && vezOrdenado[2] == 1 && vezOrdenado[3] == 1 && vezOrdenado[4] == 1 && vezOrdenado[5] == 1) {

      if (nChkButton == 5) {
         newRadioValue = "E-25";
         newRadioText  = "Escalera servida";
      } else {
        newRadioValue = "E-20";
        newRadioText  = "Escalera";
      }
      createRadioButton();

   }

   if ( nroTirada == 3 ) {
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

   if ( nroRadioButton >  0 ) {

      

   }

}


function tirarDados(){
   
      for ( j=1; j<6; j++ ) {
  
         chkID  = "dado" + j.toString();
         newChk = document.getElementById(chkID);
         nChkButton = 0
       
         if (newChk.checked ){

            nChkButton++
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
             
            cambiar();
            newChk.checked = false;

         } 

      }
 
      puntos();
      
      if ( nroRadioButton > 0 ) {
          buttonTirada.disabled = true;
          
          document.getElementById("radio1").focus()
      } else {
          buttonTirada.disabled = false;
          document.getElementById("btnTiro").focus()
      }


}

function tirada(){

tirarDados();

if (nroTirada==3){
   nroTirada=1;
} else {
   nroTirada++;
}

}


function InicioJuego() {
            
         imagen = document.getElementById("cubilete");	
         padre = imagen.parentNode;
         padre.removeChild(imagen);
         
         nroTirada = 1;
         buttonTirada = document.getElementById("btnTiro");
         
         tirada();

         }
  
