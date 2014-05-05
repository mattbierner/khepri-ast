/*
 * THIS FILE IS AUTO GENERATED from 'lib/package.kep'
 * DO NOT EDIT
*/"use strict";
var __o = require("./node"),
    Package, PackageExport, PackageExports, defineNode = __o["defineNode"],
    Node = __o["Node"];
(PackageExport = defineNode(Node, "PackageExport", ["id", "alias"], [], (function(loc, id, alias) {
    var self = this;
    Node.call(self, loc);
    (self.id = id);
    (self.alias = alias);
})));
(PackageExports = defineNode(Node, "PackageExports", ["exports"], [], (function(loc, exports0) {
    var self = this;
    Node.call(self, loc);
    (self.exports = exports0);
})));
(Package = defineNode(Node, "Package", ["exports", "body"], [], (function(loc, exports0, body) {
    var self = this;
    Node.call(self, loc);
    (self.exports = exports0);
    (self.body = body);
})));
(exports["Package"] = Package);
(exports["PackageExport"] = PackageExport);
(exports["PackageExports"] = PackageExports);