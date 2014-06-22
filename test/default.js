
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert');



	var ORMExtension = require('../')



	describe('The ORMExtension', function(){
		it('should not crash when instantiated', function() {
			new ORMExtension();
		});

		it('should accept varaible', function() {
			var ext = new ORMExtension();
			ext.setVariables({a:1});
			assert.equal(ext.a, 1);
		});

		it('should identify itself as extension', function() {
			var ext = new ORMExtension();
			assert.equal(ext.isExtension(), true);
		});
	});
	