function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var resultado;

	nota = Math.floor(Math.random()*10)+1;
	if(nota<8)
	{
		resultado = "Vamos la proxima se puede";
		if(nota>4)
		{
			resultado = "Aprobo";
		}
	}else
	{
		resultado = "Excelente";
	}
	alert(resultado);

}//FIN DE LA FUNCIÓN