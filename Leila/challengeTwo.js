var arr = [];
var generar;
var contadorCoincidencia = 0;
var primerCoincidencia;
var segundaCoincidencia;
var contadorSegundaCoincidencia = 0;
var puntosUno = 0;
var puntosDos = 0;
var puntajeRonda = 0;
var puntajeMayor = 0;


function tirada(){
for (var j = 0; j < 5; j++) {
// MI NANDITO   arr.push(Math.floor((Math.random() * 6) + 1));
  arr[j] = Math.floor((Math.random() * 6) + 1);
  }
console.log('Tirada Dados: ' + arr);
}

function hayGenerala(){
  if (arr[0] == arr[1] && arr[0] == arr[2] && arr[0] == arr[3] && arr[0] == arr[4]) {
    generar = true;
  }else {
    generar = false;
  }

  if (generar == true) {
  console.log('Ganaste!');
  }else{
    console.log('No hay generala.');
  }

  return generar;
}

function buscarCoincidencias(arr){
  for (var i = 0; i < 5; i++) {
    for (var j = 4; j >= 0; j--) {
      if (arr[i] == arr[j] && i != j) {
        primerCoincidencia = arr[j];
        contadorCoincidencia = 2;
        for (var k = 0; k < 5; k++) {
          if (arr[k] == primerCoincidencia && k !== i && k != j) {
            contadorCoincidencia++;
          }
        }
        puntosUno = primerCoincidencia * contadorCoincidencia;
      }
    }
  }
  
    if (contadorCoincidencia > 0) {
      console.log(`El numero ${primerCoincidencia} se repite ${contadorCoincidencia} veces. Esto te da ${puntosUno} puntos.`);
    }else{
      console.log('No hay concidencias, fracasado.');
    }

    //Segunda iteracion
      for (var i = 0; i < 5; i++) {
        for (var j = 4; j >= 0; j--) {
          if (arr[i] == arr[j] && i != j && arr[i] != primerCoincidencia) {
            segundaCoincidencia = arr[j];
            contadorSegundaCoincidencia = 2;
          for (var k = 0; k < 5; k++) {
            if (arr[k] == segundaCoincidencia && k !== i && k != j) {
              contadorSegundaCoincidencia++;
            }
          }
            puntosDos = segundaCoincidencia * contadorSegundaCoincidencia;
        }
      }
    }
      if (contadorSegundaCoincidencia > 0) {
        console.log(`Tambien se repite el numero ${segundaCoincidencia}, ${contadorSegundaCoincidencia} veces. Esto te da ${puntosDos} puntos.`);
      }else{
        console.log('No hay mas concidencias, fracasado.');
      }
}


function jugar(){
  arr = [0, 0, 0, 0, 0];
  tirada(); //Tiro los dados y genero el array
  hayGenerala(); //Busca si hay generala o no

  if (generar == false) {
    buscarCoincidencias(arr);
  }

  puntajeRonda = puntosUno + puntosDos;
  console.log(`Los puntos de esta ronda son: ${puntajeRonda}`);


    if (puntajeRonda > puntajeMayor) {
      puntajeMayor = puntajeRonda;
    }
}

function jugarVeinteVeces(){
  for (var n = 1; n <= 20; n++) {
    console.log('---------------------------------------------');
    console.log('Round: ' + n);
    jugar();
  }
  console.log(`El puntaje mayor es de ${puntajeMayor}`);
}

jugarVeinteVeces();