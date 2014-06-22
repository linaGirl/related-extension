!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
        , type          = require('ee-types')
        , EventEmitter  = require('ee-event-emitter');



	module.exports = new Class({
        inherits: EventEmitter

        , _modelListenerNames: ['beforeSave', 'afterSave', 'afterSaveCommit', 'beforeDelete', 'afterDelete', 'afterDeleteCommit', 'beforeInsert', 'afterInsert', 'beforeUpdate', 'afterUpdate', 'beforeSaveDependents', 'afterSaveDependents', 'beforeSaveBelongsTo', 'afterSaveBelongsTo', 'beforeSaveMappings', 'bafterSaveMappings', 'beforeSaveRefernces', 'afterSaveRefernces'].map(function(eventName){return 'on'+eventName[0].toUpperCase()+eventName.slice(1);})
        , _resourceListenerNames: ['beforePrepare', 'afterPrepare', 'beforePrepareSubqueries', 'afterPrepareSubqueries'].map(function(eventName){return 'on'+eventName[0].toUpperCase()+eventName.slice(1);})


		, init: function() {}


        /*
         * return all names of event listners present for the model 
         */
        , getModelEventListeners: function() {
            return Class.keys(this).filter(function(propertyName) { 
                return type.function(this[propertyName]) && this._modelListenerNames.indexOf(propertyName) >= 0; 
            }.bind(this));
        }


         /*
         * return all names of event listners present for the model 
         */
        , getResourceEventListeners: function() {
            return Class.keys(this).filter(function(propertyName) { 
                return type.function(this[propertyName]) && this._resourceListenerNames.indexOf(propertyName) >= 0; 
            }.bind(this));
        }


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


        /*
         * identify myself as extension
         */
        , isExtension: function() {
            return true;
        }
	});
}();
