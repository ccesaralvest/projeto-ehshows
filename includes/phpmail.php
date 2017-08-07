<?php
require_once('phpmailer/class.phpmailer.php');
class Phpmail {

  function sendEmail($mensagem, $assunto, $destinatarios, $destinatariosCO = array(), $arquivos = null) {
    
    $mail = new PHPMailer();
    $mail->IsSMTP();                                  // telling the class to use SMTP
    $mail->SMTPDebug = 0;                             // enables SMTP debug information (for testing)    // 1 = errors and messages      // 2 = messages only
    $mail->SetLanguage("br", "phpmailer/language/");
    $mail->SMTPAuth = true;                           // enable SMTP authentication
    $mail->SMTPSecure = 'tls';                      // SSL REQUERIDO pelo GMail
    $mail->Host = "XXXXXXXX;                 // sets the SMTP server
    $mail->Port = 587;                                // set the SMTP port
    $mail->Username = "XXXXXXX"; //"contato@Acirp.com";    // SMTP account username
    $mail->Password = "XXXXXXX";                     // SMTP account password
    $mail->SetFrom("XXXXXXXXXXX", "[Eshows] - Contato"); // de
    $mail->IsHTML(true); 
    $mail->CharSet = 'utf-8';

    if (count($destinatarios) > 0) {
      foreach ($destinatarios as $destinatario) {
        $mail->AddAddress($destinatario["email"], $destinatario["nome"]);
      }
      if (count($destinatariosCO) > 0) {
        foreach ($destinatariosCO as $destinatarioCO) {
          $mail->AddBCC($destinatarioCO["email"], $destinatarioCO["nome"]);
        }
      }
    }

    if($arquivos) {
      foreach ($arquivos as $arquivo) {
        $mail->addAttachment($arquivo["caminho"]); // Add attachments
      }
    }

    $mail->Subject = $assunto;
    $mail->MsgHTML(nl2br($mensagem));
    return $mail->Send();
  }

}
?>