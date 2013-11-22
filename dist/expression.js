/*
 * THIS FILE IS AUTO GENERATED from 'lib/expression.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "khepri_ast/node"], (function(require, exports, __o) {
    "use strict";
    var Expression, ThisExpression, UnaryExpression, BinaryExpression, AssignmentExpression, LogicalExpression, ConditionalExpression, NewExpression, CallExpression, MemberExpression, FunctionExpression, ArrayExpression, ObjectExpression, LetExpression, CurryExpression, UnaryOperatorExpression, BinaryOperatorExpression, TernaryOperatorExpression;
    var __o = __o,
        defineNode = __o["defineNode"],
        Node = __o["Node"];
    (Expression = (function() {}));
    (Expression.prototype = new(Node)());
    (ThisExpression = defineNode(Expression, "ThisExpression", [], [], (function(loc) {
        Node.call(this, loc);
    })));
    (UnaryExpression = defineNode(Expression, "UnaryExpression", ["argument"], [], (function(loc, operator, argument) {
        Node.call(this, loc);
        (this.operator = operator);
        (this.argument = argument);
    })));
    (BinaryExpression = defineNode(Expression, "BinaryExpression", ["left", "right"], [], (function(loc, operator, left, right) {
        Node.call(this, loc);
        (this.operator = operator);
        (this.left = left);
        (this.right = right);
    })));
    (AssignmentExpression = defineNode(Expression, "AssignmentExpression", ["left", "right"], ["operator"], (function(loc, operator, left, right) {
        Node.call(this, loc);
        (this.operator = operator);
        (this.left = left);
        (this.right = right);
    })));
    (LogicalExpression = defineNode(Expression, "LogicalExpression", ["left", "right"], ["operator"], (function(loc, operator, left, right) {
        Node.call(this, loc);
        (this.operator = operator);
        (this.left = left);
        (this.right = right);
    })));
    (ConditionalExpression = defineNode(Expression, "ConditionalExpression", ["test", "consequent", "alternate"], [], (function(loc, test, consequent, alternate) {
        Node.call(this, loc);
        (this.test = test);
        (this.consequent = consequent);
        (this.alternate = alternate);
    })));
    (NewExpression = defineNode(Expression, "NewExpression", ["callee", "args"], (function(loc, callee, args) {
        Node.call(this, loc);
        (this.callee = callee);
        (this.args = args);
    })));
    (CallExpression = defineNode(Expression, "CallExpression", ["callee", "args"], [], (function(loc, callee, args) {
        Node.call(this, loc);
        (this.callee = callee);
        (this.args = args);
    })));
    (MemberExpression = defineNode(Expression, "MemberExpression", ["object", "property"], ["computed"], (function(loc, object, property, computed) {
        Node.call(this, loc);
        (this.object = object);
        (this.property = property);
        (this.computed = computed);
    })));
    (FunctionExpression = defineNode(Expression, "FunctionExpression", ["id", "params", "body"], (function(loc, id, params, body) {
        Node.call(this, loc);
        (this.id = (id || null));
        (this.params = params);
        (this.body = body);
    })));
    (ArrayExpression = defineNode(Expression, "ArrayExpression", ["elements"], [], (function(loc, elements) {
        Node.call(this, loc);
        (this.elements = elements);
    })));
    (ObjectExpression = defineNode(Expression, "ObjectExpression", ["properties"], [], (function(loc, properties) {
        Node.call(this, loc);
        (this.properties = properties);
    })));
    (LetExpression = defineNode(Expression, "LetExpression", ["bindings", "body"], [], (function(loc, bindings, body) {
        Node.call(this, loc);
        (this.bindings = bindings);
        (this.body = body);
    })));
    (CurryExpression = defineNode(Expression, "CurryExpression", ["base", "args"], [], (function(loc, base, args) {
        Node.call(this, loc);
        (this.base = base);
        (this.args = args);
    })));
    (UnaryOperatorExpression = defineNode(Expression, "UnaryOperatorExpression", [], ["op"], (function(loc, op) {
        Node.call(this, loc);
        (this.op = op);
    })));
    (BinaryOperatorExpression = defineNode(Expression, "BinaryOperatorExpression", [], ["op"], (function(loc, op) {
        Node.call(this, loc);
        (this.op = op);
    })));
    (TernaryOperatorExpression = defineNode(Expression, "TernaryOperatorExpression", [], ["op"], (function(loc, op) {
        Node.call(this, loc);
        (this.op = op);
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
    (exports.CurryExpression = CurryExpression);
    (exports.UnaryOperatorExpression = UnaryOperatorExpression);
    (exports.BinaryOperatorExpression = BinaryOperatorExpression);
    (exports.TernaryOperatorExpression = TernaryOperatorExpression);
}))