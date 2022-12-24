<?php
if(isset($_POST['submit'])){
    $to = "coderinsider06@gmail.com";



    $name = $_POST['name'];
    $email= $_POST['email'];
    $message= $_POST['message'];
    $headers = 'From: '.$email . "\r\n";


    $body = "name : ".$name. "\r\n" .
    		"Email : ".$email. "\r\n" .
    		"Message : " . $message;
    if(mail($to, $body , $headers)){
        echo "Mail Sent!";
    }else{
         echo "Failed To Send Mail";
    }
}

?>