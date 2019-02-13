function mostrar()
{
	var planeta;

	planeta = prompt("Ingrese un planeta");
	
	switch (planeta)
	{
		case "mercurio":
			alert("Aca hace mas Calor");
			break;

		case "venus":
			alert("Aca hace mas calor");
			break;
			
		case "tierra";
			alert("Aca vivimos");
			break;

		default:
			alert("aca hace mas frio");

	}	
}
