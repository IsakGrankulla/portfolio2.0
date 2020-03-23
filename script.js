const button = document.getElementById('email-button');
const email = document.getElementById('show-email');
const copyButton = document.getElementById('copy-button');

button.addEventListener('click', onButtonClick);

function onButtonClick() {
    if (email.style.display == "none") {
        email.style.display = "";
        document.getElementById('email-button').innerHTML = "Hide email";
    } else {
        email.style.display = "none";
        document.getElementById('email-button').innerHTML = "Email";
    }

}
