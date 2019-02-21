function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta ="si";

	while(respuesta=="si")
	{
		contador += 1;
		numero = prompt("Ingrese el "+contador+" numero");
		numero = parseInt(numero);
		acumulador+=numero;
		respuesta= prompt("Desea seguir ingresando?");
		
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN