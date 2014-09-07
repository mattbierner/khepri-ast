/*
 * THIS FILE IS AUTO GENERATED from 'lib/pattern.kep'
 * DO NOT EDIT
*/"use strict";
var __o = require("./node"),
    Pattern, IdentifierPattern, EllipsisPattern, SinkPattern, ImportPattern, ArrayPattern, ObjectPatternElement,
        ObjectPattern, ArgumentsPattern, AsPattern, defineNode = __o["defineNode"],
    Node = __o["Node"];
(Pattern = (function() {
    var self = this;
}));
(Pattern.prototype = new(Node)());
(IdentifierPattern = defineNode(Pattern, "IdentifierPattern", ["id"], [], (function(loc, id) {
    var self = this;
    Node.call(self, loc);
    (self.id = id);
})));
(EllipsisPattern = defineNode(Pattern, "EllipsisPattern", ["id"], [], (function(loc, id) {
    var self = this;
    Node.call(self, loc);
    (self.id = (id || null));
})));
(SinkPattern = defineNode(Pattern, "SinkPattern", [], [], (function(loc) {
    var self = this;
    Node.call(self, loc);
})));
(ImportPattern = defineNode(Node, "ImportPattern", ["from", "pattern"], [], (function(loc, from, pattern) {
    var self = this;
    Node.call(self, loc);
    (self.from = from);
    (self.pattern = pattern);
})));
(ArrayPattern = defineNode(Pattern, "ArrayPattern", ["elements"], ["checked"], (function(loc, elements, checked) {
    var self = this;
    Node.call(self, loc);
    (self.elements = elements);
    (self.checked = (!(!checked)));
})));
(ObjectPatternElement = defineNode(Pattern, "ObjectPatternElement", ["key", "target"], ["checked"], (function(loc, key,
    target, checked) {
    var self = this;
    Node.call(self, loc);
    (self.key = key);
    (self.target = (target || null));
    (self.checked = (!(!checked)));
})));
(ObjectPattern = defineNode(Pattern, "ObjectPattern", ["elements"], [], (function(loc, elements) {
    var self = this;
    Node.call(self, loc);
    (self.elements = elements);
})));
(AsPattern = defineNode(Pattern, "AsPattern", ["id", "target"], [], (function(loc, id, target) {
    var self = this;
    Node.call(self, loc);
    (self.id = id);
    (self.target = target);
})));
(ArgumentsPattern = defineNode(Pattern, "ArgumentsPattern", ["id", "elements", "self"], [], (function(loc, id, elements,
    self) {
    var T = this;
    Node.call(T, loc);
    (T.id = id);
    (T.elements = elements);
    (T.self = self);
})));
(exports["Pattern"] = Pattern);
(exports["IdentifierPattern"] = IdentifierPattern);
(exports["EllipsisPattern"] = EllipsisPattern);
(exports["SinkPattern"] = SinkPattern);
(exports["ImportPattern"] = ImportPattern);
(exports["ArrayPattern"] = ArrayPattern);
(exports["ObjectPatternElement"] = ObjectPatternElement);
(exports["ObjectPattern"] = ObjectPattern);
(exports["ArgumentsPattern"] = ArgumentsPattern);
(exports["AsPattern"] = AsPattern);