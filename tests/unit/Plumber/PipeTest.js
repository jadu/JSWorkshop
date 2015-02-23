/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var BoundingBox = require('../../../src/Plumber/BoundingBox'),
    Pipe = require('../../../src/Plumber/Pipe');

describe('Pipe', function () {
    beforeEach(function () {
        this.boundingBox = sinon.createStubInstance(BoundingBox);

        this.pipe = new Pipe(this.boundingBox);
    });

    describe('getHeight()', function () {
        it('should return 5 when bounding box has height of 5', function () {
            this.boundingBox.getHeight.returns(5);

            expect(this.pipe.getHeight()).to.equal(5);
        });

        it('should return 6 when bounding box has height of 6', function () {
            this.boundingBox.getHeight.returns(6);

            expect(this.pipe.getHeight()).to.equal(6);
        });
    });

    describe('getRight()', function () {
        it('should return 3 when bounding box has right of 3', function () {
            this.boundingBox.getRight.returns(3);

            expect(this.pipe.getRight()).to.equal(3);
        });

        it('should return 6 when bounding box has right of 6', function () {
            this.boundingBox.getRight.returns(6);

            expect(this.pipe.getRight()).to.equal(6);
        });
    });

    describe('getWidth()', function () {
        it('should return 3 when bounding box has width of 3');

        it('should return 5 when bounding box has width of 5');
    });

    describe('getLeft()', function () {
        it('should return 5 when bounding box has x of 5', function () {
            this.boundingBox.getLeft.returns(5);

            expect(this.pipe.getLeft()).to.equal(5);
        });

        it('should return 6 when bounding box has x of 6', function () {
            this.boundingBox.getLeft.returns(6);

            expect(this.pipe.getLeft()).to.equal(6);
        });
    });

    describe('getTop()', function () {
        it('should return 5 when bounding box has y of 5', function () {
            this.boundingBox.getTop.returns(5);

            expect(this.pipe.getTop()).to.equal(5);
        });

        it('should return 6 when bounding box has y of 6', function () {
            this.boundingBox.getTop.returns(6);

            expect(this.pipe.getTop()).to.equal(6);
        });
    });
});
