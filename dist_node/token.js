"use strict";
var __o = require("khepri_ast/node"),
    defineNode = __o["defineNode"],
    Node = __o["Node"],
    Token, StringToken, NumberToken, RegularExpressionToken, BooleanToken, NullToken, IdentifierToken, KeywordToken,
        PunctuatorToken, CommentToken, WhitespaceToken, LineTerminatorToken;
(Token = (function(loc, value) {
    Node.call(this, loc);
    (this.value = value);
}));
(Token.prototype = new(Node)());
(StringToken = defineNode(Token, "String", [], ["value"], (function(loc, value) {
    Token.call(this, loc, value);
})));
(NumberToken = defineNode(Token, "Number", [], ["value"], (function(loc, value) {
    Token.call(this, loc, value);
})));
(RegularExpressionToken = defineNode(Token, "RegularExpression", [], ["value"], (function(loc, value) {
    Token.call(this, loc, value);
})));
(BooleanToken = defineNode(Token, "Boolean", [], ["value"], (function(loc, value) {
    Token.call(this, loc, value);
})));
(NullToken = defineNode(Token, "Null", [], ["value"], (function(loc, value) {
    Token.call(this, loc, value);
})));
(IdentifierToken = defineNode(Token, "Identifier", [], ["value"], (function(loc, value) {
    Token.call(this, loc, value);
})));
(KeywordToken = defineNode(Token, "Keyword", [], ["value"], (function(loc, value) {
    Token.call(this, loc, value);
})));
(PunctuatorToken = defineNode(Token, "Punctuator", [], ["value"], (function(loc, value) {
    Token.call(this, loc, value);
})));
(CommentToken = defineNode(Token, "Comment", [], ["value", "multiline", "linebreak"], (function(loc, value, multiline,
    linebreak) {
    Token.call(this, loc, value);
    (this.multiline = !!multiline);
    (this.linebreak = !!linebreak);
})));
(WhitespaceToken = defineNode(Token, "Whitespace", [], ["value"], (function(loc, value) {
    Token.call(this, loc, value);
})));
(LineTerminatorToken = defineNode(Token, "LineTerminator", [], ["value"], (function(loc, value) {
    Token.call(this, loc, value);
})));
(exports.Token = Token);
(exports.StringToken = StringToken);
(exports.NumberToken = NumberToken);
(exports.RegularExpressionToken = RegularExpressionToken);
(exports.BooleanToken = BooleanToken);
(exports.NullToken = NullToken);
(exports.IdentifierToken = IdentifierToken);
(exports.KeywordToken = KeywordToken);
(exports.PunctuatorToken = PunctuatorToken);
(exports.CommentToken = CommentToken);
(exports.WhitespaceToken = WhitespaceToken);
(exports.LineTerminatorToken = LineTerminatorToken);