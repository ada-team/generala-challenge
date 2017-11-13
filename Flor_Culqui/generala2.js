

var tiro1=[3,2,1,2,2];
/*var tiro1=[];*/
/*var i=0;1111111
while(i<5){
    var a = Math.round((Math.random()*10));
        if(a>0 && a<7){
        tiro1.push(a);
        i++;
        }
}
console.log(tiro1);*/
console.log(tiro1)
var p; var swap;
/*console.log("original",tiro1);*/
for (p=tiro1.length-1; p>0; p--){
    for( i=0; i<p ; i++){
        if( tiro1[i]>tiro1[p]){
            swap=tiro1[p];
            tiro1[p]=tiro1[i];
            tiro1[i]= swap;
            var re=tiro1
        }
    }
}

console.log("cambiando3",re);

/*if (re[0]==re[re.length-1]){
  console.log("si es general",re)
}
else
console.log("se es general")*/



