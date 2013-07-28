/**
 * @fileOverview 
 */
define(['khepri_ast/node'],
function(node){
"use strict";

/* 
 ******************************************************************************/
/**
 * 
 */
var Pattern = function(loc) {
    node.Node.call(this, loc);
};
Pattern.prototype = new node.Node;

/**
 * 
 */
var Identifier = node.defineNode(Pattern, 'IdentifierPattern',
    ['name'],
    function(loc, name) {
        Pattern.call(this, loc);
        this.name = name;
    });

/**
 * 
 */
var Ellipsis = node.defineNode(Pattern, 'EllipsisPattern',
    [],
    function(loc) {
        Pattern.call(this, loc);
    });

/**
 * 
 */
var ArrayPattern = node.defineNode(Pattern, 'ArrayPattern',
    [],
    function(loc, id, elements) {
        Pattern.call(this, loc);
        this.id = (id || null);
        this.elements = elements;
    });

/**
 * 
 */
var ObjectPattern = node.defineNode(Pattern, 'ObjectPattern',
    [],
    function(loc, id, elements) {
        Pattern.call(this, loc);
        this.id = (id || null)
        this.elements = elements;
    });

/**
 * 
 */
var ParameterList = node.defineNode(Pattern, 'ParameterList',
    ['patterns'],
    function(loc, patterns) {
        Pattern.call(this, loc);
        this.patterns = patterns;
    });

/* Export
 ******************************************************************************/
return {
    'Pattern': Pattern,
    'Identifier': Identifier,
    'Ellipsis': Ellipsis,
    'ArrayPattern': ArrayPattern,
    'ObjectPattern': ObjectPattern,
    
    'ParameterList': ParameterList
};

});