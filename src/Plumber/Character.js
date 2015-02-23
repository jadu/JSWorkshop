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

    getTop: function () {
        return this.boundingBox.getTop();
    },

    getWidth: function () {
        return this.boundingBox.getWidth();
    }
});

module.exports = Character;
