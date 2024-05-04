<?php
    $name = $_POST['name'];
    $date_of_birth = $_POST['date_of_birth'];
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    //database connnection
    $conn = new mysqli('localhost','root','','resume_creator');
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }
    else{
    $stmt = $conn->prepare("insert into register(name,date_of_birth,email,username,password,confirm_password)
        values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $name, $date_of_birth, $email, $username, $password, $confirm_password);
    $stmt->execute();
    echo "<script> alert('Register Successfully');
    document.location.href = 'login.html';
    </script>";
    $stmt->close();
    $conn->close();
    }
?>