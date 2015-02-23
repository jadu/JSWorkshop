/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function World(pipeFactory, groundY) {
    this.groundY = groundY;
    this.pipeFactory = pipeFactory;
    this.pipes = [];
}

_.extend(World.prototype, {
    generate: function () {
        var i,
            left = 0,
            pipe,
            world = this,
            groundY = world.groundY;

        for (i = 0; i < 20; i++) {
            pipe = world.pipeFactory.create(left, groundY);
            world.pipes.push(pipe);

            left = pipe.getRight();
        }
    },

    getPipes: function () {
        return this.pipes;
    }
});

module.exports = World;
