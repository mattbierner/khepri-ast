/**
 * @fileOverview Khepri declaration AST nodes.
 */
define(['khepri_ast/node'],
function(node){
"use strict";

/**
 * @constructor
 */
var Declaration = function() { };
Declaration.prototype = new node.Node;

/**
 * @constructor
 */
var VariableDeclaration = node.defineNode(Declaration, 'VariableDeclaration',
    ['declarations'],
    function(loc, declarations) {
        node.Node.call(this, loc);
        this.declarations = declarations;
    });

/**
 * VariableDeclarator
 */
var VariableDeclarator = node.defineNode(Declaration, 'VariableDeclarator',
    ['id', 'init'],
    function(loc, id, init) {
        node.Node.call(this, loc);
        this.id = id;
        this.init = (init || null);
    });

/**
 * 
 */
var Binding = node.defineNode(Declaration, 'Binding',
    ['pattern', 'value'],
    function(loc, pattern, value) {
        node.Node.call(this, loc);
        this.pattern = pattern;
        this.value = value;
    });

/**
 * 
 */
var StaticDeclaration = node.defineNode(Declaration, 'StaticDeclaration',
    ['declarations'],
    function(loc, declarations) {
        node.Node.call(this, loc);
        this.declarations = declarations;
    });

/**
 * 
 */
var StaticDeclarator =  node.defineNode(Declaration, 'StaticDeclarator',
    ['id', 'init'],
    function(loc, id, init) {
        node.Node.call(this, loc);
        this.id = id;
        this.init = init;
    });

/* Export
 ******************************************************************************/
return {
    'Declaration': Declaration,
    
    'VariableDeclaration': VariableDeclaration,
    'VariableDeclarator': VariableDeclarator,
    
    'Binding': Binding,
    
    'StaticDeclaration': StaticDeclaration,
    'StaticDeclarator': StaticDeclarator
};

});