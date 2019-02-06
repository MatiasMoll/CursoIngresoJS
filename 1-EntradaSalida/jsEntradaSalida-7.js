/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	var numero1 = parseInt(numeroUno.value);
	var numero2 = parseInt(numeroDos.value);
	var resultado;

function sumar()
{	
	resultado = numero1 + numero2;
	alert("La suma es " + resultado);
}

function restar()
{
	resultado = numero1 - numero2;
	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	resultado = numero1 * numero2;
	alert("La multiplicacion es " +resultado);
}

function dividir()
{
	resultado = numero1 / numero2;
	alert("La division es " +resultado);
}

