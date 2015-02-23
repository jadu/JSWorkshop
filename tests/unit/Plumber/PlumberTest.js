/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var BoundingBox = require('../../../src/Plumber/BoundingBox'),
    Plumber = require('../../../src/Plumber/Plumber');

describe('Plumber', function () {
    beforeEach(function () {
        this.boundingBox = sinon.createStubInstance(BoundingBox);

        this.plumber = new Plumber(this.boundingBox);
    });

    describe('intersectsBoundingBox()', function () {

    });
});
