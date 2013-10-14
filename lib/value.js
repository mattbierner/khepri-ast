/*
 * THIS FILE IS AUTO GENERATED from 'lib/value.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "khepri_ast/node"], (function(require, exports, __o) {
    "use strict";
    var Identifier, Literal;
    var __o = __o,
        defineNode = __o["defineNode"],
        Node = __o["Node"]; {
            (Identifier = defineNode(Node, "Identifier", [], (function(loc, name) {
                Node.call(this, loc);
                (this.name = name);
            })));
            (Literal = defineNode(Node, "Literal", [], (function(loc, kind, value) {
                Node.call(this, loc);
                (this.kind = kind);
                (this.value = value);
            })));
    }
    (exports.Identifier = Identifier);
    (exports.Literal = Literal);
}))