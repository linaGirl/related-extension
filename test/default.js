
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert');



	var ORMExtension = require('../')


	var MyExtension = new Class({
		inherits: ORMExtension

		, onBeforeSave: function() {}
		, onBeforePrepare: function() {}
		, onBeforeFind: function() {}
	});


	describe('The ORMExtension', function(){
		it('should not crash when instantiated', function() {
			new MyExtension();
		});

		it('should accept varaible', function() {
			var ext = new MyExtension();
			ext.setVariables({a:1});
			assert.equal(ext.a, 1);
		});

		it('should identify itself as extension', function() {
			var ext = new MyExtension();
			assert.equal(ext.isRelatedExtension(), true);
		});

		it('should return all eventlistners for the model', function() {
			var ext = new MyExtension();
			assert.equal(ext.getModelEventListeners().length, 1);
		});

		it('should return all eventlistners for the resource', function() {
			var ext = new MyExtension();
			assert.equal(ext.getResourceEventListeners().length, 1);
		});

		it('should return the correct structure for eventlistners for the models', function() {
			var ext = new MyExtension();
			assert.equal(ext.getModelEventListeners()[0].event, 'beforeSave');
			assert.equal(ext.getModelEventListeners()[0].listener, 'function () { [native code] }');
		});

		it('should return the correct structure for eventlistners for the resources', function() {
			var ext = new MyExtension();
			assert.equal(ext.getResourceEventListeners()[0].event, 'beforePrepare');
			assert.equal(ext.getResourceEventListeners()[0].listener, 'function () { [native code] }');
		});

		it('should return the correct structure for eventlistners for the querybuilders', function() {
			var ext = new MyExtension();
			assert.equal(ext.getQueryBuilderEventListeners()[0].event, 'beforeFind');
			assert.equal(ext.getResourceEventListeners()[0].listener, 'function () { [native code] }');
		});
	});
	