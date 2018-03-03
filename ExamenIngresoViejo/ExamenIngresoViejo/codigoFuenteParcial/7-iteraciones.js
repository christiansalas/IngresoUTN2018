//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nota;
    var sexo;
     var acumuladornota =0;
     var promedio;
     var notabaja ;
     var contadorvar6= 0  ;
    
     var flag = 0;
 
 
 
 
  
 
  for (var i =1;i<=6;i++)
  {
  nota  = parseFloat(prompt("Ingrese un numero entre 0 y 10   "));
  while  (nota <0 || nota >10)
  
 {
 nota = parseFloat(prompt("Error. reeingrese un numero entre 0 y 10:..."))

 }
 sexo = prompt ("ingrese un sexo...");
 while (sexo != 'f'&& sexo != 'm')
 {

    sexo = prompt ("Error. El sexo debe ser f o m. Reingrese sexo");

 }
 acumulador = acumulador + nota ;
 if (nota < notabaja || flag ==0)
{

    notabaja = not a;
    flag = 1;

}


if (sexo =='m'&& nota >= 6)
{
    contadorvar6++;
}

promedio = acumulador / 6 ;
alert ("a\) Promedio de notas " + promedio.toFixed(2) + "\nb\) La nota mas baja :   "+ notabaja + "\nc\) )"