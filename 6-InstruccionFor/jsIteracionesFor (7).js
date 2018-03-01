function Mostrar()
{
var numero;
var contadordiv =0;
numero = parseInt(prompt("Ingrese un Numero: "));


for (var i = 1 ;i <= numero   ; i++      )
{

if ( numero % i==0)
{
contadordiv++
console.log (i);
}

}

console.log("Se encontraron" + contadordiv+ " DIvisores")



}//FIN DE LA FUNCIÓN