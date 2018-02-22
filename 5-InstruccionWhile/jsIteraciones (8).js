function Mostrar()
{

	
	var positivo=0;
	var negativo=1;
	flag = 0;

	var numero;
 	var respuesta;
 do
 {
    numero = parseInt(prompt("Ingrese  un numero"));
 if (numero >0)
 
  {
	 positivo = positivo + numero

  
  }
 
	else

{	negativo = negativo* numero

 flag = 1

}
 

respuesta = prompt( "Desea continuar???");

 }while (respuesta == "si"  );

 


if (flag ==1)
{
	negativo = 0;

}
document.getElementById('producto').value=negativo;
document.getElementById('suma').value=positivo;



}//FIN DE LA FUNCIÓN