<?php

require_once("phpmail.php");

$check = filter_input(INPUT_POST, "check", FILTER_SANITIZE_STRING);
$name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
$telefone = filter_input(INPUT_POST, "telefone", FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
$nomeArtisticoBanda = filter_input(INPUT_POST, "nomeArtisticoBanda", FILTER_SANITIZE_EMAIL);
$phpmail = new Phpmail();

$mensagem = 
	"<br />" . 
	"<b>Solicitação para:</b> " . $check . "<br />" . "<br />" .
	"<b>Nome:</b> " . $name . "<br />" . "<br />" .
	"<b>Telefone:</b> " . $telefone . "<br />" . "<br />" ;

$mensagem .=  ($nomeArtisticoBanda) ? "<b>Nome do Artista / Banda:</b> " . $nomeArtisticoBanda . "<br />" . "<br/>" : "";
	
$mensagem .= "<b>E-mail:</b> " . $email . "<br />" . "<br/>" ;

$destinatarios = array(
	array("nome" => "Octavio", "email" => "XXXXX"),
	array("nome" => "Octavio", "email" => "XXXXXXXX")
	//array("nome" => "Felipe", "email" => "felipe@vitrio.com.br")
);

/* Contato de copia */
$destinatariosCO = array(
	array("nome" => "Ehshows", "email" => "XXXXXXX")
);

$enviado = $phpmail->sendEmail($mensagem, "Novo Cadastro", $destinatarios, $destinatariosCO);

if($enviado) {
  echo json_encode(array("ok", "Em breve, entraremos em contato"));
} else {
  echo json_encode(array("error", "Ocorreu um erro ao enviar o contato. Tente novamente mais tarde.", "Dados smtp incorretos"));
}

?>