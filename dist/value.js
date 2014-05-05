/*
 * THIS FILE IS AUTO GENERATED from 'lib/value.kep'
 * DO NOT EDIT
*/define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var Literal, ObjectValue, Identifier, UnaryOperator, BinaryOperator, TernaryOperator, defineNode = __o[
            "defineNode"],
        Node = __o["Node"];
    (Identifier = defineNode(Node, "Identifier", [], ["name"], (function(loc, name) {
        var self = this;
        Node.call(self, loc);
        (self.name = name);
    })));
    (UnaryOperator = defineNode(Node, "UnaryOperator", [], ["name"], (function(loc, op) {
        var self = this;
        Node.call(self, loc);
        (self.op = op);
    })));
    (BinaryOperator = defineNode(Node, "BinaryOperator", [], ["name", "flipped"], (function(loc, op, flipped) {
        var self = this;
        Node.call(self, loc);
        (self.op = op);
        (self.flipped = flipped);
    })));
    (TernaryOperator = defineNode(Node, "TernaryOperator", [], ["name"], (function(loc, op) {
        var self = this;
        Node.call(self, loc);
        (self.op = op);
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
}));