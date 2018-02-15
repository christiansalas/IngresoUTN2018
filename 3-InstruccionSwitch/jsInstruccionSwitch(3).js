function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
    case "Febrero":
    alert ("No tiene mas de 29 dias");break;
default :

    alert("este mes tiene mas de 30 dias");break;

}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN