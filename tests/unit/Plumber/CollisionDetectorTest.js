/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var Character = require('../../../src/Plumber/Character'),
    CollisionDetector = require('../../../src/Plumber/CollisionDetector'),
    Pipe = require('../../../src/Plumber/Pipe');

describe('CollisionDetector', function () {
    beforeEach(function () {
        this.character = sinon.createStubInstance(Character);
        this.pipe = sinon.createStubInstance(Pipe);

        this.detector = new CollisionDetector();
    });

    describe('detect()', function () {
        it('should move the character back left moving right when its right edge overlaps pipe', function () {
            this.character.getLeft.returns(120);
            this.character.getWidth.returns(40);
            this.pipe.getLeft.returns(140);
            this.character.intersectsPipe.returns(true);

            this.detector.detect([this.pipe], this.character);

            expect(this.character.setLeft).to.have.been.calledWith(100);
        });

        it('should not move the character back left moving right when its right edge does not overlap pipe', function () {
            this.character.getLeft.returns(10);
            this.character.getWidth.returns(40);
            this.pipe.getLeft.returns(140);
            this.character.intersectsPipe.returns(false);

            this.detector.detect([this.pipe], this.character);

            expect(this.character.setLeft).not.to.have.been.called;
        });
    });
});
