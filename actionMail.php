<?php 
	$name = $_POST['name'];
	$email = $_POST['email'];
    $phone = $_POST['phone'];
    $bussines = $_POST['business'];
	$mensaje = $_POST['message'];

    $asunto = $name.' | '.$bussines.' | '.$email.' | '.$phone;
    
	mail('contacto@serviciosrubber.com.mx', $asunto, $mensaje);

    header('Location: ./contact.html');
 ?>