/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function CharacterFactory(boundingBoxFactory, Character) {
    this.boundingBoxFactory = boundingBoxFactory;
    this.Character = Character;
}

_.extend(CharacterFactory.prototype, {
    create: function (left, top) {
        var factory = this,
            boundingBox = factory.boundingBoxFactory.create(left, top, 40, 40),
            character = new factory.Character(boundingBox);

        return character;
    }
});

module.exports = CharacterFactory;
