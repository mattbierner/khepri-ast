"use strict";
var __o = require("khepri_ast/node"),
    defineNode = __o["defineNode"],
    Node = __o["Node"],
    Clause, SwitchCase, CatchClause;
(Clause = (function() {}));
(Clause.prototype = new(Node)());
(SwitchCase = defineNode(Clause, "SwitchCase", ["test", "consequent"], [], (function(loc, test, consequent) {
    Node.call(this, loc);
    (this.test = (test || null));
    (this.consequent = consequent);
})));
(CatchClause = defineNode(Clause, "CatchClause", ["param", "body"], [], (function(loc, param, body) {
    Node.call(this, loc);
    (this.param = param);
    (this.body = body);
})));
(exports.Clause = Clause);
(exports.SwitchCase = SwitchCase);
(exports.CatchClause = CatchClause);