<?php

include('./dbconnection.php');

// Make the connection, test for errors
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
if ($_SERVER["REQUEST_METHOD"] == "GET") {
	$liqureId = $_GET['liqureId'];
	$state = $_GET['state'];
	
	$select = "SELECT li_id FROM liqure WHERE li_id = '$liqureId'";
	$result = $conn->query($select);
	$numRows = $result->num_rows;
	$myObj=new \stdClass();
	if (($numRows == 1) && ($state == 'true')) {
	    $sql = "UPDATE liqure SET li_likes = li_likes + 1 WHERE li_id = '$liqureId'";
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
	    $sql = "UPDATE liqure SET li_likes = li_likes - 1 WHERE li_id = '$liqureId'";
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
