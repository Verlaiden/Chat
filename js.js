
let nameNickname = document.getElementById("nick");
nameNickname.onsubmit = function (e) {
    e.preventDefault();
    let elem = document.getElementById("nickDiv");
    localStorage.setItem('nick', nameNickname.nick.value);
    elem.remove();
}

let formMessage = document.getElementById('chatMessage');
formMessage.onsubmit = (e) => {
    let currentdate = new Date();
    let datetime = `${properTimeFormat(currentdate.getHours())}:${properTimeFormat(currentdate.getMinutes())}`;
    e.preventDefault();
    let result = document.getElementById('result');
    result.innerHTML += `<li><strong>${datetime}:</strong> @${localStorage.getItem('nick')}: ${formMessage.text.value} </li>`;
    formMessage.reset();
}
properTimeFormat = (num) => { return (num.toString().length == 1 ? `0${num}` : num); }
