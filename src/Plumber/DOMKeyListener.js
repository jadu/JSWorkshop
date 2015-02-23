/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var LEFT_KEY = 37,
    RIGHT_KEY = 39,
    _ = require('lodash');

function DOMKeyListener(controls, $document) {
    this.controls = controls;
    this.$document = $document;
}

_.extend(DOMKeyListener.prototype, {
    listen: function () {
        var listener = this;

        listener.$document.on('keydown', function (event) {
            event.preventDefault();

            if (event.keyCode === LEFT_KEY) {
                listener.controls.moveLeft();
            } else if (event.keyCode === RIGHT_KEY) {
                listener.controls.moveRight();
            }
        });
    }
});

module.exports = DOMKeyListener;
