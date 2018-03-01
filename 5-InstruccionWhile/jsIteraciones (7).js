function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var respuesta


	do
	{
	 numero = parseInt(prompt("Ingrese un unmero: "));
	 contador = contador + 1;
	 acumulador = acumulador + numero;
	 respuesta = prompt("Quiere continuar? (si o no) ")

	} while (respuesta == "si");


promedio = acumulador / contador;



document.getElementById('suma').value=("La suma es: ") + acumulador;


document.getElementById('promedio').value=("El promedio es: ") + promedio;



}//FIN DE LA FUNCIÓN