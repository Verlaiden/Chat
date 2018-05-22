
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
var currentdate = new Date();
var datetime = currentdate.getHours() + ":" + currentdate.getMinutes();
