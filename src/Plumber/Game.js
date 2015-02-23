/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash'),
    BoundingBox = require('./BoundingBox'),
    BoundingBoxFactory = require('./BoundingBoxFactory'),
    Character = require('./Character'),
    CharacterFactory = require('./CharacterFactory'),
    Controls = require('./Controls'),
    DOMKeyListener = require('./DOMKeyListener'),
    Momentum = require('./Momentum'),
    Pipe = require('./Pipe'),
    PipeFactory = require('./PipeFactory'),
    Renderer = require('./Renderer'),
    RNG = require('./RNG'),
    Velocity = require('./Velocity'),
    VelocityFactory = require('./VelocityFactory'),
    World = require('./World');

function Game($document, $surface) {
    this.$document = $document;
    this.$surface = $surface;
}

_.extend(Game.prototype, {
    start: function () {
        var game = this,
            boundingBoxFactory = new BoundingBoxFactory(BoundingBox),
            velocityFactory = new VelocityFactory(Velocity),
            controls = new Controls(4),
            domKeyListener = new DOMKeyListener(controls, game.$document),
            momentum = new Momentum(0.8),
            characterFactory = new CharacterFactory(boundingBoxFactory, velocityFactory, momentum, controls, Character),
            rng = new RNG(Math),
            pipeFactory = new PipeFactory(boundingBoxFactory, rng, Pipe),
            world = new World(pipeFactory, characterFactory, 550),
            renderer = new Renderer(world, game.$surface);

        world.generate();

        renderer.render();

        domKeyListener.listen();

        setInterval(function () {
            momentum.act();
            renderer.render();
        }, 100);
    }
});

module.exports = Game;
