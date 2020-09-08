//Alien Code
/////////////////////Codigo de aprendizaje////////////////////////////////////

/* se usa para imprimir y declara variables*/
let name = 'script';  //string
let age = 30;  //Number
let approve = false;  //Boolean Literal
//let name = 'script';  //string
console.log(name);

/* se usa para declarar objeto*/

let persons ={name: 'Byron',age:30};
persons.name= 'byron'
console.log(persons);
console.log(persons.name);

//o para imprmir con CICLO
for (person in persons) console.log(person);
for(key in persons) console.log(persons[key]);

/* se usa para declarar array*/

let selectedcolors = ['red', 'blue'];
selectedcolors[2] = 'green';
console.log(selectedcolors);

/* se usa para declarar funcion*/
function greet(saludo, saludo2){
    console.log('by' + saludo + saludo2);

};
greet('comoestas',' pura vida');




console.log(['6' , '7', '8'].reverse());
/* se usa para declarar Metodo*/



function prueba(){
    var volver ='si claro';
    var acumular= '';
   
//for(var i = volver; i >= 0 ;i--){
for(var i=0;i < volver.length;i++){
// resultado2 += resultado[i];
acumular = acumular + " "+volver.charAt(i);

console.log(acumular);

};

  console.log(acumular);
};







///Codigo JS de Materias.HTML


     













     // INDEX HTML CODE///////// INDEX HTML CODE//////// INDEX HTML CODE////// INDEX HTML CODE/

     
function imprimir(){
    var texto1 = document.getElementById('text1').value;
    var texto2 = document.getElementById('text2').value;

  // alert(texto1 + " "+ texto2);


   document.getElementById('text3').value= texto1+" "+texto2;
   
 // alert(total);

};



function multiplicacion(){

   
var num1 =parseInt(document.getElementById("txt1").value);

var num2 =  parseInt(document.getElementById("txt2").value);

var total = num1 * num2;


parseInt(document.getElementById("txt3").value = total);

};

function alrevez(){

   var resultado = document.getElementById("convert").value;
 

   
   var resultado2 =  '';

   //for(var i=0;i < resultado.length;i++){
       for(var i = resultado.toString().length-1; i >= 0 ;i--){
  
   resultado2 += resultado.charAt(i);
 };

   document.getElementById("imprimir").value =  resultado2;

};


   function prueba(){
       var volver ='si claro';
       var acumular= '';
      
 for(var i = volver.length-1; i >= 0 ;i--){
   //for(var i=0;i < volver.length;i++){
  // resultado2 += resultado[i];
   acumular += volver.charAt(i);
 };
 
     alert(acumular);
   };

















   ////// calculadora para manana /////////////////

document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("s").addEventListener("click",suma);
document.getElementById("r").addEventListener("click",resta);
document.getElementById("d").addEventListener("click",division);
document.getElementById("m").addEventListener("click",multiplicacion);
document.getElementById("sr").addEventListener("click",showResult);
document.getElementById("c").addEventListener("click",limpiar);
debugger;

function n1(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n1").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;

}

function n2(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n2").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;

}
function n3(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n3").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;

}
function n4(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n4").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;

}
function n5(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n5").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;

}
function n6(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n6").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;

}
function n7(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n7").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;

}
function n8(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n8").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;

}
function n9(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n9").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;

}
function n0(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("n0").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
  

}

function suma(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("s").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;

}
function resta(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("r").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
  
}
function division(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("d").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
  
}
function multiplicacion(){
  let actual= document.getElementById("resultado").innerHTML;
  let sumado = document.getElementById("m").innerHTML;
  document.getElementById("resultado").innerHTML = actual + sumado;
  
}

function showResult(){
  let actual = document.getElementById("resultado").innerHTML;
  let suma = actual.indexOf("+");
  let resta = actual.indexOf("-");
  let div = actual.indexOf("/");
  let mul = actual.indexOf("*");

  if(suma !== -1){
   arr = actual.split("+",2);
   res = parseInt(arr[0]) + parseInt(arr[1]);
   document.getElementById("resultado").innerHTML = res;

  }else if(resta !== -1){
    arr = actual.split("-",2);
   res = parseInt(arr[0]) - parseInt(arr[1]);
   document.getElementById("resultado").innerHTML = res;

  }else if(div !== -1){
    arr = actual.split("/",2);
    res = parseInt(arr[0]) / parseInt(arr[1]);;
   document.getElementById("resultado").innerHTML = res;

  }else if(mul !== -1){
    arr = actual.split("*",2);
    res = parseInt(arr[0]) * parseInt(arr[1]);;
   document.getElementById("resultado").innerHTML = res;
  }

}

function limpiar(){
  var limpia = document.getElementById("resultado");
  limpia.innerHTML = " ";
 l
}




   ////////////////////////////////////////

   // Hoy empezaremos otro ejercicio Java, con repositorio git//

  