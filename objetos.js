//Alien Code
//JS Code de Informatica.html
function Circle(radius){
   // console.log('this', this);
    this.radius= radius;    
    this.draw = function (){
        console.log('draw');
    }
}

const another= new Circle(1);
    console.log(another);


    






    function escoger(){
  var uno = document.getElementById('cbox1').checked;
  var dos = document.getElementById('cbox2').checked;
  var tres = document.getElementById('cbox3').checked;
  var cuatro = document.getElementById('cbox4').checked;
  var cinco = document.getElementById('cbox5').checked;
  var seis = document.getElementById('cbox6').checked;
  var siete = document.getElementById('cbox7').checked;
  var ocho = document.getElementById('cbox8').checked;
  var nueve = document.getElementById('cbox9').checked;

  // precios 
  var progra1 = 70000;
  var progra2 = 75000;
  var progra3 = 80000;
  var progra4 = 80000;
  var SO1 = 80000;
  var SO2 = 85000;
  var BD = 80000;
  var BD2 = 90000;
  var calculo1 = 85000;
  var total= 0;

var mensaje = "";
        if (uno == true){
    //alert('checkbox1 esta seleccionado');
    mensaje +=  'Progra 1 '+ ' el precio de la materia es  ' + '₡'+progra1.toString() + '<br>';
     total+= progra1;

    }
    if (dos == true){
    mensaje +=  'Progra 2 '+ ' el precio de la materia es  ' + '₡'+progra2.toString() + '<br>';
    total+= progra2;
    }
    if (tres == true){
        mensaje +=  'Progra 3 '+ ' el precio de la materia es  ' + '₡'+progra3.toString() + '<br>';
        total+= progra3;
        }
        if (cuatro == true){
            mensaje +=  'Progra 4 '+ ' el precio de la materia es ' + '₡'+progra4.toString() + '<br>';
            total+= progra4;
            }
            if (cinco == true){
                mensaje +=  'Sistemas Operativos 1 '+ ' el precio de la materia es ' + '₡'+SO1.toString() + '<br>';
                total+= SO1;
                }
                if (seis == true){
                    mensaje +=  'Sistemas Operativos 2 '+ ' el precio de la materia es ' + '₡'+SO2.toString() + '<br>';
                    total+= SO2;
                    }
                    if (siete == true){
                        mensaje +=  'Bases de Datos 1 '+ ' el precio de la materia es ' + '₡'+BD.toString() + '<br>';
                        total+= BD;
                        }
                        if (ocho == true){
                            mensaje +=  'Bases de Datos 2 '+ ' el precio de la materia es  ' + '₡'+BD2.toString() + '<br>';
                            total+= BD2;
                            }
                            if (nueve == true){
                                mensaje +=  'Calculo 1 '+ ' el precio de la materia es ' + '₡'+calculo1.toString() + '<br>';
                                total+= calculo1;
                                }
    document.getElementById('resultado').innerHTML = mensaje ;
    document.getElementById('totalcuatri').innerHTML = 'El total a pagar es ' + '₡'+total.toString();
}
    





    
    function generarPDF(){
        var doc = new JSON();

        doc.text(document.getElementById(cbox1))

         doc.save('document.pdf')
    }

      




