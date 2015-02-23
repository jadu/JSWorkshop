/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var VelocityFactory = require('../../../src/Plumber/VelocityFactory');

describe('VelocityFactory', function () {
    beforeEach(function () {
        this.Velocity = sinon.stub();

        this.factory = new VelocityFactory(this.Velocity);
    });

    describe('create()', function () {
        it('should pass the BoundingBox to the constructor', function () {
            var boundingBox = {};
            this.factory.create(boundingBox);

            expect(this.Velocity).to.have.been.calledWith(boundingBox);
        });

        it('should return the created Velocity', function () {
            var velocity = {};

            this.Velocity.returns(velocity);

            expect(this.factory.create({})).to.equal(velocity);
        });
    });
});
