function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var cantidadDias;

//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			cantidadDias = 	"Este mes tienen 30 dias";
			break;
		case "Febrero":
			cantidadDias = "Este mes tiene 28 dias";
			break;
		default:
			cantidadDias = "Este mes tiene 31 dias";
			break;	
		
	}

	alert(cantidadDias);
	



}//FIN DE LA FUNCIÓN