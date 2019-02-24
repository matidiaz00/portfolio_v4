<?php

	//echo "Ruta del htpasswd: ".$_SERVER['DOCUMENT_ROOT'];

	// Obtiene los datos del formulario y decodifica el json
	$_POST = json_decode(file_get_contents('php://input'), true);

	// Preparando el cuerpo del mensaje
	$Body .= "Nombre: ";
	$Body .= "\n";
	$Body .= $_POST['name'];
	$Body .= "\n";
	$Body .= "\n";

	$Body .= "Correo: ";
	$Body .= "\n";
	$Body .= $_POST['email'];
	$Body .= "\n";
	$Body .= "\n";

	$Body .= "Mensaje: ";
	$Body .= "\n";
	$Body .= $_POST['message'];
	$Body .= "\n";
	$Body .= "\n";

	// Enviando el formulario
	mail("info@matidiaz.com.ar", "asunto de prueba", $Body, "From: ".$_POST['correo']);

	echo 'holaaaaaaaa'

?>