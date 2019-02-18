function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var estacion;

	switch(mesDelAño)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			estacion =	"Ya pasamos el frio, ahora calor!!!";
			break;
		case "Julio":
		case "Agosto":
			estacion = "Abrigate que hace frio";
		default:
			estacion = "Falta para el invierno";	

	}

	alert(estacion);




}//FIN DE LA FUNCIÓN