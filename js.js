
var nick = "";
var nameNickname = document.getElementById("nick");
nameNickname.onsubmit = function (evt) {
    evt.preventDefault();
    var elem = document.getElementById("nickDiv");
    nick = nameNickname.nick.value;
    elem.remove();
}

var formMessage = document.getElementById('chatMessage');
formMessage.onsubmit = function (event) {
    event.preventDefault();
    var result = document.getElementById('result');
    result.innerHTML = result.innerHTML + "<li>" + "<strong>" + datetime + ":</strong>" + " @" + nick + ": " + formMessage.text.value + "</li>";
    formMessage.reset();
}
function properTimeFormat(time) {
    if (time.toString().length == 1) {
        return "0" + time;
    }
    else {
        return time;
    }
}
var currentdate = new Date();
var datetime = properTimeFormat(currentdate.getHours()) + ":" + properTimeFormat(currentdate.getMinutes());
console.log(currentdate.getHours());