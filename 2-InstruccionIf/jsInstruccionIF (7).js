function Mostrar()
{
//tomo la edad  

var edad
var estadocivil

edad = document.getElementById("edad").value;

estadocivil = document.getElementById("estadoCivil").value;


// el if con dos condiciones 

if (estadocivil  != "Soltero" && edad <18)

{
    alert ("Es muy pequeño para NO ser soltero") 
}




}//FIN DE LA FUNCIÓN