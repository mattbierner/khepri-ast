/*
 * THIS FILE IS AUTO GENERATED from 'lib/serialization.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "khepri_ast/node"], (function(require, exports, khepri_node) {
    "use strict";
    var registerNode, serialize, unserialize;
    var khepri_node = khepri_node;
    var keys = Object.keys;
    var map = Function.prototype.call.bind(Array.prototype.map);
    var reduce = Function.prototype.call.bind(Array.prototype.reduce);
    var id = (function(x) {
        return x;
    });
    var typeMap = ({});
    (registerNode = (function(type, ctor) {
        (typeMap[type] = ctor);
    }));
    (serialize = (function() {
        {
            var _serialize = (function(node, locSerializer, udSerializer) {
                if (!node) return node;

                if (Array.isArray(node)) return map(node, (function(x) {
                    return _serialize(x, locSerializer, udSerializer);
                }));

                if (!(node instanceof khepri_node.Node)) return node;

                return ({
                    "type": node.type,
                    "loc": locSerializer(node.loc),
                    "ud": udSerializer(node.ud),
                    "children": reduce(node.children, (function(o, childKey) {
                        (o[childKey] = _serialize(node[childKey], locSerializer, udSerializer));
                        return o;
                    }), ({})),
                    "attributes": reduce(node.attributes, (function(o, key) {
                        (o[key] = node[key]);
                        return o;
                    }), ({}))
                });
            });
            return (function(node, locSerializer, udSerializer) {
                var program = _serialize(node, (locSerializer || id), (udSerializer || id));
                return ({
                    "version": "2.1.0",
                    "kind": "ecma",
                    "program": program
                });
            });
        }
    })());
    (unserialize = (function() {
        var _unserialize = (function(data, locUnserializer, udUnserializer) {
            if (!data) return data;

            if (Array.isArray(data)) return map(data, (function(x) {
                return _unserialize(x, locUnserializer, udUnserializer);
            }));

            var ctor = typeMap[data.type];
            if (!ctor) return data;

            var loc = locUnserializer(data.loc),
                ud = udUnserializer(data.ud);
            var children = reduce(keys(data.children), (function(o, c) {
                (o[c] = _unserialize(data.children[c], locUnserializer, udUnserializer));
                return o;
            }), ({}));
            var attributes = reduce(keys(data.attributes), (function(o, c) {
                (o[c] = data.attributes[c]);
                return o;
            }), ({}));
            return khepri_node.construct(ctor.prototype, loc, ud, children, attributes);
        });
        return (function(data, locSerializer, udSerializer) {
            return _unserialize(data.program, (locSerializer || id), (udSerializer || id));
        });
    })());
    (exports.registerNode = registerNode);
    (exports.serialize = serialize);
    (exports.unserialize = unserialize);
}))