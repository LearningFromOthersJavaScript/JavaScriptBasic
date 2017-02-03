//clases predefinidas en javaScript
//strting
//Number
//Boolean
//Array
//Object
var cadena="Hola mundo";
console.log(cadena);
var cadenaS= new String("Hola Mundo");
console.log(cadenaS);
var numero=10;
console.log(numero);
var numeroN = new Number(20);
console.log(numeroN);
var bulenno=true;
console.log(bulenno);
var bulennoB=new Boolean(true);
console.log(bulennoB);
var array=[12,12,12,12,12];
console.log(array);
var arrayA= new Array(12,12,12,12,12);
console.log(arrayA);
var obj={nombre:"German", edad:10};
console.log(obj);
var objO= new Object();
objO.nombre="Jose";
console.log(objO);

var fecha= new Date();
console.log(fecha.getFullYear());
console.log(Math);
var ApiM=Math.PI;
console.log(ApiM);
var numero1 = Math.floor(34.45);
console.log(numero1);
var o={};
console.log(o.constructor===Object);
console.log("===========================");
var localS={nombre:"German",apellido:"Castro"};
console.log(localS.toLocaleString());
console.log(localS.__defin);
var u={};
u.__defineGetter__('enlace',function(){
	return "hola mundo";
});
console.log(u.enlace);
var i={nombre:"german",get enlace1(){return "hola a todos";}};
console.log(i.enlace1);
console.log(i.nombre);
console.log(i);
var l={};
Object.defineProperty(l,'Obj',{
	get:function(){
		return "hola;";
	}
});
console.log(l.Obj);