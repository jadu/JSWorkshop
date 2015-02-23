/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function Controls(xDelta, yDelta) {
    this.velocity = null;
    this.xDelta = xDelta;
    this.yDelta = yDelta;
}

_.extend(Controls.prototype, {
    control: function (velocity) {
        this.velocity = velocity;
    },

    moveLeft: function () {
        var controls = this;

        controls.velocity.increaseX(-controls.xDelta);
    },

    moveRight: function () {
        var controls = this;

        controls.velocity.increaseX(controls.xDelta);
    },

    moveUp: function () {
        var controls = this;

        controls.velocity.increaseY(controls.yDelta);
    }
});

module.exports = Controls;
