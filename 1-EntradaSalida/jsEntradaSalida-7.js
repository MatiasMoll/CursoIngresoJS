/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	

function sumar()
{	
	var primerNumero;
	var segundoNumero; 
	var resultado;

	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;

	primerNumeroEntero = parseInt(primerNumero);
	segundoNumeroEntero = parseInt(segundoNumero);


	resultado = primerNumeroEntero + segundoNumeroEntero;
	alert("La suma es " + resultado);
}

function restar()
{
	var numero1;
	var numero2; 
	var resultado;

	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;

	resultado = primerNumero - segundoNumero;
	
	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	var numero1;
	var numero2; 
	var resultado;

	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;

	resultado = primerNumero * segundoNumero;

	alert("La multiplicacion es " +resultado);
}

function dividir()
{
	var numero1;
	var numero2; 
	var resultado;

	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;

	resultado = primerNumero / segundoNumero;

	alert("La division es " +resultado);
}

