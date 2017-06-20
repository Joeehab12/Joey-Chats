/**
 * Created by youss on 19-Jun-17.
 */
jQuery(function($){
    var socket = io.connect();
    var $messageForm = $('#send-message');
    var $messageBox = $('#message');
    var $chat = $('#chat');

    $messageForm.submit(function(e){
        e.preventDefault();
        socket.emit('send-message',$messageBox.val());
        $messageBox.val('');
    });

    socket.on('new-message', function (msg) {
        //io.sockets.emit('new-message', msg);
        $chat.append(msg + '<br>');
    });

});
