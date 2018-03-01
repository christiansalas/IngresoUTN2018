function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while (contador <5 ) 
	{
	 numero = parseInt(prompt("Ingrese un unmero: "));
	 contador = contador + 1;
	 acumulador = acumulador + numero;
		
	}

promedio = acumulador / contador;


document.getElementById('suma').value=("La suma es: ") + acumulador;


document.getElementById('promedio').value=("El promedio es: ") + promedio;




}//FIN DE LA FUNCIÓN