





/*for(var i=0; i<DadosJugador1.length;i++){
	DadosJugador1.push(Math.floor(Math.random()* DadosJugador1.length + 1));
	
}

console.log(DadosJugador1);*/



/*var ArrayRandom = [];
var MaximoArray = 6;

var limite = MaximoArray + 1;


for(var i=1; i<MaximoArray;i++){
	ArrayRandom.push (Math.floor(Math.random()*6));
	parseInt(Math.random()*6);
}

console.log(ArrayRandom);*/

var dado1=Math.floor(Math.random()*6+1);
var dado2=Math.floor(Math.random()*6+1);
var dado3=Math.floor(Math.random()*6+1);
var dado4=Math.floor(Math.random()*6+1);
var dado5=Math.floor(Math.random()*6+1);

var tirardados=[[dado1],[dado2],[dado3],[dado4],[dado5]];

console.log(tirardados);

 
   // var  count = {};
   // tirardados.forEach(function(i) { count[i] = (count[i]||0) + 1;});
   // 	console.log(count);
   // };


 var arraydeiguales = function check(){
  for (i=0; i<tirardados.length;i++){
    for (x=0;x<tirardados.length;x++){
      if(tirardados[i]==tirardados[x] && i != x){
        console.log('SAME ones in ARRAY: '+tirardados[i])};
      }
    }
  }



/*for(var i = 0; i < tirardados.length; i++){
    


  }


/*function juego(){
var maximo=20; //numero maximo de jugadas
if(maximo !=20){ 
  for(var i = 1; i < tirardados; i++){

  }
}

}

*/




/*function tirardado(){
    for(var i = 1; i < 6; i++){
        document.getElementById("dado"+i).value = Math.ceil(Math.random()*6);
        }
}

console.log(tirardado());*/