/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var BoundingBox = require('../../../src/Plumber/BoundingBox'),
    Velocity = require('../../../src/Plumber/Velocity');

describe('Velocity', function () {
    beforeEach(function () {
        this.boundingBox = sinon.createStubInstance(BoundingBox);

        this.maximumXVelocity = 20;
        this.maximumYVelocity = 20;

        this.velocity = new Velocity(this.boundingBox, this.maximumXVelocity, this.maximumYVelocity);
    });

    describe('constructor', function () {
        it('should construct with a X-velocity of 0', function () {
            expect(this.velocity.xVelocity).to.equal(0);
        });

        it('should construct with a Y-velocity of 0', function () {
            expect(this.velocity.yVelocity).to.equal(0);
        });
    });

    describe('act()', function () {
        it('should set the BoundingBox\'s left to 4 when X-velocity is 0', function () {
            this.boundingBox.getLeft.returns(4);

            this.velocity.act();

            expect(this.boundingBox.setLeft).to.have.been.calledWith(4);
        });

        it('should set the BoundingBox\'s left to 18 when current left is 8 and X-velocity is 10', function () {
            this.boundingBox.getLeft.returns(8);
            this.velocity.increaseX(10);

            this.velocity.act();

            expect(this.boundingBox.setLeft).to.have.been.calledWith(18);
        });

        it('should set the BoundingBox\'s top to 18 when current top is 20 and Y-velocity is 4', function () {
            this.boundingBox.getTop.returns(20);
            this.velocity.increaseY(4);

            this.velocity.act();

            expect(this.boundingBox.setTop).to.have.been.calledWith(16);
        });
    });

    describe('decay()', function () {
        it('should apply the coefficient to the X-velocity', function () {
            this.boundingBox.getLeft.returns(100);
            this.velocity.increaseX(20);

            this.velocity.decay(0.5);
            this.velocity.act();

            expect(this.boundingBox.setLeft).to.have.been.calledWith(110);
        });

        it('should apply the coefficient to the Y-velocity', function () {
            this.boundingBox.getTop.returns(100);
            this.velocity.increaseY(20);

            this.velocity.decay(0.5);
            this.velocity.act();

            expect(this.boundingBox.setTop).to.have.been.calledWith(90);
        });
    });

    describe('increaseX()', function () {
        it('should increase X velocity by the delta amount', function () {
            this.velocity.increaseX(5);

            expect(this.velocity.xVelocity).to.equal(5);
        });

        it('should not affect Y velocity', function () {
            this.velocity.increaseX(5);
            expect(this.velocity.yVelocity).to.equal(0);
        });

        it('should not increase any further than maximumX', function () {
            this.velocity.increaseX(this.maximumXVelocity + 1);

            expect(this.velocity.xVelocity).to.equal(this.maximumXVelocity);
        });
    })

    describe('increaseY', function () {
        it('should increase Y velocity by the delta amount', function () {
            this.velocity.increaseY(5);

            expect(this.velocity.yVelocity).to.equal(5);
        });

        it('should not affect X velocity', function () {
            this.velocity.increaseY(5);

            expect(this.velocity.xVelocity).to.equal(0);
        });

        it('should not increase any further than maximumY', function () {
            this.velocity.increaseY(this.maximumYVelocity + 1);

            expect(this.velocity.yVelocity).to.equal(this.maximumYVelocity);
        });
    });
});

