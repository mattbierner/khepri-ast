/*
 * THIS FILE IS AUTO GENERATED from 'lib/pattern.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "khepri_ast/node"], (function(require, exports, __o) {
    "use strict";
    var Pattern, IdentifierPattern, EllipsisPattern, SinkPattern, ImportPattern, ArrayPattern, ObjectPatternElement, ObjectPattern, ArgumentsPattern;
    var __o = __o,
        defineNode = __o["defineNode"],
        Node = __o["Node"];
    (Pattern = (function(loc) {
        Node.call(this, loc);
    }));
    (Pattern.prototype = new(Node)());
    (IdentifierPattern = defineNode(Pattern, "IdentifierPattern", ["id"], [], (function(loc, id) {
        Pattern.call(this, loc);
        (this.id = id);
    })));
    (EllipsisPattern = defineNode(Pattern, "EllipsisPattern", ["id"], [], (function(loc, id) {
        Pattern.call(this, loc);
        (this.id = (id || null));
    })));
    (SinkPattern = defineNode(Pattern, "SinkPattern", [], [], (function(loc) {
        Pattern.call(this, loc);
    })));
    (ImportPattern = defineNode(Node, "ImportPattern", ["from", "pattern"], [], (function(loc, from, pattern) {
        Node.call(this, loc);
        (this.from = from);
        (this.pattern = pattern);
    })));
    (ArrayPattern = defineNode(Pattern, "ArrayPattern", ["id", "elements"], [], (function(loc, id, elements) {
        Pattern.call(this, loc);
        (this.id = (id || null));
        (this.elements = elements);
    })));
    (ObjectPatternElement = defineNode(Pattern, "ObjectPatternElement", ["key", "target"], [], (function(loc, key, target) {
        Pattern.call(this, loc);
        (this.key = key);
        (this.target = (target || null));
    })));
    (ObjectPattern = defineNode(Pattern, "ObjectPattern", ["id", "elements"], [], (function(loc, id, elements) {
        Pattern.call(this, loc);
        (this.id = (id || null));
        (this.elements = elements);
    })));
    (ArgumentsPattern = defineNode(Pattern, "ArgumentsPattern", ["id", "elements"], [], (function(loc, id, elements) {
        Pattern.call(this, loc);
        (this.id = (id || null));
        (this.elements = elements);
    })));
    (exports.Pattern = Pattern);
    (exports.IdentifierPattern = IdentifierPattern);
    (exports.EllipsisPattern = EllipsisPattern);
    (exports.SinkPattern = SinkPattern);
    (exports.ImportPattern = ImportPattern);
    (exports.ArrayPattern = ArrayPattern);
    (exports.ObjectPatternElement = ObjectPatternElement);
    (exports.ObjectPattern = ObjectPattern);
    (exports.ArgumentsPattern = ArgumentsPattern);
}))