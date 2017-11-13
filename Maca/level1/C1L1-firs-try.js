/*
Challenge I - Level I
Objetivo: Ordenamiento de Burbujeo y de Pivote
Pautas: generar un array que contenga 15 elementos generados aleatoriamente (números
enteros)
 y realizar los códigos correspondientes a ambos métodos de ordenamiento.
Ambos métodos deben estar encapsulados en una función y devolver el array ordenado de
mayor a menor.
*/
var sizeOfArray = 15;
var unordered = [];
for (var i = 0; i < sizeOfArray; i++) {
	unordered[i] = Math.floor((Math.random() * 10) + 1);
}


/*Ordenamiento pivote*/
function quickSort(array){
	/*var indexPivot = Math.floor(Math.random() * (array.length-1)); */
	var indexPivot = Math.floor((array.length-1)/2); 
	var right = [];
	var left = [];
	var ordered = [];
	console.log("Index of the pivot element:" + indexPivot + " // Pivot element: " + unordered[indexPivot]);

	for (var i = 0; i < array.length-1; i++) {
		

		if (array[indexPivot] < array[i]) {
			
			right.push(array[i]);
			
		} else if (array[indexPivot] > array[i] || array[indexPivot] == array[i]) {
			left.push(array[i]);	
		} 
	}




	console.log("Left:" + left);
	console.log("Pivot:" + array[indexPivot]);
	console.log("Right:" + right);

		
	return ordered.concat(left, array[indexPivot], right);
}

console.log("Unordered array:" + unordered);
console.log("Ordered array:" + quickSort(unordered)); 

