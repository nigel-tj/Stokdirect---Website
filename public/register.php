<?php

$errors = [];
$data = [];

if (empty($_POST['first_name'])) {
    $errors['name1'] = 'First Name is required.';
}

if (empty($_POST['last_name'])) {
    $errors['name2'] = 'Last Name is required.';
}


if (empty($_POST['email'])) {
    $errors['email'] = 'Email is required.';
} else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Email is invalid';
}

if (empty($_POST['phone'])) {
    $errors['phone'] = 'Phone number is required.';
}

if (empty($_POST['registration_type'])) {
  $errors['registration_type'] = 'Select a role to register as.';
}


if (isset($_POST['phone'])) {
    $to = "contact@stokdirect.africa"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['first_name'];
    $subject = "Registration Request";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following, " . "\n\n Phone: " . $_POST['phone'] . "\n\n Registration role: " . $_POST['registration_type'];
    $message2 = "Here is a copy of your message,  " . $name . "\n\n " . $_POST['phone'] . "\n\n Registration role:" . $_POST['registration_type'] ;

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
        $data['message'] = "Mail Sent. <br/>\n Thank you " . $name . ", we will contact you shortly.";
    }
    
    echo json_encode($data);

    
    }
?>
