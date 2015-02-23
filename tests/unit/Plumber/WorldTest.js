/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var Pipe = require('../../../src/Plumber/Pipe'),
    PipeFactory = require('../../../src/Plumber/PipeFactory'),
    World = require('../../../src/Plumber/World');

describe('World', function () {
    beforeEach(function () {
        this.pipeFactory = sinon.createStubInstance(PipeFactory);

        this.world = new World(this.pipeFactory, 2000);
    });

    describe('generate()', function () {
        it('should add 20 Pipes to the World', function () {
            this.pipeFactory.create.returns(sinon.createStubInstance(Pipe));

            this.world.generate();

            expect(this.world.getPipes().length).to.equal(20);
        });

        it('should pass 0 as the left for the first Pipe created', function () {
            this.pipeFactory.create.returns(sinon.createStubInstance(Pipe));

            this.world.generate();

            expect(this.pipeFactory.create.args[0][0]).to.equal(0);
        });

        it('should pass 200 as the left for the second Pipe created when right is 200', function () {
            var pipe = sinon.createStubInstance(Pipe);
            this.pipeFactory.create.returns(sinon.createStubInstance(Pipe));
            this.pipeFactory.create.onFirstCall().returns(pipe);
            pipe.getRight.returns(200);

            this.world.generate();

            expect(this.pipeFactory.create.args[1][0]).to.equal(200);
        });

        it('should pass 2000 as the ground Y for the first Pipe created', function () {
            this.pipeFactory.create.returns(sinon.createStubInstance(Pipe));

            this.world.generate();

            expect(this.pipeFactory.create.args[0][1]).to.equal(2000);
        });

        it('should pass 2000 as the ground Y for the second Pipe created', function () {
            this.pipeFactory.create.returns(sinon.createStubInstance(Pipe));

            this.world.generate();

            expect(this.pipeFactory.create.args[1][1]).to.equal(2000);
        });
    });
});
