function mostrar()
{	
	var numeroIngresado;
	var contador;

	numeroIngresado = prompt("Ingrese un numero:");
	numeroIngresado = parseInt(numeroIngresado);
	
	for(contador=numeroIngresado;contador>1;contador--)
	{
		console.log(contador);

	}		
}