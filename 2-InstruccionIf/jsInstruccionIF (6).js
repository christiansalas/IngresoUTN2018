function Mostrar()
{
//tomo la edad  

var edad

edad = document.getElementById("edad").value;

if (edad >=13 && edad <=17)
{
    alert ("Es ADOLESCENTE");
}

else 
{
   if (edad > 17)
   { 
    alert ("Es MAYOR de edad");
   }
   else
   { 
   
    alert ("Es MENOR de edad");
   
   }



}




}//FIN DE LA FUNCIÓN