console.log("Tipos de datos");
var variable1=23.23;
var variable2;
var variable3=null;
var variable4=true;
var variable5="12.10";
var variable6="10.10";
var variable7="20.10";
var variable8=true;
var variable9={dato:"45",numero:245};
console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);
console.log(typeof variable6);
console.log(typeof variable7);
console.log(typeof variable8);
console.log(typeof variable9);
console.log("Funciones para convertir datos");
/*
Number()
parseInt()
parseFloat()
 */
variable1=Number(variable1);
variable2=Number(variable2);
variable3=Number(variable3);
variable4=Number(variable4);
variable5=Number(variable5);
variable6=parseFloat(variable6);
variable7=Number(variable7);
variable8=variable8.toString();
variable9=variable9.numero.toString();
console.log(typeof variable1, "valor", variable1);
console.log(typeof variable2, "valor", variable2  );
console.log(typeof variable3, "valor", variable3);
console.log(typeof variable4, "valor", variable4);
console.log(typeof variable5, "valor", variable5);
console.log(typeof variable6, "valor", variable6);
console.log(typeof variable7, "valor", variable7);
console.log(typeof variable8, "valor", variable8);
console.log(typeof variable9, "valor", variable9);
