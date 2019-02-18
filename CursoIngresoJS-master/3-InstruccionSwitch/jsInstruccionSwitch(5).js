function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
var laHoraEntero = parseInt(laHora);


//alert (laHora);
//if(laHoraEntero<=24)
//{	
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

		default:
			alert("No es de mañana");				

	}
//}else
//{
//	alert("Por favor, ingrese una hora valida");
//}	



}//FIN DE LA FUNCIÓN