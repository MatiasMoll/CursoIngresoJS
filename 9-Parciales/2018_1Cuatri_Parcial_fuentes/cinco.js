function mostrar()
{
	var precioHabitacion;
	var precioFinal;
	var tipoDePago;
	var promocion;
	var descuento;

	precioHabitacion = prompt("Ingrese el valor de la habitacion: ");
	tipoDePago = prompt("Ingrese el tipo de pago");
	promocion = prompt("Ingrese su promocion");
	

	precioHabitacionEnPesos = parseInt(precioHabitacion);
	

	switch(tipoDePago)
	{
		case "Visa":
		case "MercadoPago":
			descuento = 0.90;
			break;
		case "PayPal":
			switch(promocion)
			{
				case "Todo incluido":
					descuento = 0.75;
					break;
				default:	
					descuento = 0.85;
					break;

			}
		break;	
		case "Efectivo":
			switch(promocion)
			{
				case "Todo incluido":
					descuento = 0.65;			
					break;
				case "Solo desayuno":
					descuento = 0.70;
					break;
				default:
					descuento = 0.80;
					break;			
			}
		break;
		default:
			descuento = 0.95;
			break;		

	}

	precioFinal = precioHabitacion * descuento;
	alert("El precio por la habitacion pedida es: "+precioFinal);

}