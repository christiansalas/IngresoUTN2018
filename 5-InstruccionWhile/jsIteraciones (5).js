function Mostrar()
{

var sexo = prompt("ingrese f ó m .");


while (!(sexo=="f" || sexo =="m" )) //condicion que da F cuando el dato no es correcto. 
//while (sexo!="f" && sexo!="m" ) condicion que da true cuando el dato el valido.

{
sexo = prompt ("ingrese f ó m .")
}

if (sexo == "f")
{
sexo = "Femenino"

}
else
{
    sexo ="Maculino"
  
}


document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN