function Mostrar()
{

	var contador=0;
	var acumulador=0;
	
	var respuesta = "si"

 do
 {
 numero = parseInt(prompt("Ingrese  un numero"));
 
 contador = contador + 1;

 acumulador = acumulador + numero

respuesta = prompt( "Desea continuar???");

 }while ( respuesta == "si"  );

 if ( respuesta !="si"&& respuesta != "NO")
 {

	aler("La respuesa ingresada es invalida");
	
 }

 
document.getElementById('suma').value=("la suma acumulada es :")+acumulador;
document.getElementById('promedio').value=( "EL promedio es : ")+acumulador/contador;


}//FIN DE LA FUNCIÓN