function mostrar()
{
	var horaIngresada;
	var mensaje;

	horaIngresada = laHora.value;
	horaIngresada = parseInt(horaIngresada);

	switch(horaIngresada)
	{
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			mensaje = "Es de tarde";
			break;
		default:
			if(horaIngresada<0 || horaIngresada>24)
			{
				mensaje = "Hora invalida";
			}else 
				{
					if(horaIngresada<6)
					{
						mensaje = "Es de noche, a dormir";
					}else
						{
							mensaje = "Es de noche";
						}	
				}		
	}
	alert(mensaje);


}
