

<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define variables and initialize with empty values
    $name = $date_of_birth = $email = $username = $password = $confirm_password = "";
    
    // Include database configuration
    include 'db_config.php';
    
    // Function to sanitize and validate data
    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    
    // Sanitize and validate form data
    $name = test_input($_POST["name"]);
    $date_of_birth = test_input($_POST["date_of_birth"]);
    $email = test_input($_POST["email"]);
    $username = test_input($_POST["username"]);
    $password = test_input($_POST["password"]);
    $confirm_password = test_input($_POST["confirm_password"]);
    
    // Check if passwords match
    if ($password != $confirm_password) {
        die("Passwords do not match");
    }
    
    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    
    // Prepare and bind SQL statement
    $stmt = $conn->prepare("INSERT INTO register (name, date_of_birth, email, username, password) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $name, $date_of_birth, $email, $username, $hashed_password);
    
    // Execute the statement
    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $conn->error;
    }
    
    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
