/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function RNG(Math) {
    this.Math = Math;
}

_.extend(RNG.prototype, {
    generate: function () {
        return this.Math.random() * 200;
    }
});

module.exports = RNG;
