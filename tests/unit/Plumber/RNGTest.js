/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var RNG = require('../../../src/Plumber/RNG');

describe('RNG', function () {
    beforeEach(function () {
        this.Math = {
            random: sinon.stub()
        };

        this.rng = new RNG(this.Math);
    });

    describe('generate()', function () {
        it('should return 0 when Math.random returns 0', function () {
            this.Math.random.returns(0);

            expect(this.rng.generate()).to.equal(0);
        });

        it('should return 100 when Math.random returns 0.5', function () {
            this.Math.random.returns(0.5);

            expect(this.rng.generate()).to.equal(100);
        });

        it('should return 200 when Math.random returns 1', function () {
            this.Math.random.returns(1);

            expect(this.rng.generate()).to.equal(200);
        });
    });
});
