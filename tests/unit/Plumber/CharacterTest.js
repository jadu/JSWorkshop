/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var BoundingBox = require('../../../src/Plumber/BoundingBox'),
    Character = require('../../../src/Plumber/Character');

describe('Character', function () {
    beforeEach(function () {
        this.boundingBox = sinon.createStubInstance(BoundingBox);

        this.character = new Character(this.boundingBox);
    });

    describe('getHeight()', function () {
        it('should return 5 when bounding box has height of 5', function () {
            this.boundingBox.getHeight.returns(5);

            expect(this.character.getHeight()).to.equal(5);
        });

        it('should return 6 when bounding box has height of 6', function () {
            this.boundingBox.getHeight.returns(6);

            expect(this.character.getHeight()).to.equal(6);
        });
    });

    describe('getWidth()', function () {
        it('should return 3 when bounding box has width of 3', function () {
            this.boundingBox.getWidth.returns(3);

            expect(this.character.getWidth()).to.equal(3);
        });

        it('should return 5 when bounding box has width of 5', function () {
            this.boundingBox.getWidth.returns(5);

            expect(this.character.getWidth()).to.equal(5);
        });
    });

    describe('getLeft()', function () {
        it('should return 5 when bounding box has x of 5', function () {
            this.boundingBox.getLeft.returns(5);

            expect(this.character.getLeft()).to.equal(5);
        });

        it('should return 6 when bounding box has x of 6', function () {
            this.boundingBox.getLeft.returns(6);

            expect(this.character.getLeft()).to.equal(6);
        });
    });

    describe('getTop()', function () {
        it('should return 5 when bounding box has y of 5', function () {
            this.boundingBox.getTop.returns(5);

            expect(this.character.getTop()).to.equal(5);
        });

        it('should return 6 when bounding box has y of 6', function () {
            this.boundingBox.getTop.returns(6);

            expect(this.character.getTop()).to.equal(6);
        });
    });
});
