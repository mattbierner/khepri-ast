# ChangeLog #

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