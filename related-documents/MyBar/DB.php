<?php
class DB {
    private static function connect(){
        $pdo = new PDO('mysql:host=localhost;dbname=id3940083_moneymaker;charset=utf8','id3940083_root2','abc123');
        $pdo -> setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        $pdo -> setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        return $pdo;
    }
    public static function query($query,$parms = array()){
        $statement = self::connect()->prepare($query);
        $statement -> execute($parms);

        if(explode(' ', $query)[0] == 'SELECT') {
            $data = $statement->fetchAll(PDO::FETCH_NAMED);
            return $data;
        }else if(explode(' ', $query)[0] == 'UPDATE') {
            $data = $statement->fetch();
            return $data;
        }
    }
}