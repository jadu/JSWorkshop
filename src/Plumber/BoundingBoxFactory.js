/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash');

function BoundingBoxFactory(BoundingBox) {
    this.BoundingBox = BoundingBox;
}

_.extend(BoundingBoxFactory.prototype, {
    create: function (left, top, width, height) {
        return new this.BoundingBox(left, top, width, height);
    }
});

module.exports = BoundingBoxFactory;
