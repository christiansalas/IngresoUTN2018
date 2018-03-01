function Mostrar()
{
var numero;
var EsPrimo = true

numero = parseInt(prompt("Ingrese un numero"));

for (var i = 2 ;i < numero   ; i++)

{

if (numero % i ==0)
EsPrimo = false 
break ;
}

if (EsPrimo)

{
alert( numero + "es primo");

}
else 
{

    alert (numero + "no es primo");
}

}//FIN DE LA FUNCIÓN