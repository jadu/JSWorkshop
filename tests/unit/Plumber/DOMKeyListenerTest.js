/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var $ = require('jquery'),
    Controls = require('../../../src/Plumber/Controls'),
    DOMKeyListener = require('../../../src/Plumber/DOMKeyListener');

describe('DOMKeyListener', function () {
    beforeEach(function () {
        this.controls = sinon.createStubInstance(Controls);
        this.$document = $({});
        this.domKeyListener = new DOMKeyListener(this.controls, this.$document);

        this.domKeyListener.listen();
    });

    describe('listen()', function () {
        describe('when the left key is pressed', function () {
            it('should ask the controls to move left once when pressed once', function () {
                this.$document.trigger($.Event('keydown', {keyCode: 37}));

                expect(this.controls.moveLeft).to.have.been.calledOnce;
            });

            it('should ask the controls to move left twice when pressed twice', function () {
                this.$document.trigger($.Event('keydown', {keyCode: 37}));
                this.$document.trigger($.Event('keydown', {keyCode: 37}));

                expect(this.controls.moveLeft).to.have.been.calledTwice;
            });
        });

        describe('when the right key is pressed', function () {
            it('should ask the controls to move right once when pressed once', function () {
                this.$document.trigger($.Event('keydown', {keyCode: 39}));

                expect(this.controls.moveRight).to.have.been.calledOnce;
            });

            it('should ask the controls to move right twice when pressed twice', function () {
                this.$document.trigger($.Event('keydown', {keyCode: 39}));
                this.$document.trigger($.Event('keydown', {keyCode: 39}));

                expect(this.controls.moveRight).to.have.been.calledTwice;
            });
        });

        describe('when the up key is pressed', function () {
            it('should ask the controls to move up once when pressed once', function () {
                this.$document.trigger($.Event('keydown', {keyCode: 38}));

                expect(this.controls.moveUp).to.have.been.calledOnce;
            });

            it('should ask the controls to move up twice when pressed twice', function () {
                this.$document.trigger($.Event('keydown', {keyCode: 38}));
                this.$document.trigger($.Event('keydown', {keyCode: 38}));

                expect(this.controls.moveUp).to.have.been.calledTwice;
            });
        });
    });
});
