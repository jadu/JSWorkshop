/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function Character(boundingBox) {
    this.boundingBox = boundingBox;
}

_.extend(Character.prototype, {
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

    intersectsPipe: function (pipe) {
        return pipe.intersectsBoundingBox(this.boundingBox);
    },

    setLeft: function (left) {
        this.boundingBox.setLeft(left);
    },

    setTop: function (left) {
        this.boundingBox.setTop(left);
    }
});

module.exports = Character;
