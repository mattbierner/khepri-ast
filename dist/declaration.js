/*
 * THIS FILE IS AUTO GENERATED from 'lib/declaration.kep'
 * DO NOT EDIT
*/define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var Declaration, VariableDeclaration, VariableDeclarator, Binding, StaticDeclaration, StaticDeclarator,
            defineNode = __o["defineNode"],
        Node = __o["Node"];
    (Declaration = (function() {
        var self = this;
    }));
    (Declaration.prototype = new(Node)());
    (VariableDeclaration = defineNode(Declaration, "VariableDeclaration", ["declarations"], [], (function(loc,
        declarations) {
        var self = this;
        Node.call(self, loc);
        (self.declarations = declarations);
    })));
    (VariableDeclarator = defineNode(Declaration, "VariableDeclarator", ["id", "init"], ["immutable",
        "recursive"
    ], (function(loc, id, init, immutable, recursive) {
        var self = this;
        Node.call(self, loc);
        (self.id = id);
        (self.init = (init || null));
        (self.immutable = (!(!immutable)));
        (self.recursive = recursive);
    })));
    (Binding = defineNode(Declaration, "Binding", ["pattern", "value"], ["recursive"], (function(loc, pattern,
        value, recursive) {
        var self = this;
        Node.call(self, loc);
        (self.pattern = pattern);
        (self.value = value);
        (self.recursive = recursive);
    })));
    (StaticDeclaration = defineNode(Declaration, "StaticDeclaration", ["declarations"], [], (function(loc,
        declarations) {
        var self = this;
        Node.call(self, loc);
        (self.declarations = declarations);
    })));
    (StaticDeclarator = defineNode(Declaration, "StaticDeclarator", ["id", "init"], [], (function(loc, id, init) {
        var self = this;
        Node.call(self, loc);
        (self.id = id);
        (self.init = init);
    })));
    (exports["Declaration"] = Declaration);
    (exports["VariableDeclaration"] = VariableDeclaration);
    (exports["VariableDeclarator"] = VariableDeclarator);
    (exports["Binding"] = Binding);
    (exports["StaticDeclaration"] = StaticDeclaration);
    (exports["StaticDeclarator"] = StaticDeclarator);
}));