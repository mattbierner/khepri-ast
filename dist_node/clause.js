"use strict";
var __o = require("./node"),
    defineNode = __o["defineNode"],
    Node = __o["Node"],
    Clause, SwitchCase, CatchClause;
(Clause = (function() {}));
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
(exports.Clause = Clause);
(exports.SwitchCase = SwitchCase);
(exports.CatchClause = CatchClause);