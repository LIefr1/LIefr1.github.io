<?php
$name = $_POST['full-name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];


const TO = 'scheremiskin2004@gmail.com';
const subject = 'Job offer';

$message = "$name from company $company, send his contact info: \n
email-$email\n
phone-$phone"; 

mail(TO,subject, $message);

?>
