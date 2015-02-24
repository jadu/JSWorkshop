/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function Gravity(yDelta) {
    this.yDelta = yDelta;
}

_.extend(Gravity.prototype, {
    act: function () {
        var momentum = this;

        momentum.velocity.increaseY(-momentum.yDelta);
        momentum.velocity.act();
    },

    actOn: function (velocity) {
        this.velocity = velocity;
    }
});

module.exports = Gravity;
