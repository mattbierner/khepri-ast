/*
 * THIS FILE IS AUTO GENERATED from 'lib/package.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "khepri_ast/node"], (function(require, exports, __o) {
    "use strict";
    var Package, PackageExport, PackageExports;
    var __o = __o,
        defineNode = __o["defineNode"],
        Node = __o["Node"];
    (PackageExport = defineNode(Node, "PackageExport", ["id", "alias"], [], (function(loc, id, alias) {
        Node.call(this, loc);
        (this.id = id);
        (this.alias = alias);
    })));
    (PackageExports = defineNode(Node, "PackageExports", ["exports"], [], (function(loc, exports) {
        Node.call(this, loc);
        (this.exports = exports);
    })));
    (Package = defineNode(Node, "Package", ["exports", "body"], [], (function(loc, exports, body) {
        Node.call(this, loc);
        (this.exports = exports);
        (this.body = body);
    })));
    (exports.Package = Package);
    (exports.PackageExport = PackageExport);
    (exports.PackageExports = PackageExports);
}))