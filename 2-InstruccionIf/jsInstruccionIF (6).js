function Mostrar()
{
//tomo la edad  

var edad;

edad = document.getElementById ("edad").value;

if (edad<13)
{
alert ("Usted es un niño");


}
else if (edad >= 18)
{

    alert ("USted es mayor");

}
else
{

    alert("usted es adolescente");


}
}//FIN DE LA FUNCIÓN