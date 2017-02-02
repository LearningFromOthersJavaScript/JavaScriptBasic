console.log("Tipos de datos");
var variable1 = 23.23;
var variable2;
var variable3 = null;
var variable4 = true;
var variable5 = "12.10";
var variable6 = "10.10";
var variable7 = "20.10";
var variable8 = true;
var variable9 = { dato: "45", numero: 245 };
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
variable1 = Number(variable1);
variable2 = Number(variable2);
variable3 = Number(variable3);
variable4 = Number(variable4);
variable5 = Number(variable5);
variable6 = parseFloat(variable6);
variable7 = Number(variable7);
variable8 = variable8.toString();
variable9 = variable9.numero.toString();
console.log(typeof variable1, "valor", variable1);
console.log(typeof variable2, "valor", variable2);
console.log(typeof variable3, "valor", variable3);
console.log(typeof variable4, "valor", variable4);
console.log(typeof variable5, "valor", variable5);
console.log(typeof variable6, "valor", variable6);
console.log(typeof variable7, "valor", variable7);
console.log(typeof variable8, "valor", variable8);
console.log(typeof variable9, "valor", variable9);

console.log("===================Objetos================");
var curso = { nombre: "JavaScript", modulo: 12, calificacion: { 1: "somos", 2: "una" } };
console.log(curso);
console.log(curso.nombre);
curso.nombre = "Html y Css";
console.log(curso.nombre);
curso.alumnos = 50;
console.log(curso);
delete curso.alumnos;
console.log(curso);
console.log("===================Funciones================");
var datosPersona = function(nombre, apellido, edad) {
    console.log("mi nombre es ", nombre, " ", apellido, " y tengo ", edad, " años de edad");
    // body... 
};
datosPersona("German", "Castro", 21);
console.log(datosPersona);
var datosPersona2 = function(nombre, apellido, edad) {
    return nombre + " " + apellido + " " + edad;
};
datosPersona2("Felix", "Vilchez", 60);
console.log(datosPersona2);
console.log(datosPersona2("RUsbel", "Canna", 20));


function valores(a, b, c) {
    return a + b + c;
}
var suma = valores(1, 2, 10);
console.log("a", valores, suma);

console.log("=================1=====================");
var persona = {
    nombre: "German",
    Apellido: "Castro",
    Profesion: "Ingeniero",
    Valor: "Puntual",
    edad: 23,
    refran: function(frase) {
        console.log(frase);
    }
};
persona.refran("Somos responsables de todas nuetras experiencias");
console.log(persona.nombre);
console.log("=================1=====================");
var persona2 = {
    ombre: "German",
    Apellido: "Castro",
    Profesion: "Ingeniero",
    Valor: "Puntual",
    edad: 23,
    refran1: function(frase) {
        return frase;
    }

};

var mesaje = persona2.refran1("Nuestro pensamiento determina el futuro");
console.log(mesaje);


console.log("=====================Operadores=====================");
console.log("Aditivos y Multiplicativos");
var var1 = 12,
    var2 = 232,
    var3 = 2,
    var4 = 123,
    var5 = 2,
    var6 = 12,
    var7 = "hola";
console.log("Suma", var1 + var2);
console.log("Resta", var2 - var1);
console.log("Suma de string", var7 + var6);
console.log("Multiplicacion", var3 * var1);
console.log("Division", var4 / var5);
console.log("Modulo", var6 % var5);

console.log("Operadores Unarios");
console.log("Prefijo");
//hace la operacion antes de
var numero, dato = 5;
console.log(numero = ++dato);
console.log(numero = --dato);
console.log("Sufijo");
//hace la operacion despues de.
var numero2, dato1 = 5;
console.log(numero2 = dato1++);
console.log(numero2 = dato1--);

console.log("Operadores Logicos");

var numero1 = 0,
    numero2 = 1,
    numero3 = 2,
    numero4 = 3,
    numero5 = '3';
console.log("Si uno de los valores es false, el resultado sera false: 0");
console.log(numero1 && numero2);
console.log(numero1 && numero3);
console.log("Si Ambos son Verdaderos, el resultado sera el segundo valor", numero4 && numero3);
console.log("Si uno de los valores es false, el resultado sera True=1 amas");
console.log(numero1 || numero2);
console.log(numero1 || numero2);
console.log("si ambos son verdaderos, el resultado es el primer valor", numero4 || numero3);

console.log(!numero1);
console.log(!numero2);
console.log(!numero3);

console.log("Operadores de igualdad");
console.log("No considera el tipo", numero4 == numero5);
console.log("Compara el tipo de dato mas", numero4 === numero5);
console.log("Compara los no equivalentes", numero4 != numero5);
console.log("Compara el tipo de dato mas, pero no equivalentes", numero4 !== numero5);
console.log(numero3 > numero4);
console.log(numero3 < numero4);
console.log(numero5, numero4, numero5 <= numero4);
console.log(numero5 >= numero4);

console.log("Operador condicional");

condicional = numero4 == numero5 ? "SI" : "NO";
console.log(condicional);
condicional = numero4 === numero5 ? "SI" : "NO";
console.log(condicional);

console.log("ESTRUCTURAS CONDICIONALES");
console.log("If else");

var condicionalIfElse = function(edad) {
    if (edad <= 13) {

        console.log("Eres un niño");
    } else if (edad > 13 && edad <= 30) {
        console.log("Eres un joven");

    } else {
        console.log("Eres un adulto");
    }
};
condicionalIfElse(4);
console.log("Switch");
var meses = function(mes) {
    switch (mes) {
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        default:
            console.log("Mes no Determinado");
            break;
    }
};
meses(1);

console.log("Estructuras repetitivas");
console.log("While");
var whileC = function(valor) {
    var a = 0;
    while (a < valor) {
        ++a;
        console.log(a);

    }
    console.log("ES TODO!!");
};
whileC(5);
console.log("Do While");
var doWhile = function(valor) {
    var b = 0;


    do {
        b++;
        console.log(b);
    } while (b < valor);
    console.log("Es tod0!!!");
};
doWhile(5);
console.log("For");
var forC = function(valor) {
    for (var i = 0; i < valor; i++) {
        console.log(i);
    }
    console.log('ES TODO!!!!!1');
};
forC(5);
console.log("for In");
var arrays = [];
var forIn = function() {
    for (var correr in document) {
        //console.log(correr);
       arrays.push(correr);
    }
        console.log(arrays);
};
forIn();
//break and continue

//valores primitivos y de referencia

function referencia() {
    var persona1 = new Object();
    var persona = persona1;
    persona1.nombre = "Joel";
    persona.apellido = "Castro";
    console.log(persona);
    console.log(persona1);

}
referencia();

//referencia con parametros
function referencia1(obj) {
    obj.nombre = "German";
    obj.edad = 20;
    console.log(obj);
    obj = new Object();
    obj.nombre = "Joel";
    obj.edad = "34";
    console.log(obj);
}

var person = new Object();
referencia1(person);
console.log(person.nombre);


//Contexto de Ejecusion y Ambito
//Arrays

var meses= new Array();
console.log(meses);
var dias= new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
console.log(dias);
console.log(dias.toString());
var nombres=[];
var frutas=["Manzana","Pera","Durazno","Platano","Mango","Limon","Freza","Piña","Pepino"];
console.log(frutas[0]);
console.log(frutas.length);
meses[meses.length]="Enero";//una forma de agregar datos a un array
console.log(meses);
//Metodos 
//push and pop
//agrega y quita
meses.push("Febrero","Marzo");
console.log(meses);
meses.pop("Marzo");
console.log(meses);

//Shift
console.log(dias.shift());//optiene el primer valor del array
//Unshift
meses.unshift("Primer mes","segundo Mes");//agrega el valor en la primera posicion
console.log(meses);
console.log(dias.reverse());
console.log(dias.sort());//Ordena alfabeticamente
//slice

console.log(dias.slice(1,3));
console.log(dias.slice(2));
//splice, elimnar, añadir, remplazar
 
meses.splice(0,2);//eliminando
console.log(meses);
frutas.splice(0,0,"Carambola","granada","granadilla");//añadiendo
console.log(frutas);
meses.splice(1,1,"Abril","Mayo");//repplazando
console.log(meses);