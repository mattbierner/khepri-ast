# ChangeLog #

## 4.0.0 - May 5, 2014
* Added `OperatorToken` to distinguish punctuators that are used as operators.
* Moved operator expressions to value package.
* Removed `SubPattern`

## 3.10.2 - May 5, 2014
* Fixed `SourceLocation.toString`.

## 3.10.0 - May 5, 2014
* Added optional file field to `SourceLocation`.

## 3.9.1 - April 13, 2014
* Fixed potentially incorrect reconstruction with modify for falsy values.

## 3.9.0 - April 7, 2014
* Fixed `EllipsisPattern` having `id` as an attribute instead of an child.

## 3.8.1 - April 2, 2014
* Fixed setData.

## 3.8.0 - April 2, 2014
* Improved performance of Node modification.
* Changed node modification API to take base nodes instead of requiring prototype.

# 3.7.0 - March 24, 2014
* Removed `DoExpression` and `YieldExpression` for now.
* Added `flipped` attribute to `BinaryOperatorExpression`.

# 3.6.2 - March 4, 2014
* Added missing `monad` parameter for `DoExpression`.

# 3.6.1 - Feb 26, 2014
* Added position to `index.js`.

# 3.6.0 - Feb 26, 2014
* Moved position into library
* Added `immutable` and `recursive` attributes to variable declarations.

# 3.5.2 - Feb 23, 2014
* Republish

# 3.5.1 - Feb 23, 2014
* Moved `recursive` to correctly be attribute instead of child.

# 3.5.0 - Feb 23, 2014
* Added `recursive` property to `Binding`.
* Added `YieldExpression` and `DoExpression` for future use.

# 3.4.0 - Feb 3, 2014
* Removed `TupleExpression`.
* Added `ApplyExpression`.

# 3.3.0 - January 30, 2014
* Added `TupleExpression`.

# 3.2.1 - January 26, 2014
* Fixed paths.

# 3.2.0 - January 22, 2014
* Renamed `ArgumentsPattern` to `SubPattern`.
* Added `self` value to new `ArgumentsPattern`.
* Added node package.

# 3.1.0 - December 15, 2013
* Removed `id` member from `ObjectPattern` and `ArrayPattern`.
* Added `AsPattern` for generalizing this logic.

# 3.0.0 - Nov 22, 2013
* Update with `ecma_ast` features.
* Added `ObjectValue`

## 2.2.0 - Oct 16, 2013
* Renamed `ParameterPattern` to the more general `ArgumentsPattern`.
* Added `CurryExpression`, and `UnaryOperatorExpression`, `BinaryOperatorExpression`,
  and `TernaryOperatorExpression` for operators that have be turned into regular
  functions.

## 2.1.0 - Oct 14, 2013
* Added `ObjectPatternElement` for an element in an object pattern.
* Added `id` parameter to `EllipsisPattern`.

## 2.0.0 - Oct 14, 2013
* Renamed `LetBinding` to `Binding`.
* Removed `PackageImport` nodes and `PackageBody`.
* Renamed `Identifier` in pattern to `IdentifierPattern` and `Ellipsis` to `EllipsisPattern`.
* Added `SinkPattern` and `ImportPattern`.
* Added `WithStatement`.
* Fixed `ObjectPattern` and `ArrayPattern` not naming their children.

## 1.2.0 - Oct 10, 2013
* Added package nodes.

## 1.1.0 - July 27, 2013
* Added `ObjectPattern` and `ArrayPattern` pattens.

## 1.0.1 - July 27, 2013
* Fixed bad reference for declarations.

## 1.0.0 - July 26, 2013
* Initial fork from parse-ecma.
* Defined all nodes using common API to support reflection required by neith.
* Added node.construct for neith.