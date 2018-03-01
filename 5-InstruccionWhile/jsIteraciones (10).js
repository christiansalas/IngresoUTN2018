function Mostrar()
{
/*
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/

var contadorNeg=0;
var contadorPos=0;
var contadorCeros=0;
var contadorPares=0;
var acumuladorPos=0;
var acumuladorNeg=0;
var diferencia;
var seguir;
var numero;
var promedioPos=0;
var promedioNeg=0;


do
{
numero = parseInt(prompt ("Ingrese un numero"));

if (numero>0)
{
	contadorPos = contadorPos + numero
	acumuladorPos = acumuladorPos + numero
}

else if (numero<0)
{
	contadorNeg =  contadorNeg + numero
	acumuladorNeg = acumuladorNeg + numero
}

else
{
	contadorCeros++;
}

if (numero / 2 ==0)
{
	contadorPares++;
}

seguir = prompt("desea continuar? ");
}while (seguir == "si");


if (numero !=0)
{
	promedioPos = acumuladorPos / contadorPos
}

if (numero !=0)

{
	promedioNeg = acumuladorNeg / contadorNeg
}

diferencia = acumuladorPos - acumuladorNeg


/* 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).*/

/*document.write("1-Suma de los negativos.                 " + acumuladorNeg +"<br/>");
document.write("2-Suma de los positivos.                 " + acumuladorPos +"<br/>");
document.write("3-Cantidad de positivos                  " + contadorPos +"<br/>");
document.write("4-Cantidad de negativos.                 " + contadorNeg +"<br/>");
document.write("5-Cantidad de ceros.                     " + contadorCeros +"<br/>");
document.write("6-Cantidad de números pares              " + contadorPares +"<br/>");
document.write("7-Promedio de positivos.                 " + promedioPos +"<br/>");
document.write("8-Promedios de negativos.                " + promedioNeg +"<br/>");
document.write("9-Diferencia entre positivos y negativos." + diferencia +"<br/>");*/
alert(("1-Suma de los negativos.                 " + acumuladorNeg + "2-Suma de los positivos.                 " + acumuladorPos )

	


}//FIN DE LA FUNCIÓN