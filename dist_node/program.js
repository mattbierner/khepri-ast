"use strict";
var __o = require("khepri_ast/node"),
    defineNode = __o["defineNode"],
    Node = __o["Node"],
    Program;
(Program = defineNode(Node, "Program", ["body"], [], (function(loc, body) {
    Node.call(this, loc);
    (this.body = body);
})));
(exports.Program = Program);