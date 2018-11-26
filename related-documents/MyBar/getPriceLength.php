<?php

include ('./DB.php');

if(isset($_GET['brand']) && isset($_GET['quentity'])) {
	
	$brand = $_GET['brand'];
	$quentity = $_GET['quentity'];
    
    if(DB::query('SELECT COUNT(li_name) AS length FROM liqure INNER JOIN prices WHERE liqure.li_type=:brand AND liqure.li_id = prices.id AND prices.quentity=:quentity ORDER BY li_name', array(':brand' => $brand, ':quentity'=> $quentity))) {
        
        $myJSON = json_encode(DB::query('SELECT COUNT(li_name) AS length FROM liqure INNER JOIN prices WHERE liqure.li_type=:brand AND liqure.li_id = prices.id AND prices.quentity=:quentity ORDER BY li_name', array(':brand' => $brand, ':quentity'=> $quentity)));
        echo $myJSON; 
    }else {
        echo "0";
    }
}

?>
