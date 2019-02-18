function mostrar()
{
	var hora;

	hora = prompt("Ingrese una hora");
	horaEntero = parseInt(hora);

	if(horaEntero < 0 || horaEntero > 24)
	{
		alert("Hora invalida");
	}	else if (horaEntero > 0 && horaEntero < 6)
		{
			alert("A dormir");
		}else
		{
			switch(horaEntero)
			{
				case 6:
					alert("Es de mañana");
					break;
				case 7:
					alert("Es de mañana");
					break;
				case 8:
					alert("Es de mañana");
					break;
				case 9:
					alert("Es de mañana");
					break;
				case 10:
					alert("Es de mañana");
					break;
				case 11:
					alert("Es de mañana");
					break;
				case 20:
					alert("Es de noche");
					break;
				case 21:
					alert("Es de noche");
					break;
				case 22:
					alert("Es de noche");
					break;
				case 23:
					alert("Es de noche");
					break;
				case 24:
					alert("Es de noche");
					break;	
				default:
					alert("Es de tarde");		
			}
		}


}
