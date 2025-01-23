<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set response header
header("Content-Type: application/json");

// Database connection parameters
$host = "localhost";
$dbname = "invigouz_loginInfo";
$username = "invigouz_loginInfo";
$password = "Invigo2520";

// Connect to the database
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();
}

// Retrieve form data from POST request
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['[phone]']);
$insta = htmlspecialchars($_POST['insta']);
$compName = htmlspecialchars($_POST['compName']);

// Validate the inputs (basic example)
if (empty($name) || empty($phone) || empty($insta)) {
    http_response_code(400); // Bad Request
    echo json_encode(["error" => "All fields are required."]);
    exit();
}

// Prepare SQL query to prevent SQL injection
$sql = "INSERT INTO user_info (name, phone, insta,compName) VALUES (?, ?, ?,?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    http_response_code(500);
    echo json_encode(["error" => "Database error: " . $conn->error]);
    exit();
}

$stmt->bind_param("sss", $name, $phone, $insta,$compName);

// Execute the query
if ($stmt->execute()) {
    http_response_code(200); // OK
    echo json_encode(["success" => "Data submitted successfully!"]);
} else {
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "Error saving data: " . $stmt->error]);
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>