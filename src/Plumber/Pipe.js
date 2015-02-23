/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function Pipe(boundingBox) {
    this.boundingBox = boundingBox;
}

_.extend(Pipe.prototype, {
    getHeight: function () {
        return this.boundingBox.getHeight();
    },

    getLeft: function () {
        return this.boundingBox.getLeft();
    },

    getRight: function () {
        return this.boundingBox.getRight();
    },

    getTop: function () {
        return this.boundingBox.getTop();
    },

    getWidth: function () {
        return this.boundingBox.getWidth();
    },

    intersectsBoundingBox: function (boundingBox) {
        return this.boundingBox.intersectsBoundingBox(boundingBox);
    }
});

module.exports = Pipe;
