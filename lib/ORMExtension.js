!function(){

	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
        , type          = require('ee-types')
        , EventEmitter  = require('ee-event-emitter');



	module.exports = new Class({
        inherits: EventEmitter

        , _modelListenerNames: ['beforeSave', 'afterSave', 'afterSaveCommit', 'beforeDelete', 'afterDelete', 'afterDeleteCommit', 'beforeInsert', 'afterInsert', 'beforeUpdate', 'afterUpdate', 'beforeSaveDependents', 'afterSaveDependents', 'beforeSaveBelongsTo', 'afterSaveBelongsTo', 'beforeSaveMappings', 'bafterSaveMappings', 'beforeSaveRefernces', 'afterSaveRefernces'].map(function(eventName){return {eventName: eventName, listenerName: 'on'+eventName[0].toUpperCase()+eventName.slice(1)};})
        , _resourceListenerNames: ['beforePrepare', 'afterPrepare', 'beforePrepareSubqueries', 'afterPrepareSubqueries'].map(function(eventName){return {eventName: eventName, listenerName: 'on'+eventName[0].toUpperCase()+eventName.slice(1)};})


		, init: function() {
            Class.define(this, '_modelListners', Class([]));
            Class.define(this, '_resourceListners', Class([]));

            this._modelListenerNames.filter(function(config) {
                if (type.function(this[config.listenerName])) this._modelListners.push({event: config.eventName, listener: this[config.listenerName]});
            }.bind(this));

            this._resourceListenerNames.filter(function(config) {
                if (type.function(this[config.listenerName])) this._resourceListners.push({event: config.eventName, listener: this[config.listenerName]});
            }.bind(this));
        }


        /*
         * return all names of event listners present for the model 
         */
        , getModelEventListeners: function() {
            return this._modelListners;
        }


         /*
         * return all names of event listners present for the model 
         */
        , getResourceEventListeners: function() {
            return this._resourceListners;
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
