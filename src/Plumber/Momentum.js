/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function Momentum(decayCoefficient) {
    this.decayCoefficient = decayCoefficient;
    this.velocity = null;
}

_.extend(Momentum.prototype, {
    act: function () {
        var momentum = this;

        momentum.velocity.decay(momentum.decayCoefficient);
        momentum.velocity.act();
    },

    actOn: function (velocity) {
        this.velocity = velocity;
    }
});

module.exports = Momentum;
