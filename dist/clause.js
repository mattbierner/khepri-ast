/*
 * THIS FILE IS AUTO GENERATED from 'lib/clause.kep'
 * DO NOT EDIT
*/define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var Clause, SwitchCase, CatchClause, defineNode = __o["defineNode"],
        Node = __o["Node"];
    (Clause = (function() {
        var self = this;
    }));
    (Clause.prototype = new(Node)());
    (SwitchCase = defineNode(Clause, "SwitchCase", ["test", "consequent"], [], (function(loc, test, consequent) {
        var self = this;
        Node.call(self, loc);
        (self.test = (test || null));
        (self.consequent = consequent);
    })));
    (CatchClause = defineNode(Clause, "CatchClause", ["param", "body"], [], (function(loc, param, body) {
        var self = this;
        Node.call(self, loc);
        (self.param = param);
        (self.body = body);
    })));
    (exports["Clause"] = Clause);
    (exports["SwitchCase"] = SwitchCase);
    (exports["CatchClause"] = CatchClause);
}));