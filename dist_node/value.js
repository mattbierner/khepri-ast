"use strict";
var __o = require("./node"),
    defineNode = __o["defineNode"],
    Node = __o["Node"],
    Identifier, Literal, ObjectValue;
(Identifier = defineNode(Node, "Identifier", [], ["name"], (function(loc, name) {
    var self = this;
    Node.call(self, loc);
    (self.name = name);
})));
(Literal = defineNode(Node, "Literal", [], ["kind", "value"], (function(loc, kind, value) {
    var self = this;
    Node.call(self, loc);
    (self.kind = kind);
    (self.value = value);
})));
(ObjectValue = defineNode(Node, "ObjectValue", ["key", "value"], [], (function(loc, key, value) {
    var self = this;
    Node.call(self, loc);
    (self.key = key);
    (self.value = value);
})));
(exports.Identifier = Identifier);
(exports.Literal = Literal);
(exports.ObjectValue = ObjectValue);