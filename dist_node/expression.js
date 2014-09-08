/*
 * THIS FILE IS AUTO GENERATED from 'lib/expression.kep'
 * DO NOT EDIT
*/"use strict";
var __o = require("./node"),
    Expression, UnaryExpression, BinaryExpression, AssignmentExpression, ConditionalExpression, NewExpression,
        CallExpression, MemberExpression, CheckedExpression, FunctionExpression, ArrayExpression, ObjectExpression,
        LetExpression, OperatorExpression, CurryExpression, ApplyExpression, defineNode = __o["defineNode"],
    Node = __o["Node"];
(Expression = (function() {
    var self = this;
}));
(Expression.prototype = new(Node)());
(UnaryExpression = defineNode(Expression, "UnaryExpression", ["operator", "argument"], [], (function(loc, operator,
    argument) {
    var self = this;
    Node.call(self, loc);
    (self.operator = operator);
    (self.argument = argument);
})));
(BinaryExpression = defineNode(Expression, "BinaryExpression", ["operator", "left", "right"], [], (function(loc,
    operator, left, right) {
    var self = this;
    Node.call(self, loc);
    (self.operator = operator);
    (self.left = left);
    (self.right = right);
})));
(AssignmentExpression = defineNode(Expression, "AssignmentExpression", ["left", "right"], ["immutable"], (function(loc,
    left, right, immutable) {
    var self = this;
    Node.call(self, loc);
    (self.left = left);
    (self.right = right);
    (self.immutable = immutable);
})));
(ConditionalExpression = defineNode(Expression, "ConditionalExpression", ["test", "consequent", "alternate"], [], (
    function(loc, test, consequent, alternate) {
        var self = this;
        Node.call(self, loc);
        (self.test = test);
        (self.consequent = consequent);
        (self.alternate = alternate);
    })));
(NewExpression = defineNode(Expression, "NewExpression", ["callee", "args"], [], (function(loc, callee, args) {
    var self = this;
    Node.call(self, loc);
    (self.callee = callee);
    (self.args = args);
})));
(CallExpression = defineNode(Expression, "CallExpression", ["callee", "args"], [], (function(loc, callee, args) {
    var self = this;
    Node.call(self, loc);
    (self.callee = callee);
    (self.args = args);
})));
(MemberExpression = defineNode(Expression, "MemberExpression", ["object", "property"], ["computed"], (function(loc,
    object, property, computed) {
    var self = this;
    Node.call(self, loc);
    (self.object = object);
    (self.property = property);
    (self.computed = (!(!computed)));
})));
(CheckedExpression = defineNode(Expression, "CheckedExpression", ["left", "right"], [], (function(loc, left, right) {
    var self = this;
    Node.call(self, loc);
    (self.left = left);
    (self.right = right);
})));
(FunctionExpression = defineNode(Expression, "FunctionExpression", ["id", "params", "body"], [], (function(loc, id,
    params, body) {
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
(ObjectExpression = defineNode(Expression, "ObjectExpression", ["properties"], [], (function(loc, properties) {
    var self = this;
    Node.call(self, loc);
    (self.properties = properties);
})));
(LetExpression = defineNode(Expression, "LetExpression", ["bindings", "body"], [], (function(loc, bindings, body) {
    var self = this;
    Node.call(self, loc);
    (self.bindings = bindings);
    (self.body = body);
})));
(OperatorExpression = defineNode(Node, "OperatorExpression", ["operator"], ["flipped"], (function(loc, operator,
    flipped) {
    var self = this;
    Node.call(self, loc);
    (self.operator = operator);
    (self.flipped = flipped);
})));
(CurryExpression = defineNode(Expression, "CurryExpression", ["base", "args"], [], (function(loc, base, args) {
    var self = this;
    Node.call(self, loc);
    (self.base = base);
    (self.args = args);
})));
(ApplyExpression = defineNode(Expression, "ApplyExpression", ["callee", "arg"], [], (function(loc, callee, arg) {
    var self = this;
    Node.call(self, loc);
    (self.callee = callee);
    (self.arg = arg);
})));
(exports["Expression"] = Expression);
(exports["UnaryExpression"] = UnaryExpression);
(exports["BinaryExpression"] = BinaryExpression);
(exports["AssignmentExpression"] = AssignmentExpression);
(exports["ConditionalExpression"] = ConditionalExpression);
(exports["NewExpression"] = NewExpression);
(exports["CallExpression"] = CallExpression);
(exports["MemberExpression"] = MemberExpression);
(exports["CheckedExpression"] = CheckedExpression);
(exports["FunctionExpression"] = FunctionExpression);
(exports["ArrayExpression"] = ArrayExpression);
(exports["ObjectExpression"] = ObjectExpression);
(exports["LetExpression"] = LetExpression);
(exports["OperatorExpression"] = OperatorExpression);
(exports["CurryExpression"] = CurryExpression);
(exports["ApplyExpression"] = ApplyExpression);