/*
 * THIS FILE IS AUTO GENERATED from 'lib/value.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "khepri_ast/node"], (function(require, exports, __o) {
    "use strict";
    var Identifier, Literal, ObjectValue;
    var __o = __o,
        defineNode = __o["defineNode"],
        Node = __o["Node"];
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
}))