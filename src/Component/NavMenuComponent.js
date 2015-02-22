/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var VISIBLE_CLASS = 'submenu--visible',
    $ = require('jquery');

function NavMenuComponent($body, $menu) {
    this.$body = $body;
    this.$menu = $menu;
}

NavMenuComponent.prototype.initialize = function () {
    var component = this,
        $body = component.$body,
        $menu = component.$menu,
        $openSubmenu = $();

    $menu.on('click', '[data-submenu]', function (event) {
        var selector = $(this).data('submenu'),
            $submenu = $menu.find(selector);

        if ($openSubmenu[0] && !$.contains($openSubmenu[0], $submenu[0])) {
            $openSubmenu.removeClass(VISIBLE_CLASS);
        }

        $submenu.addClass(VISIBLE_CLASS);
        $openSubmenu = $submenu;

        event.stopPropagation();
        event.preventDefault();
    });

    $body.click(function () {
        // Close all parent submenus of the open one
        $openSubmenu.parents('[data-submenu]').each(function () {
            var selector = $(this).data('submenu'),
                $submenu = $menu.find(selector);

            $submenu.removeClass(VISIBLE_CLASS);
        });

        $openSubmenu.removeClass(VISIBLE_CLASS);
    });
};

module.exports = NavMenuComponent;
