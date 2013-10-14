/**
 * @fileOverview Khepri package AST nodes.
 */
define(['khepri_ast/node'],
function(node){
"use strict";

/**
 * @constructor
 */
var PackageExport = node.defineNode(node.Node, 'PackageExport',
    ['id', 'alias'],
    function(loc, id, alias) {
        node.Node.call(this, loc);
        this.id = id;
        this.alias = alias;
    });

/**
 * @constructor
 */
var PackageExports = node.defineNode(node.Node, 'PackageExports',
    ['exports'],
    function(loc, exports) {
        node.Node.call(this, loc);
        this.exports = exports;
    });

/**
 * @constructor
 */
var Package = node.defineNode(node.Node, 'Package',
    ['exports', 'body'],
    function(loc, exports, body) {
        node.Node.call(this, loc);
        this.exports = exports;
        this.body = body;
    });

/* Export
 ******************************************************************************/
return {
    'Package': Package,
    
    'PackageExport': PackageExport,
    'PackageExports': PackageExports
};

});