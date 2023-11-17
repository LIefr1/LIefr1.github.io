<?php
// require_once 'sms.ru.php';

$name = $_POST['full-name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$message = "$name from company $company, send his contact info: \n
email-$email\n
phone-$phone"; 


// $sms = new SMSRU('390FBBFE-32DA-F9BD-6AB4-F7FE02133DC4');

// $data = new stdClass();
// $data->to = '79229174580';
// $data->text = $message;
// $data->from = "88002226095";
// $sms = $sms->send_one($data); 

file_put_contents("JobOffers/newOffer_$email.json", json_encode($message));

// if ($sms->status == "OK") { 
//     echo "Сообщение отправлено успешно. ";
//     echo "ID сообщения: $sms->sms_id. ";
//     echo "Ваш новый баланс: $sms->balance";
// } else {
//     echo "Сообщение не отправлено. ";
//     echo "Код ошибки: $sms->status_code. ";
//     echo "Текст ошибки: $sms->status_text.";
// }



?>