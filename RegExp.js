//expresiones regulares
let expresion1=new RegExp('abc');
console.log(expresion1);

//metodo test
let expresion2=/ ABC /;
console.log(expresion2.test("hola mundo ABC"));
console.log(expresion2.test(" abc "));
console.log(expresion2.test(" ABC "));
//
let expresion3=/[1-9]/;
console.log(expresion3.test('2Z@-'));
//  \d  cualquier numero
let expresion4=/\d\d-\d\d\-\d\d\d\d/
IsFecha=function(fecha){
com=expresion4.test(fecha);
if(com==true){
    console.log("Si es una fecha : ", fecha);
}else{
    console.log("no es una fecha : ", fecha);

}
}
IsFecha('23-23-2312');

//Negacion /^[01]/
//almenos una repeticion /\d+/
let expresion5=/\d+/
console.log(expresion5.test(''))
//desde cero repeticiones /\d*/
let expresion6=/\d*/
console.log(expresion6.test(''));
//expresiones  opcionales /hola mun?do/, donde la n es opcional
let expresion7=/hola mun?do/
console.log(expresion7.test('hola mudo'));
//minimos y maximos caracteres

let expresion8=/\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/
console.log(expresion8.test('12-21-2017 12:00'));

//no es sensible a las mayusculas ni a las minusculas   /hola mundo/i
let expresion9=/Hola mundo/i;
console.log(expresion9.test('HOla MundO'));

//agrupar microexpresiones  /woo+(hoo+)/
let expresion10=/wooo+(hoo+)/
console.log(expresion10.test('wooohoooohoooohoooohoooo'));
 
 //metodo exec('Lo que se va a evaluar') elresultado se muestra en un objeto
 let expresion11=/\d+/.exec('Del año 2017')
 console.log(expresion11);
 console.log(expresion11.input);

 //metodo match

 console.log("hasta en año 2019".match(/\d+/));
//limites de cadena en texto
let expresion12=/\bger\b/;
console.log(expresion12.test("ger"));
console.log(expresion12.test("german"));