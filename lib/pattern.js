/*
 * THIS FILE IS AUTO GENERATED from 'lib/pattern.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "khepri_ast/node"], (function(require, exports, __o) {
    "use strict";
    var Pattern, IdentifierPattern, EllipsisPattern, SinkPattern, ImportPattern, ArrayPattern, ObjectPattern, ParameterList;
    var __o = __o,
        defineNode = __o["defineNode"],
        Node = __o["Node"]; {
            (Pattern = (function(loc) {
                Node.call(this, loc);
            }));
            (Pattern.prototype = new Node());
            (IdentifierPattern = defineNode(Pattern, "IdentifierPattern", ["id"], (function(loc, id) {
                Pattern.call(this, loc);
                (this.id = id);
            })));
            (EllipsisPattern = defineNode(Pattern, "EllipsisPattern", [], (function(loc) {
                Pattern.call(this, loc);
            })));
            (SinkPattern = defineNode(Pattern, "SinkPattern", [], (function(loc) {
                Pattern.call(this, loc);
            })));
            (ImportPattern = defineNode(Node, "ImportPattern", ["from", "pattern"], (function(loc, from, pattern) {
                Node.call(this, loc);
                (this.from = from);
                (this.pattern = pattern);
            })));
            (ArrayPattern = defineNode(Pattern, "ArrayPattern", ["id", "elements"], (function(loc, id, elements) {
                Pattern.call(this, loc);
                (this.id = (id || null));
                (this.elements = elements);
            })));
            (ObjectPattern = defineNode(Pattern, "ObjectPattern", ["id", "elements"], (function(loc, id, elements) {
                Pattern.call(this, loc);
                (this.id = (id || null));
                (this.elements = elements);
            })));
            (ParameterList = defineNode(Pattern, "ParameterList", ["patterns"], (function(loc, patterns) {
                Pattern.call(this, loc);
                (this.patterns = patterns);
            })));
    }
    (exports.Pattern = Pattern);
    (exports.IdentifierPattern = IdentifierPattern);
    (exports.EllipsisPattern = EllipsisPattern);
    (exports.SinkPattern = SinkPattern);
    (exports.ImportPattern = ImportPattern);
    (exports.ArrayPattern = ArrayPattern);
    (exports.ObjectPattern = ObjectPattern);
    (exports.ParameterList = ParameterList);
}))