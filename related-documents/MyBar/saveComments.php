<?php

include('./dbconnection.php');

// Make the connection, test for errors
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "GET") {
	$name = $_GET['name'];
	$comment = $_GET['comment'];

	$sql = "INSERT INTO comments(name, comment) VALUES ('" . $name . "','" . $comment . "')";
	$result = $conn->query($sql);
	$myObj=new \stdClass();
	if ($result === TRUE) {
	    $myObj->response = "success";
        $myJSON = json_encode($myObj);
        echo $myJSON;
	}
	else {
	    $myObj->response = "error";
        $myJSON = json_encode($myObj);
        echo $myJSON;
	}

$conn->close();
}
?>
