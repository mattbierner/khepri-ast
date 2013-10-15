/*
 * THIS FILE IS AUTO GENERATED from 'lib/declaration.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "khepri_ast/node"], (function(require, exports, __o) {
    "use strict";
    var Declaration, VariableDeclaration, VariableDeclarator, Binding, StaticDeclaration, StaticDeclarator;
    var __o = __o,
        defineNode = __o["defineNode"],
        Node = __o["Node"]; {
            (Declaration = (function() {}));
            (Declaration.prototype = new(Node)());
            (VariableDeclaration = defineNode(Declaration, "VariableDeclaration", ["declarations"], (function(loc, declarations) {
                Node.call(this, loc);
                (this.declarations = declarations);
            })));
            (VariableDeclarator = defineNode(Declaration, "VariableDeclarator", ["id", "init"], (function(loc, id, init) {
                Node.call(this, loc);
                (this.id = id);
                (this.init = (init || null));
            })));
            (Binding = defineNode(Declaration, "Binding", ["pattern", "value"], (function(loc, pattern, value) {
                Node.call(this, loc);
                (this.pattern = pattern);
                (this.value = value);
            })));
            (StaticDeclaration = defineNode(Declaration, "StaticDeclaration", ["declarations"], (function(loc, declarations) {
                Node.call(this, loc);
                (this.declarations = declarations);
            })));
            (StaticDeclarator = defineNode(Declaration, "StaticDeclarator", ["id", "init"], (function(loc, id, init) {
                Node.call(this, loc);
                (this.id = id);
                (this.init = init);
            })));
    }
    (exports.Declaration = Declaration);
    (exports.VariableDeclaration = VariableDeclaration);
    (exports.VariableDeclarator = VariableDeclarator);
    (exports.Binding = Binding);
    (exports.StaticDeclaration = StaticDeclaration);
    (exports.StaticDeclarator = StaticDeclarator);
}))