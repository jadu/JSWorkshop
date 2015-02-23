/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function Controls(xDelta) {
    this.velocity = null;
    this.xDelta = xDelta;
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
    }
});

module.exports = Controls;
