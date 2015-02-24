/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var Gravity = require('../../../src/Plumber/Gravity'),
    Velocity = require('../../../src/Plumber/Velocity');

describe('Gravity', function () {
    beforeEach(function () {
        this.velocity = sinon.createStubInstance(Velocity);

        this.gravity = new Gravity(20);
    });

    describe('act()', function () {
        it('should increase the Y-velocity by the inverse of Y-delta', function () {
            this.gravity.actOn(this.velocity);

            this.gravity.act();

            expect(this.velocity.increaseY).to.have.been.calledWith(-20);
        });
    });
});
