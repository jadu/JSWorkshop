/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var BoundingBoxFactory = require('../../../src/Plumber/BoundingBoxFactory'),
    CharacterFactory = require('../../../src/Plumber/CharacterFactory'),
    Controls = require('../../../src/Plumber/Controls'),
    Momentum = require('../../../src/Plumber/Momentum'),
    VelocityFactory = require('../../../src/Plumber/VelocityFactory');

describe('CharacterFactory', function () {
    beforeEach(function () {
        this.boundingBoxFactory = sinon.createStubInstance(BoundingBoxFactory);
        this.Character = sinon.stub();
        this.controls = sinon.createStubInstance(Controls);
        this.momentum = sinon.createStubInstance(Momentum);
        this.velocityFactory = sinon.createStubInstance(VelocityFactory);

        this.factory = new CharacterFactory(
            this.boundingBoxFactory,
            this.velocityFactory,
            this.momentum,
            this.controls,
            this.Character
        );
    });

    describe('create()', function () {
        it('should pass the BoundingBox created through to the Character constructor', function () {
            var boundingBox = {};
            this.boundingBoxFactory.create.returns(boundingBox);

            this.factory.create(0, 0);

            expect(this.Character).to.have.been.calledWith(boundingBox);
        });

        it('should return the Character created', function () {
            var character = {};
            this.Character.returns(character);

            expect(this.factory.create(0, 0)).to.equal(character);
        });

        describe('the Character\'s BoundingBox', function () {
            it('should have an X of 200', function () {
                this.factory.create(200, 1000);

                expect(this.boundingBoxFactory.create).to.have.been.calledWith(200);
            });

            it('should have a Y of 1000', function () {
                this.factory.create(200, 1000);

                expect(this.boundingBoxFactory.create).to.have.been.calledWith(sinon.match.any, 1000);
            });

            it('should have a width of 40', function () {
                this.factory.create(200, 1000);

                expect(this.boundingBoxFactory.create).to.have.been.calledWith(sinon.match.any, sinon.match.any, 40);
            });

            it('should have a height of 40', function () {
                this.factory.create(200, 1000);

                expect(this.boundingBoxFactory.create).to.have.been.calledWith(sinon.match.any, sinon.match.any, sinon.match.any, 40);
            });
        });
    });
});
