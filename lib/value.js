/**
 * @fileOverview Khepri value AST nodes.
 */
define(['khepri_ast/node'],
function(node){
"use strict";

/* 
 ******************************************************************************/
/**
 * @constructor
 */
var Identifier = node.defineNode(node.Node, 'Identifier',
    [],
    function(loc, name) {
        node.Node.call(this, loc);
        this.name = name;
    });

/**
 * @constructor
 */
var Literal = node.defineNode(node.Node, 'Literal',
    [],
    function(loc, kind, value) {
        node.Node.call(this, loc);
        this.kind = kind
        this.value = value;
    });

/* Export
 ******************************************************************************/
return {
    'Identifier': Identifier,
    'Literal': Literal
};

});