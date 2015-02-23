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

        this.velocity = new Velocity(this.boundingBox);
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
});
