//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
  var venta;
   var mayorventa;
    var menorventa;
       var flag = 0;




 

 for (var i =1;i<=7;i++)
 {
 venta  = parseFloat(prompt("Ingrese venta:   "));
 while  (venta <=0)
 
{
venta = parseFloat(prompt("Error. Las ventas no puede ser >=0.  Reingrese venta :..."))
}
if (venta >mayorventa || flag ==0)
{

mayorventa =venta;

}
if (venta< menorventa || flag == 0)
{

    menorventa = venta
    flag = 1;

}
 }

alert( "mayor importe de venta es : "+ mayorventa + "Menor importe de venta es :"+ menorventa );
}
