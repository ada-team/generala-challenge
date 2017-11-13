var sizeOfArray = 15;
var randomNumber;
var array = [];
var swap;

// crear el array con elementos random:
// for (var i = 0; i < sizeOfArray; i++) {
// 	array[i] = Math.floor((Math.random() * 10) + 1);
// }


//probando: crear el array sin que se repitan elementos
for (var i = 0; i < sizeOfArray; i++) {
	randomNumber = Math.floor((Math.random() * 50) + 1);
		if (i = 0) {
			array[i] = randomNumber;
			} else {

			for (var j = 1; j < array.length-1; j++) {
				while(randomNumber !== array[j]) {
					array[i] =randomNumber;
				}
			}
		}
}

console.log("Original: " + array);
/*first call to sorting function*/
sorting(array);



function sorting(array, swap) {
	
	/* asigno al último elemento del array como pivot, y voy recorriendo para atrás  */
	for (var pivot = array.length - 1; pivot > 0; pivot--) {
		/*luego recorro el array desde el primero hasta el pivot*/
		for (var i = 0; i < pivot; i++) {
			/*si el elemento que recorro es mayor al pivot, lo mando al final del array*/

			if (array[i] > array[pivot]) {
				/*hago el famoso swap*/
				swap = array[pivot];
				array[pivot] = array [i];
				array[i] = swap;
			}
		}
	}
	return array;
}

console.log("Ordenado: " + array );