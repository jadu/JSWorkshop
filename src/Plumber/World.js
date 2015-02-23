/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function World(pipeFactory, characterFactory, collisionDetector, groundY) {
    this.characterFactory = characterFactory;
    this.characters = [];
    this.collisionDetector = collisionDetector;
    this.groundY = groundY;
    this.pipeFactory = pipeFactory;
    this.pipes = [];
}

_.extend(World.prototype, {
    checkCollisions: function () {
        this.collisionDetector.detect(this.pipes, this.characters[0]);
    },

    generate: function () {
        var i,
            left = 0,
            pipe,
            plumber,
            world = this,
            groundY = world.groundY;

        for (i = 0; i < 20; i++) {
            pipe = world.pipeFactory.create(left, groundY);
            world.pipes.push(pipe);

            left = pipe.getRight();
        }

        plumber = world.characterFactory.create(0, groundY - 40);
        this.characters.push(plumber);
    },

    getCharacters: function () {
        return this.characters;
    },

    getPipes: function () {
        return this.pipes;
    }
});

module.exports = World;
