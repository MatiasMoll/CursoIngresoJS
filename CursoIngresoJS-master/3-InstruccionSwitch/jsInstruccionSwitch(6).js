function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var laHoraEntero = parseInt(laHora);

if(laHoraEntero<=24 && laHoraEntero>=0)
{	
	switch (laHora)
	{
		case "7":
			alert("Es de mañana");
			break;

		case "8":
			alert("Es de mañana");
			break;

		case "9":
			alert("Es de mañana");
			break;

		case "10":
			alert("Es de mañana");
			break;

		case "11":
			alert("Es de mañana");
			break;

		case "12":
			alert("Es de Tarde");
			break;

		case "13":
			alert("Es de Tarde");
			break;

		case "14":
			alert("Es de Tarde");
			break;

		case "15":
			alert("Es de Tarde");
			break;

		case "16":
			alert("Es de Tarde");
			break;

		case "17":
			alert("Es de Tarde");
			break;

		case "18":
			alert("Es de Tarde");
			break;

		case "19":
			alert("Es de Tarde");
			break;

		default:
			alert("Es de noche");


	}
}else
{
	alert("La hora no existe");
}
}//FIN DE LA FUNCIÓN