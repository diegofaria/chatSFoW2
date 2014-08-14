define(['jquery', 'chatcommand'], function($, ChatCommand){

    var $chatForm = $("#chatForm");
    var $codeForm = $("#codeForm");
    var $inputMessage = $("#inputMessage");
    var $codeInput = $("#codeInput")

    ChatCommand.on("receiveMessage", function (chatMessage) {
        if (chatMessage.isCode){
            var $lastMessage = $(".messageBlock .message p").last();
            $lastMessage.wrap("<pre></pre>");
            hljs.highlightBlock($lastMessage[0]);
        }
    });

    $("#codeSubmit").click(function(){
        toggleInputMode();

        var code = $codeInput.val().trim();

        if (code) {
            ChatCommand.emit('newMessage', {
                messageContent: code,
                userEmail: ChatCommand.getUserEmail(),
                isCode: true
            });
            $codeInput.val("");
            $inputMessage.focus();
        }
    });

    function toggleInputMode() {
        $chatForm.toggle();
        $codeForm.toggle();
        $codeInput.focus();
    }

    return {
        execute: function (code) {
            toggleInputMode();
        }
    }

}();