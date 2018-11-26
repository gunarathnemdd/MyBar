<?php

include ('./DB.php');

if(isset($_GET['brand']) && isset($_GET['quentity'])) {
	
	$brand = $_GET['brand'];
	$quentity = $_GET['quentity'];
	$offset = $_GET['offset'];
	$sortBy = $_GET['sortBy'];
	$searchBy = $_GET['searchBy'];
    
    if(DB::query('SELECT li_id, li_name, li_type, li_volume, li_brand, li_year, li_company, li_country, quentity, price FROM liqure INNER JOIN prices WHERE liqure.li_type=:brand AND liqure.li_id = prices.id AND prices.quentity=:quentity', array(':brand' => $brand, ':quentity'=> $quentity)) && ($sortBy == 'li_name')) {
        
        $myJSON = json_encode(DB::query('SELECT li_id, li_name, li_type, li_volume, li_brand, li_year, li_company, li_country, quentity, price FROM liqure INNER JOIN prices WHERE liqure.li_type=:brand AND liqure.li_id = prices.id AND prices.quentity=:quentity AND liqure.li_name LIKE :searchBy ORDER BY li_name', array(':brand' => $brand, ':quentity'=> $quentity, ':searchBy'=> '%'.$searchBy.'%')));
        echo $myJSON;
    }else if(DB::query('SELECT li_id, li_name, li_type, li_volume, li_brand, li_year, li_company, li_country, quentity, price FROM liqure INNER JOIN prices WHERE liqure.li_type=:brand AND liqure.li_id = prices.id AND prices.quentity=:quentity', array(':brand' => $brand, ':quentity'=> $quentity)) && ($sortBy == 'price')) {
    
        $myJSON = json_encode(DB::query('SELECT li_id, li_name, li_type, li_volume, li_brand, li_year, li_company, li_country, quentity, price FROM liqure INNER JOIN prices WHERE liqure.li_type=:brand AND liqure.li_id = prices.id AND prices.quentity=:quentity AND liqure.li_name LIKE :searchBy ORDER BY price', array(':brand' => $brand, ':quentity'=> $quentity, ':searchBy'=> '%'.$searchBy.'%')));
        echo $myJSON;
    }else {
        echo "0";
    }
}

?>
