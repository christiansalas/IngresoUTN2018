//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho;
    var largo;
    var perimetro
    ancho = parseInt(document.getElementById("ancho").value);
    largo = parseInt(document.getElementById("largo").value);

perimetro = ((largo * ancho)*6)

alert ( "se necesitan  " + perimetro + "  metros de alambre" );

}

