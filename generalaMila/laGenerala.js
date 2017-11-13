
/*var dado = [1,2,3,4,5,6];
var miTiro = [];
var p;


for (var i = 0; i < dado.length; i++) {
	dado[i] = Math.floor(Math.random()*dado.length +1);
	miTiro = dado;
	console.log("mi tiro es:" + miTiro);

}*/
 

function quickSort(arr){
	 var left = [];
	 var right = [];
	 var pivot = arr[0];

	 for(var i = 0; i < arr.length-1; i++){
	 	if(arr[i] < pivot){
	 		left.push(arr[i]);
	 	}
	 	else{

	 		right.push(arr[i]);
	 	}
	 	
	 }
//	 return [].concat(quickSort(left), pivot, quickSort(right));
     return [].concat(left,right);    		
}
console.log(quickSort([1,5,2,4,6,3]));


 ////////////////////////////////////
/*console.log("************");

 var arr =[8,32,5,10,1,22,7];
var p; var swap;
console.log("original",arr);
for (p=arr.length-1; p>0; p--){
    for( i=0; i<p ; i++){
        if( arr[i]> arr[p]){
            swap=arr[p];
            arr[p]=arr[i];
            arr[i]= swap;
            console.log("cambiando 1",arr);
            console.log("************");
        }
        console.log("cambiando2",arr);
        console.log("************");
    }
}
console.log("cambiando3",arr);
console.log("************");
console.log("************");*/


/*function quickSort(array){

	if (array.length < 1){
		return [];
	}

	var left = [];
	var right = [];
	var pivot = array[0];

	for(var i = 1; i < array.length; i++){
		if (array[i] < pivot){
			
			left.push(array[i]);
		}else{

			right.push(array[i]);
		}
	}

	return [].concat(quickSort(left), pivot, quickSort(right));

}

console.log(quickSort([4,9,2,1,6,3,8]));*/