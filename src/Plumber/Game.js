/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash'),
    BoundingBox = require('./BoundingBox'),
    BoundingBoxFactory = require('./BoundingBoxFactory'),
    Pipe = require('./Pipe'),
    PipeFactory = require('./PipeFactory'),
    Renderer = require('./Renderer'),
    RNG = require('./RNG'),
    World = require('./World');

function Game($surface) {
    this.$surface = $surface;
}

_.extend(Game.prototype, {
    start: function () {
        var boundingBoxFactory = new BoundingBoxFactory(BoundingBox),
            rng = new RNG(Math),
            pipeFactory = new PipeFactory(boundingBoxFactory, rng, Pipe),
            world = new World(pipeFactory, 550),
            renderer = new Renderer(world, this.$surface);

        world.generate();

        renderer.render();
    }
});

module.exports = Game;
