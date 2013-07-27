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
var LetBinding = node.defineNode(Declaration, 'LetBinding',
    ['id', 'init'],
    function(loc, id, init) {
        declaration.Declaration.call(this, loc);
        this.id = id;
        this.init = init;
    });

/**
 * 
 */
var StaticDeclaration = node.defineNode(Declaration, 'StaticDeclaration',
    ['declarations'],
    function(loc, declarations) {
        declaration.Declaration.call(this, loc);
        this.declarations = declarations;
    });

/**
 * 
 */
var StaticDeclarator =  node.defineNode(Declaration, 'StaticDeclarator',
    ['id', 'init'],
    function(loc, id, init) {
        declaration.Declaration.call(this, loc);
        this.id = id;
        this.init = init;
    });

/* Export
 ******************************************************************************/
return {
    'Declaration': Declaration,
    
    'VariableDeclaration': VariableDeclaration,
    'VariableDeclarator': VariableDeclarator,
    
    'LetBinding': LetBinding,
    
    'StaticDeclaration': StaticDeclaration,
    'StaticDeclarator': StaticDeclarator
};

});