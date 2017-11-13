var dadouno;
var dadodos;
var dadotres;
var dadocuatro;
var dadocinco;

function tirardado(){
    for(var i = 1; i < 6; i++){
        document.getElementById("dado"+i).value = Math.ceil(Math.random()*6);
        }

    if((dadouno = 5) && (dadodos = 5) && (dadotres = 5) && (dadocuatro = 5) && (dadocinco = 5))
    	console.log('¡Generala!')
	} else {
		console.log('Seguí participando!')
	}
}