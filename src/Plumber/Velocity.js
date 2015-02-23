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
    this.yVelocity = 0;
}

_.extend(Velocity.prototype, {
    act: function () {
        var velocity = this;

        velocity.boundingBox.setLeft(velocity.boundingBox.getLeft() + velocity.xVelocity);
        velocity.boundingBox.setTop(velocity.boundingBox.getTop() - velocity.yVelocity);
    },

    decay: function (coefficient) {
        var velocity = this;

        velocity.xVelocity *= coefficient;
        velocity.yVelocity *= coefficient;

        if (Math.abs(velocity.xVelocity) < EPSILON) {
            velocity.xVelocity = 0;
        }

        if (Math.abs(velocity.yVelocity) < EPSILON) {
            velocity.yVelocity = 0;
        }
    },

    increaseX: function (delta) {
        this.xVelocity += delta;
    },

    increaseY: function (delta) {
        this.yVelocity += delta;
    }
});

module.exports = Velocity;
