/*
 * THIS FILE IS AUTO GENERATED from 'lib/clause.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "khepri_ast/node"], (function(require, exports, __o) {
    "use strict";
    var Clause, SwitchCase, CatchClause;
    var __o = __o,
        defineNode = __o["defineNode"],
        Node = __o["Node"]; {
            (Clause = (function() {}));
            (Clause.prototype = new(Node)());
            (SwitchCase = defineNode(Clause, "SwitchCase", ["test", "consequent"], (function(loc, test, consequent) {
                Node.call(this, loc);
                (this.test = (test || null));
                (this.consequent = consequent);
            })));
            (CatchClause = defineNode(Clause, "CatchClause", ["param", "body"], (function(loc, param, body) {
                Node.call(this, loc);
                (this.param = param);
                (this.body = body);
            })));
    }
    (exports.Clause = Clause);
    (exports.SwitchCase = SwitchCase);
    (exports.CatchClause = CatchClause);
}))