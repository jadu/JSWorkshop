/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function CollisionDetector() {

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
    }
});

module.exports = CollisionDetector;
