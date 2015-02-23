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

        _.each(renderer.world.getPipes(), function (pipe) {
            var $pipe = $('<div></div>').addClass('pipe');

            $pipe.height(pipe.getHeight());
            $pipe.width(pipe.getWidth());
            $pipe.offset({left: pipe.getLeft(), top: pipe.getTop()});

            $surface.append($pipe);
        });
    }
});

module.exports = Renderer;
