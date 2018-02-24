function Mostrar()
{

	var menor;
	var mayor;
	var numero;
	var respuesta ='si';
 	//var contador = 0
flag = 0;



	 do
{
 numero = parseInt(prompt("Ingrese un Numero..."));
 //contador ++;

 //if (contador ==1)
//{

//	menor =  numero;
//	mayor = numero;


	
 if (numero> mayor || flag ==0)
{
	mayor = numero;

}

if (numero< menor || flag ==0)
{
menor = numero;

 flag = 1;
}
 respuesta = prompt ("Desea Continuar")	;
		

	}while (respuesta == "si");     
	
	
	document.getElementById("maximo").value=mayor;
	document.getElementById("minimo").value=menor;



}//FIN DE LA FUNCIÓN