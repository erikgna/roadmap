<?php


if(isset($_POST['submit'])) {
    $name=$_POST['name'];
    $email=$_POST['email'];
    $banco=$_POST['banco'];

    $to='erikgnaa@gmail.com';
    $subject='deposito';
    $message = "Nome do Dominio: ".$name. "\n". "Email: " .$email. "\n". "Banco: ". $banco;
    $headers="De ". $email;

    if(mail($to, $subject, $message, $headers)) {
        echo "<h1>Sent Sucessfully! Thank you ". $email. "Blabla</h1>";
    }
    else {
        echo "Something went wrong.";
    }
}


?>