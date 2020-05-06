<?php
$name = $_POST['name'];
$email = $_POST['email'];
$mes = $_POST['mes'];
$text .= "Имя: $name \r\n"; 
$text .= "Почта: $email \r\n"; 
$text .= "Сообщение: $mes \r\n \r\n";
  if (!empty($name) && !empty($email) && !empty($mes)) 
    {
    $file = fopen ("mes.txt", "a+");
    fwrite ($file,$text);
    fclose ($file);
    }
?>