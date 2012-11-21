var requirejs = {
	shim: {
		'underscore': {
			exports: '_',
			deps:['underscore.string'],
			init: function(_s){
				_.mixin(_s.exports());
			}
		},
		'hammer': {exports: 'Hammer'},
		'jquery.scrollto': ['jquery'],
		'bootstrap':['jquery']
	},
	paths: {
		'jquery': 'lib/jquery/jquery-1.8.2.min',
		'jquery.scrollto': 'lib/jquery/jquery.scrollTo.min',
		'underscore': 'lib/underscore/underscore-min',
		'underscore.string': 'lib/underscore/underscore.string.min',
		'knockout':'lib/knockout/knockout-2.2.0',
		'mousetrap':'lib/mousetrap/mousetrap.min',
		'hammer':'lib/hammer/hammer',

		'bootstrap':'lib/bootstrap/bootstrap.min',

		'text': 'lib/require/text',
		'domready': 'lib/require/domready'
	},
	waitSeconds: 90,
	baseUrl: 'js/',
	urlArgs:new Date()
};

