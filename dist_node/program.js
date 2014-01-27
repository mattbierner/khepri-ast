"use strict";
var __o = require("./node"),
    defineNode = __o["defineNode"],
    Node = __o["Node"],
    Program;
(Program = defineNode(Node, "Program", ["body"], [], (function(loc, body) {
    var self = this;
    Node.call(self, loc);
    (self.body = body);
})));
(exports.Program = Program);