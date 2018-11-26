<?php

include('./dbconnection.php');

// Make the connection, test for errors
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "GET") {
	$cocktailId = $_GET['cocktailId'];
	$state = $_GET['state'];
	
	$select = "SELECT cr_id FROM cocktail_recipes WHERE cr_id = '$cocktailId'";
	$result = $conn->query($select);
	$numRows = $result->num_rows;
	$myObj=new \stdClass();
	if (($numRows == 1) && ($state == 'true')) {
	    $sql = "UPDATE cocktail_recipes SET cr_likes = cr_likes + 1 WHERE cr_id = '$cocktailId'";
		$result2 = $conn->query($sql);
		if ($result2 === TRUE) {
		    $myObj->response = "success";
            $myJSON = json_encode($myObj);
            echo $myJSON;
		}
    	else {
    	    $myObj->response = "error";
            $myJSON = json_encode($myObj);
            echo $myJSON;
    	}
	}
	else if (($numRows == 1) && ($state == 'false')) {
	    $sql = "UPDATE cocktail_recipes SET cr_likes = cr_likes - 1 WHERE cr_id = '$cocktailId'";
		$result2 = $conn->query($sql);
		if ($result2 === TRUE) {
		    $myObj->response = "success";
            $myJSON = json_encode($myObj);
            echo $myJSON;
		}
    	else {
    	    $myObj->response = "error";
            $myJSON = json_encode($myObj);
            echo $myJSON;
    	}
	}
	else {
	    $myObj->response = "error";
        $myJSON = json_encode($myObj);
        echo $myJSON;
	}

$conn->close();
}
?>
