/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var BoundingBoxFactory = require('../../../src/Plumber/BoundingBoxFactory'),
    PipeFactory = require('../../../src/Plumber/PipeFactory'),
    RNG = require('../../../src/Plumber/RNG');

describe('PipeFactory', function () {
    beforeEach(function () {
        this.boundingBoxFactory = sinon.createStubInstance(BoundingBoxFactory);
        this.Pipe = sinon.stub();
        this.rng = sinon.createStubInstance(RNG);

        this.factory = new PipeFactory(this.boundingBoxFactory, this.rng, this.Pipe);
    });

    describe('create()', function () {
        describe('when RNG returns 4 and then 10 with current left of 200 and ground of 1000', function () {
            beforeEach(function () {
                this.rng.generate.onFirstCall().returns(4);
                this.rng.generate.onSecondCall().returns(10);
            });

            it('should pass the BoundingBox created through to the Pipe constructor', function () {
                var boundingBox = {};
                this.boundingBoxFactory.create.returns(boundingBox);

                this.factory.create(200, 1000);

                expect(this.Pipe).to.have.been.calledWith(boundingBox);
            });

            it('should return the Pipe created', function () {
                var pipe = {};
                this.Pipe.returns(pipe);

                expect(this.factory.create(200, 1000)).to.equal(pipe);
            });

            describe('the Pipe\'s BoundingBox', function () {
                it('should have an X of 204', function () {
                    this.factory.create(200, 1000);

                    expect(this.boundingBoxFactory.create).to.have.been.calledWith(204);
                });

                it('should have a Y of 990', function () {
                    this.factory.create(200, 1000);

                    expect(this.boundingBoxFactory.create).to.have.been.calledWith(sinon.match.any, 990);
                });

                it('should have a width of 40', function () {
                    this.factory.create(200, 1000);

                    expect(this.boundingBoxFactory.create).to.have.been.calledWith(sinon.match.any, sinon.match.any, 40);
                });

                it('should have a height of 10', function () {
                    this.factory.create(200, 1000);

                    expect(this.boundingBoxFactory.create).to.have.been.calledWith(sinon.match.any, sinon.match.any, sinon.match.any, 10);
                });
            });
        });
    });
});
