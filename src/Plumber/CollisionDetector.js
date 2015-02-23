/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function CollisionDetector(groundY) {
    this.groundY = groundY;
}

_.extend(CollisionDetector.prototype, {
    detect: function (pipes, character) {
        _.each(pipes, function (pipe) {
            if (character.intersectsPipe(pipe)) {
                if (character.getLeft() < pipe.getLeft()) {
                    character.setLeft(pipe.getLeft() - character.getWidth());
                }
            }
        });

        if (character.getTop() > this.groundY - character.getHeight()) {
            character.setTop(this.groundY - character.getHeight());
        }
    }
});

module.exports = CollisionDetector;
