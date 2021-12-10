<?php
    header("Access-Control-Allow-Origin: http://localhost:3000");

    require_once 'db_connect.php';

    if (isset($_GET["type"])) {
        $query = "SELECT * FROM partner_locator WHERE `status` LIKE '%".$_GET["type"]."%'";
    } else {
        $query = 'SELECT * FROM partner_locator';
    }

    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); 
    $rows = mysqli_num_rows($result);

    for ($j = 0 ; $j < $rows ; ++$j) {
        $row = mysqli_fetch_row($result);
       
        echo "<div class='card ".$row[0]."'> 
            <div class='card__column'>
                <img class='card__column--logo' src='".$row[3]."' alt='no img' /> 
            </div>
            <div class='card__column card__column--second'>
                <div class='card__column--company'> "
                .$row[1].
                "</div>
                <div class='card__column--address'>"
                .$row[4].
                "</div>
            </div>
            <div class='card__column card__column--third'>
                <div class='card__column--site'><a href='".$row[5]."'>Website</a></div>
                <div class='card__column--phone'>".$row[6]."</div>
            </div> 
            <div class='card__column card__column--last'>
                <div class='card__column--status'>".$row[2]."</div>
            </div> 
        </div>"; 
    };

    mysqli_free_result($result);
    mysqli_close($link);