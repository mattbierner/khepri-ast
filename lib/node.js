/*
 * THIS FILE IS AUTO GENERATED from 'lib/node.kep'
 * DO NOT EDIT
*/
define(["require", "exports"], (function(require, exports) {
    "use strict";
    var Node, construct, defineNode;
    var concatArgs = (function() {
        var map = (function(x) {
            return x;
        });
        return (function(arr, args) {
            return arr.concat([].map.call(args, map));
        });
    })();
    (Node = (function(loc) {
        (this.loc = loc);
    }));
    (Node.prototype.toString = (function() {
        return (("{" + this.type) + "}");
    }));
    (construct = (function(x, children) {
        var properties = ({});
        Object.keys(children).forEach((function(key) {
            (properties[key] = ({
                "value": children[key],
                "enumerable": true,
                "configurable": true
            }));
        }));
        Object.keys(x.children).forEach((function(key) {
            (properties[key] = ({
                "value": null,
                "enumerable": true,
                "configurable": true
            }));
        }));
        Object.keys(x).forEach((function(key) {
            if (!properties.hasOwnProperty(key))(properties[key] = ({
                "value": x[key],
                "enumerable": true,
                "configurable": true
            }));

        }));
        return Object.create(Object.getPrototypeOf(x), properties);
    }));
    (defineNode = (function(parent, type, children, ctor) {
        (ctor.type = type);
        (ctor.children = children);
        (ctor.prototype = new parent());
        (ctor.prototype.constructor = ctor);
        (ctor.prototype.type = ctor.type);
        (ctor.create = (function() {
            return new ctor.bind.apply(ctor, concatArgs([null], arguments))();
        }));
        return ctor;
    }));
    (exports.Node = Node);
    (exports.construct = construct);
    (exports.defineNode = defineNode);
}))