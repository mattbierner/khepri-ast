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
var PackageImport = node.defineNode(node.Node, 'PackageImport',
    ['from', 'pattern'],
    function(loc, from, pattern) {
        node.Node.call(this, loc);
        this.from = from;
        this.pattern = pattern;
    });

/**
 * @constructor
 */
var PackageImports = node.defineNode(node.Node, 'PackageImports',
    ['imports'],
    function(loc, imports) {
        node.Node.call(this, loc);
        this.imports = imports;
    });

/**
 * @constructor
 */
var PackageBody = node.defineNode(node.Node, 'PackageBody',
    ['body'],
    function(loc, body) {
        node.Node.call(this, loc);
        this.body = body;
    });

/**
 * @constructor
 */
var Package = node.defineNode(node.Node, 'Package',
    ['exports', 'imports', 'body'],
    function(loc, exports, imports, body) {
        node.Node.call(this, loc);
        this.exports = exports;
        this.imports = imports;
        this.body = body;
    });

/* Export
 ******************************************************************************/
return {
    'Package': Package,
    
    'PackageExport': PackageExport,
    'PackageExports': PackageExports,
        
    'PackageImport': PackageImport,
    'PackageImports': PackageImports,
    
    'PackageBody': PackageBody
};

});