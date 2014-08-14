define(['jquery'], function($){
	var $workImage = $("#workImage");

	return {
		execute: function() {
			$workImage.click(function(){$workImage.toggle()}).toggle();
		}
	}

}();