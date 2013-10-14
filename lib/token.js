/*
 * THIS FILE IS AUTO GENERATED from 'lib/token.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var Token, StringToken, NumberToken, RegularExpressionToken, BooleanToken, NullToken, IdentifierToken, KeywordToken, PunctuatorToken, CommentToken, WhitespaceToken, LineTerminatorToken;
    (Token = (function(loc, value) {
        (this.loc = loc);
        (this.value = value);
    }));
    (StringToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (StringToken.prototype = new Token());
    (StringToken.prototype.type = "String");
    (StringToken.prototype.constructor = StringToken);
    (NumberToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (NumberToken.prototype = new Token());
    (NumberToken.prototype.type = "Number");
    (NumberToken.prototype.constructor = NumberToken);
    (RegularExpressionToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (RegularExpressionToken.prototype = new Token());
    (RegularExpressionToken.prototype.type = "RegularExpression");
    (RegularExpressionToken.prototype.constructor = RegularExpressionToken);
    (BooleanToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (BooleanToken.prototype = new Token());
    (BooleanToken.prototype.type = "Boolean");
    (BooleanToken.prototype.constructor = BooleanToken);
    (NullToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (NullToken.prototype = new Token());
    (NullToken.prototype.type = "Null");
    (NullToken.prototype.constructor = NullToken);
    (IdentifierToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (IdentifierToken.prototype = new Token());
    (IdentifierToken.prototype.type = "Identifier");
    (IdentifierToken.prototype.constructor = IdentifierToken);
    (KeywordToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (KeywordToken.prototype = new Token());
    (KeywordToken.prototype.type = "Keyword");
    (KeywordToken.prototype.constructor = KeywordToken);
    (PunctuatorToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (PunctuatorToken.prototype = new Token());
    (PunctuatorToken.prototype.type = "Punctuator");
    (PunctuatorToken.prototype.constructor = PunctuatorToken);
    (CommentToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (CommentToken.prototype = new Token());
    (CommentToken.prototype.type = "Comment");
    (CommentToken.prototype.constructor = CommentToken);
    (WhitespaceToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (WhitespaceToken.prototype = new Token());
    (WhitespaceToken.prototype.type = "Whitespace");
    (WhitespaceToken.prototype.constructor = WhitespaceToken);
    (LineTerminatorToken = (function(loc, value) {
        Token.call(this, loc, value);
    }));
    (LineTerminatorToken.prototype = new Token());
    (LineTerminatorToken.prototype.type = "LineTerminator");
    (LineTerminatorToken.prototype.constructor = LineTerminatorToken);
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
}))