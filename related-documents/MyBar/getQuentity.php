<?php

include ('./DB.php');

if(isset($_GET['brand'])) {
	
		$brand = $_GET['brand'];

// 		$select = "SELECT * FROM liqure JOIN prices WHERE liqure.li_id = prices.id AND liqure.li_type = '$brand' AND prices.quentity = '$quentity'";
// 		$result = $conn->query($select);
// 		$row = $result->fetch_all();
		
// 		//$myObj=new \stdClass();
// 		if ($result === TRUE) {
// 		    //$myObj->response = "driver didn't accepted";
//             $myJSON = json_encode($row);
//             echo $myJSON;
// 		}
// 		else{
//             //$myObj->response = "can activate";
//             $myJSON = json_encode($row);
//             echo $myJSON;
// 		}
		
	if(DB::query('SELECT DISTINCT quentity FROM prices INNER JOIN liqure WHERE liqure.li_type=:brand AND liqure.li_id = prices.id ORDER BY quentity', array(':brand' => $brand))) {
        $myJSON = json_encode(DB::query('SELECT DISTINCT quentity FROM prices INNER JOIN liqure WHERE liqure.li_type=:brand AND liqure.li_id = prices.id ORDER BY quentity', array(':brand' => $brand)));
        echo $myJSON; 
    }else {
        echo "0";
    }
}

?>
