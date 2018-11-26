<?php

include ('./DB.php');

if(isset($_GET['brand'])) {
	
	$brand = $_GET['brand'];

	if(DB::query('SELECT * FROM cocktail_recipes WHERE cr_liqureType LIKE :brand', array(':brand' => '%'.$brand.'%'))) {
        $myJSON = json_encode(DB::query('SELECT * FROM cocktail_recipes WHERE cr_liqureType LIKE :brand ORDER BY cr_name', array(':brand' => '%'.$brand.'%')));
        echo $myJSON; 
    }else {
        echo "0";
    }
}

?>
