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
 * @constructor
 */
var IdentifierPattern = node.defineNode(Pattern, 'IdentifierPattern',
    ['id'],
    function(loc, id) {
        Pattern.call(this, loc);
        this.id = id;
    });

/**
 * @constructor
 */
var EllipsisPattern = node.defineNode(Pattern, 'EllipsisPattern',
    [],
    function(loc) {
        Pattern.call(this, loc);
    });

/**
 * @constructor
 */
var SinkPattern = node.defineNode(Pattern, 'SinkPattern',
    [],
    function(loc) {
        Pattern.call(this, loc);
    });

/**
 * @constructor
 */
var ImportPattern = node.defineNode(node.Node, 'ImportPattern',
    ['from', 'pattern'],
    function(loc, from, pattern) {
        node.Node.call(this, loc);
        this.from = from;
        this.pattern = pattern;
    });

/**
 * @constructor
 */
var ArrayPattern = node.defineNode(Pattern, 'ArrayPattern',
    ['id', 'elements'],
    function(loc, id, elements) {
        Pattern.call(this, loc);
        this.id = (id || null);
        this.elements = elements;
    });

/**
 * @constructor
 */
var ObjectPattern = node.defineNode(Pattern, 'ObjectPattern',
    ['id', 'elements'],
    function(loc, id, elements) {
        Pattern.call(this, loc);
        this.id = (id || null)
        this.elements = elements;
    });

/**
 * @constructor
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
    'IdentifierPattern': IdentifierPattern,
    'EllipsisPattern': EllipsisPattern,
    'SinkPattern': SinkPattern,
    'ImportPattern': ImportPattern,
    'ArrayPattern': ArrayPattern,
    'ObjectPattern': ObjectPattern,
    
    'ParameterList': ParameterList
};

});