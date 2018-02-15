function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.floor(Math.random()*10)+1;

	if (aleatorio >= 9 && aleatorio <=10)
	{
		alert( aleatorio + "EXCELENTE");

	}
 else if (aleatorio > 4 && aleatorio < 9	)
{
	alert(aleatorio+"APROBO");

}
else
	
 alert (aleatorio + "Vamos la proxima se puede")

}//FIN DE LA FUNCIÓN