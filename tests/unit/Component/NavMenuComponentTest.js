/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var $ = require('jquery'),
    NavMenuComponent = require('../../../src/Component/NavMenuComponent');

describe('NavMenuComponent', function () {
    beforeEach(function () {
        this.$body = $('<body></body');
        this.$aParagraph = $('<p></p>').appendTo(this.$body);
        this.$menu = $('<ol></ol>').appendTo(this.$body);

        this.$menuItem1 = $('<li data-submenu="#submenu1"><a>Menu 1</a></li>').appendTo(this.$menu);
        this.$submenu1 = $('<ol id="submenu1"></ol>').addClass('submenu').appendTo(this.$menuItem1);

        this.$menuItem1_1 = $('<li data-submenu="#submenu1_1"><a>Menu 1 sub 1</a></li>').appendTo(this.$submenu1);
        this.$submenu1_1 = $('<ol id="submenu1_1"></ol>').addClass('submenu').appendTo(this.$menuItem1_1);

        this.$menuItem2 = $('<li data-submenu="#submenu2"><a>Menu 2</a></li>').appendTo(this.$menu);
        this.$submenu2 = $('<ol id="submenu2"></ol>').addClass('submenu').appendTo(this.$menuItem2);

        this.navMenu = new NavMenuComponent(this.$body, this.$menu);
    });

    describe('initialize()', function () {
        beforeEach(function () {
            this.navMenu.initialize();
        });

        describe('before any menu items are clicked', function () {
            it('should have no visible submenus', function () {
                expect(this.$menu.find('.submenu.submenu--visible')).to.have.length(0);
            });
        });

        describe('after clicking the first menu item', function () {
            it('should show the first menu item\'s submenu', function () {
                this.$menuItem1.click();

                expect(this.$submenu1.hasClass('submenu--visible')).to.be.true;
            });

            it('should not show the second menu item\'s submenu', function () {
                this.$menuItem1.click();

                expect(this.$submenu2.hasClass('submenu--visible')).to.be.false;
            });

            it('should stop propagation of the click event', function () {
                var event = $.Event('click');

                this.$menuItem1.trigger(event);

                expect(event.isPropagationStopped()).to.be.true;
            });

            it('should prevent the default behaviour of the click event', function () {
                var event = $.Event('click');

                this.$menuItem1.trigger(event);

                expect(event.isDefaultPrevented()).to.be.true;
            });
        });

        describe('after clicking the first and then second menu item', function () {
            it('should hide the first menu item\'s submenu', function () {
                this.$menuItem1.click();
                this.$menuItem2.click();

                expect(this.$submenu1.hasClass('submenu--visible')).to.be.false;
            });

            it('should show the second menu item\'s submenu', function () {
                this.$menuItem1.click();
                this.$menuItem2.click();

                expect(this.$submenu2.hasClass('submenu--visible')).to.be.true;
            });
        });

        describe('after clicking the first menu item then opening a sub-submenu', function () {
            it('should show the sub submenu', function () {
                this.$menuItem1.click();
                this.$menuItem1_1.click();

                expect(this.$submenu1_1.hasClass('submenu--visible')).to.be.true;
            });

            it('should not hide the sub submenu\'s parent menu', function () {
                this.$menuItem1.click();
                this.$menuItem1_1.click();

                expect(this.$submenu1.hasClass('submenu--visible')).to.be.true;
            });
        });

        describe('after clicking the first menu item then opening a sub-submenu then clicking outside the menu', function () {
            it('should hide the sub submenu', function () {
                this.$menuItem1.click();
                this.$menuItem1_1.click();
                this.$aParagraph.click();

                expect(this.$submenu1_1.hasClass('submenu--visible')).to.be.false;
            });

            it('should hide the sub submenu\'s parent menu', function () {
                this.$menuItem1.click();
                this.$menuItem1_1.click();
                this.$aParagraph.click();

                expect(this.$submenu1.hasClass('submenu--visible')).to.be.false;
            });
        });

        describe('after clicking the first menu item then clicking outside the menu', function () {
            it('should hide the first menu item\'s submenu', function () {
                this.$menuItem1.click();
                this.$aParagraph.click();

                expect(this.$submenu1.hasClass('submenu--visible')).to.be.false;
            });
        });
    });
});
