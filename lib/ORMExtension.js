!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
        , EventEmitter  = require('ee-event-emitter');



	module.exports = new Class({
        inherits: EventEmitter

		, init: function() {}


        /*
         *  sets some required variable son the extension 
         * so it has access to them
         */
        , setVariables: function(options) {
            Object.keys(options).forEach(function(key) {
                this[key] = options[key];
            }.bind(this));
        }
        

        /*
         * default: don't use on any model
         */
        , useOnModel: function(definition) {
            return false;
        }
	});
}();
