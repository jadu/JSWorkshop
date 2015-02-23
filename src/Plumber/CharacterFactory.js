/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function CharacterFactory(boundingBoxFactory, velocityFactory, momentum, controls, Character) {
    this.boundingBoxFactory = boundingBoxFactory;
    this.Character = Character;
    this.controls = controls;
    this.momentum = momentum;
    this.velocityFactory = velocityFactory;
}

_.extend(CharacterFactory.prototype, {
    create: function (left, top) {
        var factory = this,
            boundingBox = factory.boundingBoxFactory.create(left, top, 40, 40),
            character = new factory.Character(boundingBox),
            velocity = factory.velocityFactory.create(boundingBox);

        factory.momentum.actOn(velocity);
        factory.controls.control(velocity);

        return character;
    }
});

module.exports = CharacterFactory;
