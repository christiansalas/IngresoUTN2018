function Mostrar()
{

	//var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var acumulador=0;
	var numero;
	flag=0;
	

	do
	{
	 
	numero = parseInt(prompt("Ingrese un unmero: "));
	if (numero>0)
     {
           positivo = positivo + numero
	 }
	
	 else
	{
		   negativo = negativo * numero
		   //contador ++;
		   flag = 1

	}

	respuesta = prompt("Quiere continuar? (si o no) ")

    } while (respuesta == "si");

//if (contador ==0)
if(flag == 1)
{
	negativo=0
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN