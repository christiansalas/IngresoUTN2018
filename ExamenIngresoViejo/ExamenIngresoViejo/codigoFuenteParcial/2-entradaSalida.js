//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var producto; 
    importe =prompt(" Ingrese un importe");
  producto = importe * 1.21


  document.getElementById("importe").value =("El producto final es $")+ producto;
  
    
}

