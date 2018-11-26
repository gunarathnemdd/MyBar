<?php

include ('./DB.php');

if(true) {

	if(DB::query('SELECT * FROM cocktail_recipes ORDER BY cr_likes DESC LIMIT 10')) {
        $myJSON = json_encode(DB::query('SELECT * FROM cocktail_recipes ORDER BY cr_likes DESC LIMIT 10'));
        echo $myJSON; 
    }else {
        echo "0";
    }
    
}

?>
