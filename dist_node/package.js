"use strict";
var __o = require("khepri_ast/node"),
    defineNode = __o["defineNode"],
    Node = __o["Node"],
    Package, PackageExport, PackageExports;
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