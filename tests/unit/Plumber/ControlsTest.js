/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var Controls = require('../../../src/Plumber/Controls'),
    Velocity = require('../../../src/Plumber/Velocity');

describe('Controls', function () {
    beforeEach(function () {
        this.velocity = sinon.createStubInstance(Velocity);
        this.controls = new Controls(2, 4);

        this.controls.control(this.velocity);
    });

    describe('moveLeft()', function () {
        describe('when called once', function () {
            it('should increase the X-velocity once', function () {
                this.controls.moveLeft();

                expect(this.velocity.increaseX).to.have.been.calledOnce;
            });

            it('should increase the X-velocity by -2', function () {
                this.controls.moveLeft();

                expect(this.velocity.increaseX).to.have.been.calledWith(-2);
            });
        });

        describe('when called twice', function () {
            it('should increase the X-velocity twice', function () {
                this.controls.moveLeft();
                this.controls.moveLeft();

                expect(this.velocity.increaseX).to.have.been.calledTwice;
            });

            it('should have increased the X-velocity by -2 twice', function () {
                this.controls.moveLeft();
                this.controls.moveLeft();

                expect(this.velocity.increaseX).to.always.have.been.calledWith(-2);
            });
        });
    });

    describe('moveRight()', function () {
        describe('when called once', function () {
            it('should increase the X-velocity once', function () {
                this.controls.moveRight();

                expect(this.velocity.increaseX).to.have.been.calledOnce;
            });

            it('should increase the X-velocity by 2', function () {
                this.controls.moveRight();

                expect(this.velocity.increaseX).to.have.been.calledWith(2);
            });
        });

        describe('when called twice', function () {
            it('should increase the X-velocity twice', function () {
                this.controls.moveRight();
                this.controls.moveRight();

                expect(this.velocity.increaseX).to.have.been.calledTwice;
            });

            it('should have increased the X-velocity by 2 twice', function () {
                this.controls.moveRight();
                this.controls.moveRight();

                expect(this.velocity.increaseX).to.always.have.been.calledWith(2);
            });
        });
    });

    describe('moveUp()', function () {
        describe('when called once', function () {
            it('should increase the Y-velocity once', function () {
                this.controls.moveUp();

                expect(this.velocity.increaseY).to.have.been.calledOnce;
            });

            it('should increase the Y-velocity by 4', function () {
                this.controls.moveUp();

                expect(this.velocity.increaseY).to.have.been.calledWith(4);
            });
        });

        describe('when called twice', function () {
            it('should increase the Y-velocity twice', function () {
                this.controls.moveUp();
                this.controls.moveUp();

                expect(this.velocity.increaseY).to.have.been.calledTwice;
            });

            it('should have increased the Y-velocity by 4 twice', function () {
                this.controls.moveUp();
                this.controls.moveUp();

                expect(this.velocity.increaseY).to.always.have.been.calledWith(4);
            });
        });
    });
});
