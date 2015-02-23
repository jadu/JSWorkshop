/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var CharacterFactory = require('../../../src/Plumber/CharacterFactory'),
    CollisionDetector = require('../../../src/Plumber/CollisionDetector'),
    Pipe = require('../../../src/Plumber/Pipe'),
    PipeFactory = require('../../../src/Plumber/PipeFactory'),
    World = require('../../../src/Plumber/World');

describe('World', function () {
    beforeEach(function () {
        this.characterFactory = sinon.createStubInstance(CharacterFactory);
        this.collisionDetector = sinon.createStubInstance(CollisionDetector);
        this.pipeFactory = sinon.createStubInstance(PipeFactory);
        this.pipeFactory.create.returns(sinon.createStubInstance(Pipe));

        this.world = new World(this.pipeFactory, this.characterFactory, this.collisionDetector, 2000);
    });

    describe('checkCollisions()', function () {
        it('should ask the detector to check for collisions once', function () {
            this.world.checkCollisions();

            expect(this.collisionDetector.detect).to.have.been.calledOnce;
        });

        it('should pass an array to the detector', function () {
            this.world.checkCollisions();

            expect(this.collisionDetector.detect).to.have.been.calledWith(sinon.match.array);
        });

        it('should pass the character to the detector', function () {
            var character = {};
            this.characterFactory.create.returns(character);
            this.world.generate();

            this.world.checkCollisions();

            expect(this.collisionDetector.detect).to.have.been.calledWith(sinon.match.any, character);
        });
    });

    describe('generate()', function () {
        it('should add 20 Pipes to the World', function () {
            this.world.generate();

            expect(this.world.getPipes().length).to.equal(20);
        });

        it('should pass 0 as the left for the first Pipe created', function () {
            this.world.generate();

            expect(this.pipeFactory.create.args[0][0]).to.equal(0);
        });

        it('should pass 200 as the left for the second Pipe created when right is 200', function () {
            var pipe = sinon.createStubInstance(Pipe);
            this.pipeFactory.create.onFirstCall().returns(pipe);
            pipe.getRight.returns(200);

            this.world.generate();

            expect(this.pipeFactory.create.args[1][0]).to.equal(200);
        });

        it('should pass 2000 as the ground Y for the first Pipe created', function () {
            this.world.generate();

            expect(this.pipeFactory.create.args[0][1]).to.equal(2000);
        });

        it('should pass 2000 as the ground Y for the second Pipe created', function () {
            this.world.generate();

            expect(this.pipeFactory.create.args[1][1]).to.equal(2000);
        });

        it('should add one Character to the World', function () {
            this.world.generate();

            expect(this.world.getCharacters()).to.have.length(1);
        });

        it('should pass 0 as the Character\'s left', function () {
            this.world.generate();

            expect(this.characterFactory.create).to.have.been.calledWith(0);
        });

        it('should pass 1960 as the Character\'s top', function () {
            this.world.generate();

            expect(this.characterFactory.create).to.have.been.calledWith(sinon.match.any, 1960);
        });
    });
});
