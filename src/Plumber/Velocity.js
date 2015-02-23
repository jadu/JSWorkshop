/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var EPSILON = 0.01,
    _ = require('lodash');

function Velocity(boundingBox) {
    this.boundingBox = boundingBox;
    this.xVelocity = 0;
}

_.extend(Velocity.prototype, {
    act: function () {
        var velocity = this;

        velocity.boundingBox.setLeft(velocity.boundingBox.getLeft() + velocity.xVelocity);
    },

    decay: function (coefficient) {
        var velocity = this;

        velocity.xVelocity *= coefficient;

        if (Math.abs(velocity.xVelocity) < EPSILON) {
            velocity.xVelocity = 0;
        }
    },

    increaseX: function (delta) {
        this.xVelocity += delta;
    }
});

module.exports = Velocity;
