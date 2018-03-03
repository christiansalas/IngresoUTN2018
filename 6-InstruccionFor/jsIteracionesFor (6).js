    function Mostrar()
    {
    
        var numero;
        var contPares=0;
        numero = parseInt( prompt("ingrese un numero"))
    
    
    
        for (var i=1;i<=numero;i++ )
        {
               
            if (i % 2 == 0)
            {
                contPares++;
                console.log(i);
            }
        
        }
      
        console.log ("se encontraron" + contPares)
        
}//FIN DE LA FUNCIÓN