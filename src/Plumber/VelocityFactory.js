/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function VelocityFactory(Velocity) {
    this.Velocity = Velocity;
}

_.extend(VelocityFactory.prototype, {
    create: function (boundingBox) {
        return new this.Velocity(boundingBox);
    }
});

module.exports = VelocityFactory;
