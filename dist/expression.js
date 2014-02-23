/*
 * THIS FILE IS AUTO GENERATED from 'lib/expression.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var defineNode = __o["defineNode"],
        Node = __o["Node"],
        Expression, ThisExpression, UnaryExpression, BinaryExpression, AssignmentExpression, LogicalExpression,
            ConditionalExpression, NewExpression, CallExpression, MemberExpression, FunctionExpression,
            ArrayExpression, ObjectExpression, LetExpression, DoExpression, YieldExpression, CurryExpression,
            ApplyExpression, UnaryOperatorExpression, BinaryOperatorExpression, TernaryOperatorExpression;
    (Expression = (function() {
        var self = this;
    }));
    (Expression.prototype = new(Node)());
    (ThisExpression = defineNode(Expression, "ThisExpression", [], [], (function(loc) {
        var self = this;
        Node.call(self, loc);
    })));
    (UnaryExpression = defineNode(Expression, "UnaryExpression", ["argument"], ["operator"], (function(loc,
        operator, argument) {
        var self = this;
        Node.call(self, loc);
        (self.operator = operator);
        (self.argument = argument);
    })));
    (BinaryExpression = defineNode(Expression, "BinaryExpression", ["left", "right"], ["operator"], (function(
        loc, operator, left, right) {
        var self = this;
        Node.call(self, loc);
        (self.operator = operator);
        (self.left = left);
        (self.right = right);
    })));
    (AssignmentExpression = defineNode(Expression, "AssignmentExpression", ["left", "right"], ["operator"], (
        function(loc, operator, left, right) {
            var self = this;
            Node.call(self, loc);
            (self.operator = operator);
            (self.left = left);
            (self.right = right);
        })));
    (LogicalExpression = defineNode(Expression, "LogicalExpression", ["left", "right"], ["operator"], (function(
        loc, operator, left, right) {
        var self = this;
        Node.call(self, loc);
        (self.operator = operator);
        (self.left = left);
        (self.right = right);
    })));
    (ConditionalExpression = defineNode(Expression, "ConditionalExpression", ["test", "consequent", "alternate"], [], (
        function(loc, test, consequent, alternate) {
            var self = this;
            Node.call(self, loc);
            (self.test = test);
            (self.consequent = consequent);
            (self.alternate = alternate);
        })));
    (NewExpression = defineNode(Expression, "NewExpression", ["callee", "args"], [], (function(loc, callee,
        args) {
        var self = this;
        Node.call(self, loc);
        (self.callee = callee);
        (self.args = args);
    })));
    (CallExpression = defineNode(Expression, "CallExpression", ["callee", "args"], [], (function(loc, callee,
        args) {
        var self = this;
        Node.call(self, loc);
        (self.callee = callee);
        (self.args = args);
    })));
    (MemberExpression = defineNode(Expression, "MemberExpression", ["object", "property"], ["computed"], (
        function(loc, object, property, computed) {
            var self = this;
            Node.call(self, loc);
            (self.object = object);
            (self.property = property);
            (self.computed = computed);
        })));
    (FunctionExpression = defineNode(Expression, "FunctionExpression", ["id", "params", "body"], [], (function(
        loc, id, params, body) {
        var self = this;
        Node.call(self, loc);
        (self.id = (id || null));
        (self.params = params);
        (self.body = body);
    })));
    (ArrayExpression = defineNode(Expression, "ArrayExpression", ["elements"], [], (function(loc, elements) {
        var self = this;
        Node.call(self, loc);
        (self.elements = elements);
    })));
    (ObjectExpression = defineNode(Expression, "ObjectExpression", ["properties"], [], (function(loc,
        properties) {
        var self = this;
        Node.call(self, loc);
        (self.properties = properties);
    })));
    (LetExpression = defineNode(Expression, "LetExpression", ["bindings", "body"], [], (function(loc, bindings,
        body) {
        var self = this;
        Node.call(self, loc);
        (self.bindings = bindings);
        (self.body = body);
    })));
    (DoExpression = defineNode(Expression, "LetExpression", ["bindings", "body"], [], (function(loc, bindings,
        body) {
        var self = this;
        Node.call(self, loc);
        (self.bindings = bindings);
        (self.body = body);
    })));
    (YieldExpression = defineNode(Expression, "LetExpression", ["arg"], [], (function(loc, arg) {
        var self = this;
        Node.call(self, loc);
        (self.arg = arg);
    })));
    (CurryExpression = defineNode(Expression, "CurryExpression", ["base", "args"], [], (function(loc, base,
        args) {
        var self = this;
        Node.call(self, loc);
        (self.base = base);
        (self.args = args);
    })));
    (ApplyExpression = defineNode(Expression, "ApplyExpression", ["callee", "arg"], [], (function(loc, callee,
        arg) {
        var self = this;
        Node.call(self, loc);
        (self.callee = callee);
        (self.arg = arg);
    })));
    (UnaryOperatorExpression = defineNode(Expression, "UnaryOperatorExpression", [], ["op"], (function(loc, op) {
        var self = this;
        Node.call(self, loc);
        (self.op = op);
    })));
    (BinaryOperatorExpression = defineNode(Expression, "BinaryOperatorExpression", [], ["op"], (function(loc,
        op) {
        var self = this;
        Node.call(self, loc);
        (self.op = op);
    })));
    (TernaryOperatorExpression = defineNode(Expression, "TernaryOperatorExpression", [], ["op"], (function(loc,
        op) {
        var self = this;
        Node.call(self, loc);
        (self.op = op);
    })));
    (exports.Expression = Expression);
    (exports.ThisExpression = ThisExpression);
    (exports.UnaryExpression = UnaryExpression);
    (exports.BinaryExpression = BinaryExpression);
    (exports.AssignmentExpression = AssignmentExpression);
    (exports.LogicalExpression = LogicalExpression);
    (exports.ConditionalExpression = ConditionalExpression);
    (exports.NewExpression = NewExpression);
    (exports.CallExpression = CallExpression);
    (exports.MemberExpression = MemberExpression);
    (exports.FunctionExpression = FunctionExpression);
    (exports.ArrayExpression = ArrayExpression);
    (exports.ObjectExpression = ObjectExpression);
    (exports.LetExpression = LetExpression);
    (exports.DoExpression = DoExpression);
    (exports.YieldExpression = YieldExpression);
    (exports.CurryExpression = CurryExpression);
    (exports.ApplyExpression = ApplyExpression);
    (exports.UnaryOperatorExpression = UnaryOperatorExpression);
    (exports.BinaryOperatorExpression = BinaryOperatorExpression);
    (exports.TernaryOperatorExpression = TernaryOperatorExpression);
}));