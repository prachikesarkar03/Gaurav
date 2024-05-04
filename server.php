 <!-- <?php -->
// session_start();
// Initializing the variables
// $name="";
// $date_of_birth="";
// $email="";
// $username="";
// $password="";
// $confirm_password="";
// Connecting to the database
// $db= mysqli_connect('localhost','root','',resume_creator);
// register
// if(isset($_POST['reg_user'])){
//     $name=mysqli_real_escape_string($db,$_POST['name']);
//     $date_of_birth=mysqli_real_escape_string($db,$_POST['date_of_birth']);
//     $email=mysqli_real_escape_string($db,$_POST['email']);
//     $password=mysqli_real_escape_string($db,$_POST['password']);
//     $confirm_password=mysqli_real_escape_string($db,$_POST['confirm_password']);
//     $username=mysqli_real_escape_string($db,$_POST['username']);

// }
// form validation
// if(empty($name)){array_push($errors,"Name is required");}
// if(empty($date_of_birth)){array_push($errors,"Date of Birth is required");}
// if(empty($email)){array_push($errors,"Email is required");}
// if(empty($username)){array_push($errors,"Username is required");}
// if(empty($password)){array_push($errors,"Password is required");}
// if($password!=$confirm_password){array_push($errors,"Passwords don't match");}

// $query = "INSERT INTO register(name, date_of_birth, email, username, password, confirm_password)
// VALUES('$name', '$date_of_birth', '$email', '$username', '$hashed_password', '$confirm_password')";
// mysqli_query($db,$query);
// header('job_openings.html');



<?php
session_start();

$errors = array(); // Initialize errors array

// Initializing the variables
$name = "";
$date_of_birth = "";
$email = "";
$username = "";
$password = "";
$confirm_password = "";

// Connecting to the database
$db = mysqli_connect('localhost', 'root', '', 'resume_creator');

// Register
if (isset($_POST['submit_button'])) {
    $name = mysqli_real_escape_string($db, $_POST['name']);
    $date_of_birth = mysqli_real_escape_string($db, $_POST['date_of_birth']);
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
    $confirm_password = mysqli_real_escape_string($db, $_POST['confirm_password']);
    $username = mysqli_real_escape_string($db, $_POST['username']);

    // Form validation
    if (empty($name)) {
        array_push($errors, "Name is required");
    }
    if (empty($date_of_birth)) {
        array_push($errors, "Date of Birth is required");
    }
    if (empty($email)) {
        array_push($errors, "Email is required");
    }
    if (empty($username)) {
        array_push($errors, "Username is required");
    }
    if (empty($password)) {
        array_push($errors, "Password is required");
    }
    if ($password != $confirm_password) {
        array_push($errors, "Passwords don't match");
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert data into the database if there are no errors
    if (count($errors) == 0) {
        $query = "INSERT INTO register(name, date_of_birth, email, username, password, confirm_password)
                  VALUES('$name', '$date_of_birth', '$email', '$username', '$hashed_password', '$confirm_password')";
        mysqli_query($db, $query);
        
        // Redirect to a success page after registration
        header('Location: success_page.php');
        exit(); // Ensure script stops executing after redirection
    }
}
?>
