<?php

$errors = [];
$data = [];

if (empty($_POST['name'])) {
    $errors['name'] = 'Name is required.';
}

if (empty($_POST['email'])) {
    $errors['email'] = 'Email is required.';
}

if (empty($_POST['phone'])) {
    $errors['phone'] = 'Phone number is required.';
}


if (isset($_POST['phone'])) {
    $to = "contact@stokdirect.africa"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Callback Request";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following, please call on: " . "\n\n" . $_POST['phone'];
    $message2 = "Here is a copy of your message, please call  " . $name . "\n\n " . $_POST['phone'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;

    if (!empty($errors)) {
        $data['success'] = false;
        $data['errors'] = $errors;
    } else {
        $data['success'] = true;
        mail($to,$subject,$message,$headers);
        mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
        //echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
        // You can also use header('Location: thank_you.php'); to redirect to another page.
        $data['message'] = "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    }
    
    echo json_encode($data);

    
    }
?>
