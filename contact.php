<?php
if(isset($_POST['submit'])){
    $to = "info@sisotech.in"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also redirect to a thank you page
    // header('Location: thank_you.php');
    }
?>
<?php include 'includes/header.php'; ?>

<div class="container">
    <h1>Contact Us</h1>
    <p><strong>Address:</strong> 206, Phoebusin, K-12, Crops Arched, Malviya Marg, C-Scheme, Jaipur, Raj. 302001</p>
    <p><strong>Email:</strong> info@sisotech.in</p>
    <p><strong>Phone:</strong> +91 98765 43210</p>

    <form action="contact.php" method="post">
        <div>
            <label>Name</label>
            <input type="text" name="name" required>
        </div>
        <div>
            <label>Email</label>
            <input type="email" name="email" required>
        </div>
        <div>
            <label>Message</label>
            <textarea name="message" required></textarea>
        </div>
        <button type="submit" name="submit">Send</button>
    </form>
</div>

<?php include 'includes/footer.php'; ?>