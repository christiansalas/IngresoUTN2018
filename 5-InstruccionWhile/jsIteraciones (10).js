function Mostrar()
{
var contadorNeg =0;
var contadorPos = 0;
var contadorCeros = 0;
var contadorPares = 0;
var acumuladorPos = 0;
var acumuladorNeg = 0;
var diferencia ;
var seguir;
var numero;
var promedioPos;
var PromedioNeg;

do 
{

numero = parseInt(prompt ("Ingrese un numero ..."));

 if (numero >0)
 {
contadorPos ++
acumuladorPos = acumuladorPos + numero;

 }
else if ( numero <o)
 {
	 contadorNeg++;
 acumuladorNeg = acumuladorNeg + numero;

}
else 
{
	contadorCeros ++ ;
}
if (numero % 2 == 0)
{

contadorPares ++;

seguir = prompt("Desea Continuar??");
}while (seguir == "s")


{
promedioPos = acumuladorPos / contadorPos
PromedioNeg = acumuladorNeg / contadorNeg
diferencia = contadorPos - contadorNeg

document.write ("1-Suma de los negativos: "+ acumuladorNeg + "<br/>");
document.write ("2-SUma de los positivos:"+ acumuladorPos +"<br/>");
document.write ("2-Cantidad  de los positivos:"+ contadorPos +"<br/>");
document.write ("2-Cantidad de los negativos:"+ contadorNeg +"<br/>");
document.write ("2-Cantidad de Ceros:"+ contadorCeros +"<br/>")
document.write (" cantidad de numeros pares : "+contadorPares + "<br/>");
document.we

}//FIN DE LA FUNCIÓN