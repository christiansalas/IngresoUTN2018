function Mostrar()
{

var numero;
var contadorPar =0;
numero = parseInt(prompt("Ingrese un Numero: "));


for (var i = 1 ;i <= numero   ; i++      )
{

if ( i % 2==0)
{
contadorPar++
console.log (i);
}

}

console.log("Se encontraron" + contadorPar+ " Numeros pares")
}//FIN DE LA FUNCIÓN