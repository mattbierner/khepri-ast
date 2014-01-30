/*
 * THIS FILE IS AUTO GENERATED from 'lib/pattern.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var defineNode = __o["defineNode"],
        Node = __o["Node"],
        Pattern, IdentifierPattern, EllipsisPattern, SinkPattern, ImportPattern, ArrayPattern,
            ObjectPatternElement, ObjectPattern, ArgumentsPattern, SubPattern, AsPattern;
    (Pattern = (function(loc) {
        var self = this;
        Node.call(self, loc);
    }));
    (Pattern.prototype = new(Node)());
    (IdentifierPattern = defineNode(Pattern, "IdentifierPattern", ["id"], [], (function(loc, id) {
        var self = this;
        Pattern.call(self, loc);
        (self.id = id);
    })));
    (EllipsisPattern = defineNode(Pattern, "EllipsisPattern", [], ["id"], (function(loc, id) {
        var self = this;
        Pattern.call(self, loc);
        (self.id = (id || null));
    })));
    (SinkPattern = defineNode(Pattern, "SinkPattern", [], [], (function(loc) {
        var self = this;
        Pattern.call(self, loc);
    })));
    (ImportPattern = defineNode(Node, "ImportPattern", ["from", "pattern"], [], (function(loc, from, pattern) {
        var self = this;
        Node.call(self, loc);
        (self.from = from);
        (self.pattern = pattern);
    })));
    (ArrayPattern = defineNode(Pattern, "ArrayPattern", ["elements"], [], (function(loc, elements) {
        var self = this;
        Pattern.call(self, loc);
        (self.elements = elements);
    })));
    (ObjectPatternElement = defineNode(Pattern, "ObjectPatternElement", ["key", "target"], [], (function(loc,
        key, target) {
        var self = this;
        Pattern.call(self, loc);
        (self.key = key);
        (self.target = (target || null));
    })));
    (ObjectPattern = defineNode(Pattern, "ObjectPattern", ["elements"], [], (function(loc, elements) {
        var self = this;
        Pattern.call(self, loc);
        (self.elements = elements);
    })));
    (AsPattern = defineNode(Pattern, "AsPattern", ["id", "target"], [], (function(loc, id, target) {
        var self = this;
        Pattern.call(self, loc);
        (self.id = id);
        (self.target = target);
    })));
    (SubPattern = defineNode(Pattern, "SubPattern", ["id", "elements"], [], (function(loc, id, elements) {
        var self = this;
        Pattern.call(self, loc);
        (self.id = id);
        (self.elements = elements);
    })));
    (ArgumentsPattern = defineNode(Pattern, "ArgumentsPattern", ["id", "elements", "self"], [], (function(loc,
        id, elements, self) {
        var T = this;
        Pattern.call(T, loc);
        (T.id = id);
        (T.elements = elements);
        (T.self = self);
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
    (exports.SubPattern = SubPattern);
    (exports.AsPattern = AsPattern);
}));