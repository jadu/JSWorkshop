/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function PipeFactory(boundingBoxFactory, rng, Pipe) {
    this.boundingBoxFactory = boundingBoxFactory;
    this.Pipe = Pipe;
    this.rng = rng;
}

_.extend(PipeFactory.prototype, {
    create: function (left, groundY) {
        var boundingBox,
            factory = this,
            leftOffset = left + factory.rng.generate(),
            height = factory.rng.generate();

        boundingBox = factory.boundingBoxFactory.create(leftOffset, groundY - height, 40, height);

        return new factory.Pipe(boundingBox);
    }
});

module.exports = PipeFactory;
