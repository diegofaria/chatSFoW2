require.config({
    baseUrl: 'javascript',

	shim: {
	    'socketio': {exports: 'io'},
	    'hover': ['jquery'],
	    'titlealert': ['jquery']
	},

    paths: {

    	boss: 'chatsfow2/commands/boss.js',
    	clear: 'chatsfow2/commands/clear.js',    	
    	code: 'chatsfow2/commands/code.js',
    	gif: 'chatsfow2/commands/gif.js',
    	online: 'chatsfow2/commands/online.js',

    	commandfacade: 'chatsfow2/command-facade.js',    	
    	chat: 'chatsfow2/chat.js',

        moment: 'libraries/moment.js',
        jquery: '//code.jquery.com/jquery-1.10.2.js',
        socketio: '//cdn.socket.io/socket.io-1.0.6.js',
        hover: 'libraries/jquery.hoverIntent.minified.js',
        titlealert: 'libraries/jquery.titlealert.min.js'
    }
});