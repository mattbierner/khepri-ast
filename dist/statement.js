/*
 * THIS FILE IS AUTO GENERATED from 'lib/statement.kep'
 * DO NOT EDIT
*/define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var Statement, EmptyStatement, DebuggerStatement, WithStatement, BlockStatement, ExpressionStatement,
            IfStatement, BreakStatement, ContinueStatement, SwitchStatement, ReturnStatement, ThrowStatement,
            TryStatement, WhileStatement, DoWhileStatement, ForStatement, defineNode = __o["defineNode"],
        Node = __o["Node"];
    (Statement = (function() {
        var self = this;
    }));
    (Statement.prototype = new(Node)());
    (EmptyStatement = defineNode(Statement, "EmptyStatement", [], [], (function(loc) {
        var self = this;
        Node.call(self, loc);
    })));
    (DebuggerStatement = defineNode(Statement, "DebuggerStatement", [], [], (function(loc) {
        var self = this;
        Node.call(self, loc);
    })));
    (BlockStatement = defineNode(Statement, "BlockStatement", ["body"], [], (function(loc, body) {
        var self = this;
        Node.call(self, loc);
        (self.body = body);
    })));
    (ExpressionStatement = defineNode(Statement, "ExpressionStatement", ["expression"], [], (function(loc,
        expression) {
        var self = this;
        Node.call(self, loc);
        (self.expression = expression);
    })));
    (IfStatement = defineNode(Statement, "IfStatement", ["test", "consequent", "alternate"], [], (function(loc,
        test, consequent, alternate) {
        var self = this;
        Node.call(self, loc);
        (self.test = test);
        (self.consequent = consequent);
        (self.alternate = (alternate || null));
    })));
    (WithStatement = defineNode(Statement, "WithStatement", ["bindings", "body"], [], (function(loc, bindings,
        body) {
        var self = this;
        Node.call(self, loc);
        (self.bindings = bindings);
        (self.body = body);
    })));
    (BreakStatement = defineNode(Statement, "BreakStatement", [], [], (function(loc) {
        var self = this;
        Node.call(self, loc);
    })));
    (ContinueStatement = defineNode(Statement, "ContinueStatement", [], [], (function(loc) {
        var self = this;
        Node.call(self, loc);
    })));
    (SwitchStatement = defineNode(Statement, "SwitchStatement", ["discriminant", "cases"], [], (function(loc,
        discriminant, cases) {
        var self = this;
        Node.call(self, loc);
        (self.discriminant = discriminant);
        (self.cases = cases);
    })));
    (ReturnStatement = defineNode(Statement, "ReturnStatement", ["argument"], [], (function(loc, argument) {
        var self = this;
        Node.call(self, loc);
        (self.argument = (argument || null));
    })));
    (ThrowStatement = defineNode(Statement, "ThrowStatement", ["argument"], [], (function(loc, argument) {
        var self = this;
        Node.call(self, loc);
        (self.argument = argument);
    })));
    (TryStatement = defineNode(Statement, "TryStatement", ["block", "handler", "finalizer"], [], (function(loc,
        block, handler, finalizer) {
        var self = this;
        Node.call(self, loc);
        (self.block = block);
        (self.handler = handler);
        (self.finalizer = finalizer);
    })));
    (WhileStatement = defineNode(Statement, "WhileStatement", ["test", "body"], [], (function(loc, test, body) {
        var self = this;
        Node.call(self, loc);
        (self.test = test);
        (self.body = body);
    })));
    (DoWhileStatement = defineNode(Statement, "DoWhileStatement", ["body", "test"], [], (function(loc, body,
        test) {
        var self = this;
        Node.call(self, loc);
        (self.test = test);
        (self.body = body);
    })));
    (ForStatement = defineNode(Statement, "ForStatement", ["init", "test", "update", "body"], [], (function(loc,
        init, test, update, body) {
        var self = this;
        Node.call(self, loc);
        (self.init = (init || null));
        (self.test = (test || null));
        (self.update = (update || null));
        (self.body = body);
    })));
    (exports["Statement"] = Statement);
    (exports["EmptyStatement"] = EmptyStatement);
    (exports["DebuggerStatement"] = DebuggerStatement);
    (exports["WithStatement"] = WithStatement);
    (exports["BlockStatement"] = BlockStatement);
    (exports["ExpressionStatement"] = ExpressionStatement);
    (exports["IfStatement"] = IfStatement);
    (exports["BreakStatement"] = BreakStatement);
    (exports["ContinueStatement"] = ContinueStatement);
    (exports["SwitchStatement"] = SwitchStatement);
    (exports["ReturnStatement"] = ReturnStatement);
    (exports["ThrowStatement"] = ThrowStatement);
    (exports["TryStatement"] = TryStatement);
    (exports["WhileStatement"] = WhileStatement);
    (exports["DoWhileStatement"] = DoWhileStatement);
    (exports["ForStatement"] = ForStatement);
}));