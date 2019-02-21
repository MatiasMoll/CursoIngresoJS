function mostrar()
{

	var numero;
	var numeroEntero;

	numero = prompt("ingrese un número entre 0 y 10.");
	numeroEntero = parseInt(numero);
	

	while(numeroEntero < 0 || numeroEntero > 9 )
	{
		numeroEntero = parseInt(prompt("Numero invalido, reintente: "));
	}

	alert("Numero Validado"); 
}//FIN DE LA FUNCIÓN