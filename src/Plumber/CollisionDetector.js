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
                if (
                    character.getTop() < pipe.getTop() &&
                    character.getTop() + character.getHeight() > pipe.getTop()
                ) {
                    character.setTop(pipe.getTop() - character.getHeight());
                } else if (
                    character.getLeft() < pipe.getLeft() &&
                    character.getLeft() + character.getWidth() > pipe.getLeft()
                ) {
                    character.setLeft(pipe.getLeft() - character.getWidth());
                } else if (
                    character.getLeft() < pipe.getRight() &&
                    character.getRight() > pipe.getRight()
                ) {
                    character.setLeft(pipe.getRight());
                }
            }
        });

        if (character.getTop() > this.groundY - character.getHeight()) {
            character.setTop(this.groundY - character.getHeight());
        }
    }
});

module.exports = CollisionDetector;
