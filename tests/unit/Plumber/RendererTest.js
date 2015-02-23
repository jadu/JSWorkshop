/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var $ = require('jquery'),
    Renderer = require('../../../src/Plumber/Renderer'),
    Pipe = require('../../../src/Plumber/Pipe'),
    World = require('../../../src/Plumber/World');

describe('Renderer', function () {
    beforeEach(function () {
        this.$surface = $('<div></div>');
        this.world = sinon.createStubInstance(World);

        this.renderer = new Renderer(this.world, this.$surface);
    });

    describe('render()', function () {
        describe('when there are 3 Pipes in the world', function () {
            beforeEach(function () {
                this.pipe1 = sinon.createStubInstance(Pipe);
                this.pipe2 = sinon.createStubInstance(Pipe);
                this.pipe3 = sinon.createStubInstance(Pipe);
                this.world.getPipes.returns([this.pipe1, this.pipe2, this.pipe3]);
            });

            it('should add 3 <div>s with class "pipe" to the surface', function () {
                this.renderer.render();

                expect(this.$surface.find('.pipe')).to.have.length(3);
            });

            it('should give the first pipe a height of 10 when expected', function () {
                this.pipe1.getHeight.returns(10);

                this.renderer.render();

                expect(this.$surface.find('.pipe:eq(0)').height()).to.equal(10);
            });

            it('should give the first pipe a width of 20 when expected', function () {
                this.pipe1.getWidth.returns(20);

                this.renderer.render();

                expect(this.$surface.find('.pipe:eq(0)').width()).to.equal(20);
            });

            it('should give the first pipe a left of 500 when expected', function () {
                this.pipe1.getLeft.returns(500);

                this.renderer.render();

                expect(parseFloat(this.$surface.find('.pipe:eq(0)').css('left'))).to.equal(500);
            });

            it('should give the first pipe a top of 40 when expected', function () {
                this.pipe1.getTop.returns(40);

                this.renderer.render();

                expect(parseFloat(this.$surface.find('.pipe:eq(0)').css('top'))).to.equal(40);
            });

            it('should give the second pipe a height of 20 when expected', function () {
                this.pipe2.getHeight.returns(20);

                this.renderer.render();

                expect(this.$surface.find('.pipe:eq(1)').height()).to.equal(20);
            });
        });

        it('should remove any existing pipes from the surface', function () {
            this.$surface.append('<div class="pipe"></div>');

            this.renderer.render();

            expect(this.$surface.find('.pipe')).to.have.length(0);
        });
    });
});
