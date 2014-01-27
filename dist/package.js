/*
 * THIS FILE IS AUTO GENERATED from 'lib/package.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var defineNode = __o["defineNode"],
        Node = __o["Node"],
        Package, PackageExport, PackageExports;
    (PackageExport = defineNode(Node, "PackageExport", ["id", "alias"], [], (function(loc, id, alias) {
        var self = this;
        Node.call(self, loc);
        (self.id = id);
        (self.alias = alias);
    })));
    (PackageExports = defineNode(Node, "PackageExports", ["exports"], [], (function(loc, exports) {
        var self = this;
        Node.call(self, loc);
        (self.exports = exports);
    })));
    (Package = defineNode(Node, "Package", ["exports", "body"], [], (function(loc, exports, body) {
        var self = this;
        Node.call(self, loc);
        (self.exports = exports);
        (self.body = body);
    })));
    (exports.Package = Package);
    (exports.PackageExport = PackageExport);
    (exports.PackageExports = PackageExports);
}));