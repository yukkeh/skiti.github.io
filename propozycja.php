<?php
$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Propozycja z formularza";
$to = "lukaszq@spoko.pl";
$message = $_POST["msg"];
$txt = "Imię " . $name . "\r\n" . "Email " . $from . "\r\n" . "Propozycja " . $message;
$headers = "From: " . $from . "\r\n";
$headers .= "Reply-to: " . $from . "\r\n";
$mail_status = mail($to, $subject, $txt, $headers);
if($mail_status){
    header("Location: /propozycje.html?mail_status=sent");
}else{
    header("Location: /propozycje.html?mail_status=error");
}