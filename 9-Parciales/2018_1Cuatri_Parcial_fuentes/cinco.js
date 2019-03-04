function mostrar()
{
	var planeta;
	var mensaje;

	planeta = prompt("Ingrese un planeta: ");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			mensaje = "Aca hace mas calor";
			break;
		case "tierra":
			mensaje = "Aca vivimos";
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			mensaje = "Aca hace mas frio";
			break;
		default:
			mensaje = "Planeta invalido, reintente";
			break;
	}
	alert(mensaje);	
}