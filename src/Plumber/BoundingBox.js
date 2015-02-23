/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function BoundingBox(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
}

_.extend(BoundingBox.prototype, {
    getHeight: function () {
        return this.height;
    },

    getWidth: function () {
        return this.width;
    },

    getLeft: function () {
        return this.x;
    },

    getRight: function () {
        return this.x + this.width;
    },

    getTop: function () {
        return this.y;
    },

    intersectsBoundingBox: function (otherBox) {
        var box = this;

        // Box is out to left of otherBox
        if (box.getLeft() + box.getWidth() < otherBox.getLeft()) {
            return false;
        }

        // Box is out to right of otherBox
        if (box.getLeft() + box.getWidth() > otherBox.getLeft() + otherBox.getWidth()) {
            return false;
        }

        // Box is out above otherBox
        if (box.getTop() + box.getHeight() < otherBox.getTop()) {
            return false;
        }

        // Box is out below otherBox
        if (box.getTop() > otherBox.getTop() + otherBox.getHeight()) {
            return false;
        }

        return true;
    },

    setLeft: function (left) {
        this.x = left;
    }
});

module.exports = BoundingBox;
