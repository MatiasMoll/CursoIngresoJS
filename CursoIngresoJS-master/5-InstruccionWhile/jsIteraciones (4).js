function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	var numeroEntero = parseInt(numero);

	while(numeroEntero >= 9 || numeroEntero =< 0)
	{
		alert("No es un numero valido");
		numero = prompt("ingrese un número entre 0 y 10.");
	}

	alert("Numero Validado");



}//FIN DE LA FUNCIÓN