/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/value.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("./node"),
    Literal, ObjectValue, Identifier, UnaryOperator, BinaryOperator, TernaryOperator, defineNode = __o["defineNode"],
    Node = __o["Node"];
(Identifier = defineNode(Node, "Identifier", [], ["name"], (function(loc, name) {
    var self = this;
    Node.call(self, loc);
    (self.name = name);
})));
(UnaryOperator = defineNode(Node, "UnaryOperator", [], ["name"], (function(loc, name) {
    var self = this;
    Node.call(self, loc);
    (self.name = name);
})));
(BinaryOperator = defineNode(Node, "BinaryOperator", [], ["name"], (function(loc, name) {
    var self = this;
    Node.call(self, loc);
    (self.name = name);
})));
(TernaryOperator = defineNode(Node, "TernaryOperator", [], ["name"], (function(loc, name) {
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
(exports["Literal"] = Literal);
(exports["ObjectValue"] = ObjectValue);
(exports["Identifier"] = Identifier);
(exports["UnaryOperator"] = UnaryOperator);
(exports["BinaryOperator"] = BinaryOperator);
(exports["TernaryOperator"] = TernaryOperator);