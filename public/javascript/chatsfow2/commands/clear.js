define(['jquery'], function($){
	execute: function() {
		$("#messagesBox").children().remove();
		$("#inputMessage").val("");
	}
};