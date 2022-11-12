function saludo(){
    alert ("hola todo bien, desarrollado por Jeison Orozco Tecnico en programcion de software ficha:2525523 ;)")
}
function opbasicas(){
    var n1;
    var n2;
    var suma;
    var resta;
    var multiplicacion;
    var division;
    n1= parseInt(prompt("ingrese numero 1"));
    n2= parseInt(prompt("ingrese numero 2"));
    suma=n1+n2;
    resta=n1-n2;
    multiplicacion=n1*n2;
    division=n1/n2;
  alert ("resultado suma es : "+ suma)
  alert ("resultado resta es : "+ resta)
  alert ("resultado multiplicacion es : "+ multiplicacion)
  alert ("resultado division es : "+ division)
  }

function cuadrado(){
    var A = 0
    var B = 0
   A = parseInt(prompt("ingrese numero a validar"));
   C = A * A;
   alert("el cuadrado del numero ingresado es:" + C)

}

function triangulo(){
    var A = 0;
var B = 0;

A = parseInt(prompt("ingrese numero base"));
B = parseInt(prompt("ingrese numero altura"));

C = A * B / 2;

alert("el area del triangulo es:" + C)
}

function edad(){
    var E = 0
    var A = 2022

    E = parseInt(prompt("ingrese su edad"));
    C = A-E;

    alert("el año en que nacio es: " + C)
 }

 function Convercion_de_unidades(){
    var P=2.54;
    var CM=0;
    var KM=0;
    CM= parseInt(prompt("Ingrese los centímetros que va a convertir: "));
    KM= parseInt(prompt("Ingrese los kilometros que va a convertir: "));
    CM= CM*P
    KM=KM/P
    alert("Los centímetros ingresados en pulgadas son: "+CM);
    alert("Los kilometros ingresados en pulgadas son: "+KM);
}