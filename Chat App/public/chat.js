var socket = io.connect('http://localhost:3000');

$("#txt").keyup(function (e)  {
    if (e.keyCode !== 13)  {
        socket.emit('is typing', true);
    }
    setTimeout(function() {
        socket.emit('is typing', false);
    }, 1000);
});

// submit text message without reload/refresh the page
$('form').submit(function(e){
    e.preventDefault(); // prevents page reloading
    socket.emit('chat_message', $('#txt').val());
    $('#txt').val('');
    return false;
});
// append the chat text message
socket.on('chat_message', function(msg){
    $('#messages').append($('<li>').html(msg));
});
// append text if someone is online
socket.on('is_online', function(username) {
    $('#messages').append($('<li>').html(username));
});
// send text if someone is typing
socket.on('typing', function(data){
    let innerText = '';
    if(data){
        innerText = '<p><em>' + data + ' is typing...</em></p>';
    }

    document.getElementById('feedback').innerHTML = innerText;
});
// ask username
var username = prompt('Please enter your name!');
socket.emit('username', username);