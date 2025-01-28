<?php
// Enable error reporting for debugging
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost"; // Change if using a remote server
$username = "invigouz_loginInfo";
$password = "Invigo2520";
$database = "invigouz_loginInfo";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data
$sql = "SELECT * FROM your_table";
$result = $conn->query($sql);

$data = [];
if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "0 results";
}

echo json_encode($data);

$conn->close();
?>