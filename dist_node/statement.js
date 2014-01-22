"use strict";
var __o = require("khepri_ast/node"),
    defineNode = __o["defineNode"],
    Node = __o["Node"],
    Statement, EmptyStatement, DebuggerStatement, WithStatement, BlockStatement, ExpressionStatement, IfStatement,
        BreakStatement, ContinueStatement, SwitchStatement, ReturnStatement, ThrowStatement, TryStatement,
        WhileStatement, DoWhileStatement, ForStatement;
(Statement = (function() {}));
(Statement.prototype = new(Node)());
(EmptyStatement = defineNode(Statement, "EmptyStatement", [], [], (function(loc) {
    Node.call(this, loc);
})));
(DebuggerStatement = defineNode(Statement, "DebuggerStatement", [], [], (function(loc) {
    Node.call(this, loc);
})));
(BlockStatement = defineNode(Statement, "BlockStatement", ["body"], [], (function(loc, body) {
    Node.call(this, loc);
    (this.body = body);
})));
(ExpressionStatement = defineNode(Statement, "ExpressionStatement", ["expression"], [], (function(loc, expression) {
    Node.call(this, loc);
    (this.expression = expression);
})));
(IfStatement = defineNode(Statement, "IfStatement", ["test", "consequent", "alternate"], [], (function(loc, test,
    consequent, alternate) {
    Node.call(this, loc);
    (this.test = test);
    (this.consequent = consequent);
    (this.alternate = (alternate || null));
})));
(WithStatement = defineNode(Statement, "WithStatement", ["bindings", "body"], [], (function(loc, bindings, body) {
    Node.call(this, loc);
    (this.bindings = bindings);
    (this.body = body);
})));
(BreakStatement = defineNode(Statement, "BreakStatement", [], [], (function(loc) {
    Node.call(this, loc);
})));
(ContinueStatement = defineNode(Statement, "ContinueStatement", [], [], (function(loc) {
    Node.call(this, loc);
})));
(SwitchStatement = defineNode(Statement, "SwitchStatement", ["discriminant", "cases"], [], (function(loc, discriminant,
    cases) {
    Node.call(this, loc);
    (this.discriminant = discriminant);
    (this.cases = cases);
})));
(ReturnStatement = defineNode(Statement, "ReturnStatement", ["argument"], [], (function(loc, argument) {
    Node.call(this, loc);
    (this.argument = (argument || null));
})));
(ThrowStatement = defineNode(Statement, "ThrowStatement", ["argument"], [], (function(loc, argument) {
    Node.call(this, loc);
    (this.argument = argument);
})));
(TryStatement = defineNode(Statement, "TryStatement", ["block", "handler", "finalizer"], [], (function(loc, block,
    handler, finalizer) {
    Node.call(this, loc);
    (this.block = block);
    (this.handler = handler);
    (this.finalizer = finalizer);
})));
(WhileStatement = defineNode(Statement, "WhileStatement", ["test", "body"], [], (function(loc, test, body) {
    Node.call(this, loc);
    (this.test = test);
    (this.body = body);
})));
(DoWhileStatement = defineNode(Statement, "DoWhileStatement", ["body", "test"], [], (function(loc, body, test) {
    Node.call(this, loc);
    (this.test = test);
    (this.body = body);
})));
(ForStatement = defineNode(Statement, "ForStatement", ["init", "test", "update", "body"], [], (function(loc, init, test,
    update, body) {
    Node.call(this, loc);
    (this.init = (init || null));
    (this.test = (test || null));
    (this.update = (update || null));
    (this.body = body);
})));
(exports.Statement = Statement);
(exports.EmptyStatement = EmptyStatement);
(exports.DebuggerStatement = DebuggerStatement);
(exports.WithStatement = WithStatement);
(exports.BlockStatement = BlockStatement);
(exports.ExpressionStatement = ExpressionStatement);
(exports.IfStatement = IfStatement);
(exports.BreakStatement = BreakStatement);
(exports.ContinueStatement = ContinueStatement);
(exports.SwitchStatement = SwitchStatement);
(exports.ReturnStatement = ReturnStatement);
(exports.ThrowStatement = ThrowStatement);
(exports.TryStatement = TryStatement);
(exports.WhileStatement = WhileStatement);
(exports.DoWhileStatement = DoWhileStatement);
(exports.ForStatement = ForStatement);