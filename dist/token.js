/*
 * THIS FILE IS AUTO GENERATED from 'lib/token.kep'
 * DO NOT EDIT
*/define(["require", "exports", "./node"], (function(require, exports, __o) {
    "use strict";
    var Token, StringToken, NumberToken, RegularExpressionToken, BooleanToken, NullToken, IdentifierToken,
            KeywordToken, PunctuatorToken, PrefixOperatorToken, InfixOperatorToken, CommentToken,
            WhitespaceToken, LineTerminatorToken, defineNode = __o["defineNode"],
        Node = __o["Node"];
    (Token = (function(loc, value) {
        var self = this;
        Node.call(self, loc);
        (self.value = value);
    }));
    (Token.prototype = new(Node)());
    (StringToken = defineNode(Token, "String", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (NumberToken = defineNode(Token, "Number", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (RegularExpressionToken = defineNode(Token, "RegularExpression", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (BooleanToken = defineNode(Token, "Boolean", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (NullToken = defineNode(Token, "Null", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (IdentifierToken = defineNode(Token, "Identifier", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (KeywordToken = defineNode(Token, "Keyword", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (PunctuatorToken = defineNode(Token, "Punctuator", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (PrefixOperatorToken = defineNode(Token, "PrefixOperator", [], ["value", "base"], (function(loc, value,
        base) {
        var self = this;
        Token.call(self, loc, value);
        (self.base = base);
    })));
    (InfixOperatorToken = defineNode(Token, "InfixOperator", [], ["value", "base"], (function(loc, value, base) {
        var self = this;
        Token.call(self, loc, value);
        (self.base = base);
    })));
    (CommentToken = defineNode(Token, "Comment", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (WhitespaceToken = defineNode(Token, "Whitespace", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (LineTerminatorToken = defineNode(Token, "LineTerminator", [], ["value"], (function(loc, value) {
        var self = this;
        Token.call(self, loc, value);
    })));
    (exports["Token"] = Token);
    (exports["StringToken"] = StringToken);
    (exports["NumberToken"] = NumberToken);
    (exports["RegularExpressionToken"] = RegularExpressionToken);
    (exports["BooleanToken"] = BooleanToken);
    (exports["NullToken"] = NullToken);
    (exports["IdentifierToken"] = IdentifierToken);
    (exports["KeywordToken"] = KeywordToken);
    (exports["PunctuatorToken"] = PunctuatorToken);
    (exports["PrefixOperatorToken"] = PrefixOperatorToken);
    (exports["InfixOperatorToken"] = InfixOperatorToken);
    (exports["CommentToken"] = CommentToken);
    (exports["WhitespaceToken"] = WhitespaceToken);
    (exports["LineTerminatorToken"] = LineTerminatorToken);
}));