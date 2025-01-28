<?php
// Enable error reporting for debugging
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database credentials (Change these to your actual values)
$servername = "localhost"; // Change if using a remote server
$username = "invigouz_loginInfo";
$password = "Invigo2520";
$database = "invigouz_loginInfo";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $database);

// Check if connection was successful
if ($conn->connect_error) {
    die(json_encode(["error" => "Database Connection Failed: " . $conn->connect_error]));
}

// Set response as JSON
header('Content-Type: application/json');

// Fetch data from the database
$sql = "SELECT * FROM RequestInfo ORDER BY created_at DESC";
$result = $conn->query($sql);

// Store results in an array
$data = array();
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Return data as JSON
echo json_encode($data);

// Close the database connection
$conn->close();
?>