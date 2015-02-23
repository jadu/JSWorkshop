/*
 * JS workshop
 *
 * Jadu Ltd.
 */

/*global mocha, mochaPhantomJS, sinon:true, window */
'use strict';

var chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai');

// Load Sinon-Chai
chai.use(sinonChai);

mocha.ui('bdd');
mocha.timeout(2000);

// Expose tools in the global scope
window.chai = chai;
window.describe = describe;
window.expect = chai.expect;
window.it = it;
window.sinon = sinon;

require('./unit/Component/NavMenuComponentTest');
require('./unit/Plumber/BoundingBoxFactoryTest');
require('./unit/Plumber/BoundingBoxTest');
require('./unit/Plumber/CharacterFactoryTest');
require('./unit/Plumber/CharacterTest');
require('./unit/Plumber/CollisionDetectorTest');
require('./unit/Plumber/ControlsTest');
require('./unit/Plumber/DOMKeyListenerTest');
require('./unit/Plumber/PipeFactoryTest');
require('./unit/Plumber/PipeTest');
require('./unit/Plumber/RendererTest');
require('./unit/Plumber/RNGTest');
require('./unit/Plumber/VelocityFactoryTest');
require('./unit/Plumber/VelocityTest');
require('./unit/Plumber/WorldTest');

if (typeof mochaPhantomJS !== 'undefined') {
    mochaPhantomJS.run();
} else {
    mocha.run();
}
