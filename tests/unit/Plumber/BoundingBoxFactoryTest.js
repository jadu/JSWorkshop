/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var BoundingBoxFactory = require('../../../src/Plumber/BoundingBoxFactory');

describe('BoundingBoxFactory', function () {
    beforeEach(function () {
        this.BoundingBox = sinon.stub();

        this.factory = new BoundingBoxFactory(this.BoundingBox);
    });

    describe('create()', function () {
        it('should pass 4 as left when expected', function () {
            this.factory.create(4, 1, 1, 1);

            expect(this.BoundingBox).to.have.been.calledWith(4);
        });

        it('should pass 5 as left when expected', function () {
            this.factory.create(5, 1, 1, 1);

            expect(this.BoundingBox).to.have.been.calledWith(5);
        });

        it('should pass 4 as top when expected', function () {
            this.factory.create(1, 4, 1, 1);

            expect(this.BoundingBox).to.have.been.calledWith(sinon.match.any, 4);
        });

        it('should pass 5 as top when expected', function () {
            this.factory.create(1, 5, 1, 1);

            expect(this.BoundingBox).to.have.been.calledWith(sinon.match.any, 5);
        });

        it('should pass 4 as width when expected', function () {
            this.factory.create(1, 1, 4, 1);

            expect(this.BoundingBox).to.have.been.calledWith(sinon.match.any, sinon.match.any, 4);
        });

        it('should pass 5 as width when expected', function () {
            this.factory.create(1, 1, 5, 1);

            expect(this.BoundingBox).to.have.been.calledWith(sinon.match.any, sinon.match.any, 5);
        });

        it('should pass 4 as height when expected', function () {
            this.factory.create(1, 1, 1, 4);

            expect(this.BoundingBox).to.have.been.calledWith(sinon.match.any, sinon.match.any, sinon.match.any, 4);
        });

        it('should pass 5 as height when expected', function () {
            this.factory.create(1, 1, 1, 5);

            expect(this.BoundingBox).to.have.been.calledWith(sinon.match.any, sinon.match.any, sinon.match.any, 5);
        });

        it('should return the created BoundingBox', function () {
            var box = {};

            this.BoundingBox.returns(box);

            expect(this.factory.create(1, 1, 1, 5)).to.equal(box);
        });
    });
});
