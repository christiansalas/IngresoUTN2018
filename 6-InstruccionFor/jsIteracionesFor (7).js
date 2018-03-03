function Mostrar()
{

    var numero;
    var contadordivisores =0;
    numero = parseInt( prompt("ingrese un numero"))



    for (var i=1;i<=numero;i++ )
    {
           
        if (!(numero % i == 0))
        {
            continue;
        }
        contadordivisores++;
        console.log(i);
    }
  
    console.log ("se encontraron" + contadordivisores)


}//FIN DE LA FUNCIÓN