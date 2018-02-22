function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	

 while ( contador < 5)
 {
 numero = parseInt(prompt("Ingrese  un numero"));
 
 contador = contador + 1;

 acumulador = acumulador + numero



 }

   promedio =acumulador /5;

	
document.getElementById('suma').value=("la suma acumulada es :")+acumulador;
document.getElementById('promedio').value=( "EL promedio es : ")+promedio;


}//FIN DE LA FUNCIÓN