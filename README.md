# related-extension

Create extensions for the (Related ORM)[https://www.npmjs.com/package/related]

[![npm](https://img.shields.io/npm/dm/related-extension.svg?style=flat-square)](https://www.npmjs.com/package/related-extension)
[![Travis](https://img.shields.io/travis/eventEmitter/related-extension.svg?style=flat-square)](https://travis-ci.org/eventEmitter/related-extension)
[![node](https://img.shields.io/node/v/related-extension.svg?style=flat-square)](https://nodejs.org/)


## API

Basically you can inherit from this class, it will provides some basic methods & functions required for wrting an extension for the orm

    var   Class         = require('ee-class')
        , Extension     = require('related-extension');


    var MyFancyORMExtension = new Class({
        inherits: Extension

        // class constructor
        , init: function init(options) {


            // don't forget to call the super constructor
            init.call(this, options);
        }
    });

You can listen for events that are emitted by the model instances or the resource object (this is used for building select quieries). You can also inject methods into the models and the querbuilders prototype.


## extending the model / querybuilder

if the extension needs to place methods on the models or the querybuilders prototype it needs to expose this functions

### applyModelMethods

this function gets the models definition and the models classdefintion as arguments, it may attach own methods to the models definition

    applyModelMethods: function(definition, classDefinition) {
        classDefinition.doSomeFanyStuff = function() {

        }
    }

### applyQueryBuilderMethods

this function gets the models definition and the querybuilders classdefintion as arguments, it may attach own methods to the querybuilders definition

    applyQueryBuilderMethods: function(definition, classDefinition) {
        classDefinition.doSomeFanyStuff = function() {

        }
    }

## Events on the model instance

If you are going to listen to events you have to define listeners on your extension. If you are going to listen to the beforeSave event you have to define a method onBeforeSave on your extension.

- beforeSave
- afterSave
- afterSaveCommit

- beforeDelete
- afterDelete
- afterDeleteCommit

- beforeInsert
- afterInsert

- beforeUpdate
- afterUpdate

- beforeSaveDependents
- afterSaveDependents

- beforeSaveBelongsTo
- afterSaveBelongsTo

- beforeSaveMappings
- bafterSaveMappings

- beforeSaveRefernces
- afterSaveRefernces

## Events on the querybuilder

- beforePrepare
- afterPrepare

- beforePrepareSubqueries
- afterPrepareSubqueries
