!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.jsWorkshop=e()}}(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){"use strict";var NavMenuComponent=require("./src/Component/NavMenuComponent");module.exports={NavMenuComponent:NavMenuComponent}},{"./src/Component/NavMenuComponent":2}],2:[function(require,module,exports){(function(global){"use strict";var VISIBLE_CLASS="submenu--visible",$=typeof window!=="undefined"?window.$:typeof global!=="undefined"?global.$:null;function NavMenuComponent($body,$menu){this.$body=$body;this.$menu=$menu}NavMenuComponent.prototype.initialize=function(){var component=this,$menu=component.$menu,$openSubmenu=$();$menu.on("click","[data-submenu]",function(event){var selector=$(this).data("submenu"),$submenu=$menu.find(selector);if($openSubmenu[0]&&!$.contains($openSubmenu[0],$submenu[0])){$openSubmenu.removeClass(VISIBLE_CLASS)}$submenu.addClass(VISIBLE_CLASS);$openSubmenu=$submenu;event.stopPropagation();event.preventDefault()});component.$body.click(function(){$openSubmenu.parents("[data-submenu]").each(function(){var selector=$(this).data("submenu"),$submenu=$menu.find(selector);$submenu.removeClass(VISIBLE_CLASS)});$openSubmenu.removeClass(VISIBLE_CLASS)})};module.exports=NavMenuComponent}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}]},{},[1])(1)});