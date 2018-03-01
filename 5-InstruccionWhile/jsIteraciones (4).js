function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");


	while (!(numero >0  && numero <10))

	{

	numero = prompt("dato incorrecto")	
	}

	document.getElementById("numero").value = numero;

 alert ("dato correcto")

}//FIN DE LA FUNCIÓN