<?php

include ('./DB.php');

if(isset($_GET['liqureId'])) {
	
	$liqureId = $_GET['liqureId'];
    
    if(DB::query('SELECT quentity, price FROM prices WHERE id=:liqureId ORDER BY quentity', array(':liqureId' => $liqureId))) {
        
        $myJSON = json_encode(DB::query('SELECT quentity, price FROM prices WHERE id=:liqureId ORDER BY quentity', array(':liqureId' => $liqureId)));
        echo $myJSON; 
    }else {
        echo "0";
    }
}

?>
