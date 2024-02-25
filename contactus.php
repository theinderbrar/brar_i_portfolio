<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = validateText($_POST["name"]);
    $name1 = validateText($_POST["name1"]);
    $email = validateText($_POST["email"]);
    $subject = "";
    $message = validateText($_POST["message"]);
    $to = "inderwork0@gmail.com";
    $subject = "New Contact ";
    $headers = "From: $email \r\n";
    $headers .= "Reply-To: $email \r\n";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Subject: $subject\n";
    $email_content .= "Message:\n$message\n";

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Please enter correct E-mail id.";
        exit();
    }
 
    if (empty($name) || empty($name1) || empty($email) || empty($message)) {
        echo "All fields are mandatory.";
        exit();
    }
 
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Your message has been sent successfully!";
    } else {
        echo "Failed to send the message";
    }
}

function validateText($data)
{
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    $data = trim($data);
    return $data;
}
