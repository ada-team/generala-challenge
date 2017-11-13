/*Objetivo: Juego Generala 
Pautas: emular el juego de la generala teniendo en cuenta que el jugador podrá lanzar 5 dados, 
cuyos valores serán aleatorios.  
Se deberá guardar en un arreglo los valores obtenidos del juego y el puntaje elegido. 
Se considera ganador a quien consiga generala en 20 tiros de dados, de lo contrario el juego
terminará y se mostrará el mayor puntaje obtenido.*/
var tiro = [];
var cf = 0;
var ce = 0;
var cp = 0;
var gen = 0;
// Los 20 tiros
for (j = 0; j < 20; j++) {
    var uno = 0;
    var dos = 0;
    var tres = 0;
    var cuatro = 0;
    var cinco = 0;
    var seis = 0;
    //Generacion de array de 5 dados
    for (i = 0; i < 5; i++) {

        dados = (Math.ceil(Math.random() * 6));
        //contador de cantidad de numeros que salen por array
        switch (dados) {
            case 1:
                uno++;
                break;
            case 2:
                dos++;
                break;
            case 3:
                tres++;
                break;
            case 4:
                cuatro++;
                break;
            case 5:
                cinco++;
                break;
            case 6:
                seis++;
                break;

        }
        tiro[i] = dados;
    }
    // comparacion para generala
    if (uno == 5 || dos == 5 || tres == 5 || cuatro == 5 || cinco == 5 || seis == 5) {
        console.log(tiro + " Generala ");
        gen++;
        //comparacion para escalera
    } else if (uno == 1 && dos == 1 && tres == 1 && cuatro == 1 && cinco == 1 || dos == 1 && tres == 1 && cuatro == 1 && cinco == 1 && seis == 1) {
        console.log(tiro + " Escalera ");
        ce++; //contador escaleras
        //comparacion para Full
    } else if ((uno == 3 || dos == 3 || tres == 3 || cuatro == 3 || cinco == 3 || seis == 3) && (uno == 2 || dos == 2 || tres == 2 || cuatro == 2 || cinco == 2 || seis == 2)) {
        console.log(tiro + " Full ");
        cf++; //contador fulles
        //comparacion Pocker
    } else if (uno == 4 || dos == 4 || tres == 4 || cuatro == 4 || cinco == 4 || seis == 4) {
        console.log(tiro + " Pocker ");
        cp++; // contador de pockerssss
    } //else {
    // console.log(tiro +" Nada"); }  Dice cuando no sacaste nada, ensucia mucho la
    // visual
}
//Hace generala GANA!
if (gen >= 1) {
    console.log("GANASTE HICISTE GENERALA!")
    //Sino muentra puntos + cantidad de "cosas" que fue sacando
} else {
    var pocker = 45 * cp;
    var escalera = 25 * ce;
    var full = 35 * cf;
    console.log("Hiciste: ", cp, "Pocker  ", cf, "Full  ", ce, "Escalera ");
    console.log("Total de puntos: ", pocker + full + escalera);
}