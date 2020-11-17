const messageButton = document.getElementById('message')

let messageButtonHandler = () => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let text = document.getElementById('text');
    console.log(`Wiadomość od ${name.value}/${email.value}: ${text.value}`);
}

$(document).ready(function(){
    $("message").click(function(event){
        event.preventDefault();
    });


});

messageButton.addEventListener('click', messageButtonHandler);