/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash'),
    $ = require('jquery');

function Renderer(world, $surface) {
    this.$surface = $surface;
    this.world = world;
}

_.extend(Renderer.prototype, {
    render: function () {
        var renderer = this,
            $surface = renderer.$surface;

        $surface.find(':not(.ground)').remove();

        _.each(renderer.world.getPipes(), function (pipe) {
            var $pipe = $('<div></div>').addClass('pipe');

            $pipe.height(pipe.getHeight());
            $pipe.width(pipe.getWidth());
            $pipe.offset({left: pipe.getLeft(), top: pipe.getTop()});

            $surface.append($pipe);
        });

        _.each(renderer.world.getCharacters(), function (character) {
            var $character = $('<div></div>').addClass('character');

            $character.height(character.getHeight());
            $character.width(character.getWidth());
            $character.offset({left: character.getLeft(), top: character.getTop()});

            $surface.append($character);
        });
    }
});

module.exports = Renderer;
