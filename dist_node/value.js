"use strict";
var __o = require("khepri_ast/node"),
    defineNode = __o["defineNode"],
    Node = __o["Node"],
    Identifier, Literal, ObjectValue;
(Identifier = defineNode(Node, "Identifier", [], ["name"], (function(loc, name) {
    Node.call(this, loc);
    (this.name = name);
})));
(Literal = defineNode(Node, "Literal", [], ["kind", "value"], (function(loc, kind, value) {
    Node.call(this, loc);
    (this.kind = kind);
    (this.value = value);
})));
(ObjectValue = defineNode(Node, "ObjectValue", ["key", "value"], [], (function(loc, key, value) {
    Node.call(this, loc);
    (this.key = key);
    (this.value = value);
})));
(exports.Identifier = Identifier);
(exports.Literal = Literal);
(exports.ObjectValue = ObjectValue);