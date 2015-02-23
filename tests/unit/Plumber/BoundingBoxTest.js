/*
 * JS workshop
 *
 * Jadu Ltd.
 */

'use strict';

var _ = require('lodash'),
    BoundingBox = require('../../../src/Plumber/BoundingBox');

describe('BoundingBox', function () {
    describe('getRight()', function () {
        it('should return 5 when box has left of 2 and width of 3', function () {
            var boundingBox = new BoundingBox(2, 0, 3, 0);

            expect(boundingBox.getRight()).to.equal(5);
        });

        it('should return 6 when box has left of 4 and width of 2', function () {
            var boundingBox = new BoundingBox(4, 0, 2, 0);

            expect(boundingBox.getRight()).to.equal(6);
        });
    });

    describe('intersectsBoundingBox()', function () {
        _.each({
            'should return false when box is out to top of other box': {
                boxParameters: {
                    x: 100,
                    y: 100,
                    width: 20,
                    height: 20
                },
                otherBoxParameters: {
                    x: 100,
                    y: 200,
                    width: 20,
                    height: 20
                },
                expectedResult: false
            },
            'should return false when box is out to right of other box': {
                boxParameters: {
                    x: 200,
                    y: 100,
                    width: 20,
                    height: 20
                },
                otherBoxParameters: {
                    x: 100,
                    y: 200,
                    width: 20,
                    height: 20
                },
                expectedResult: false
            },
            'should return false when box is out to bottom of other box': {
                boxParameters: {
                    x: 100,
                    y: 300,
                    width: 20,
                    height: 20
                },
                otherBoxParameters: {
                    x: 100,
                    y: 200,
                    width: 20,
                    height: 20
                },
                expectedResult: false
            },
            'should return false when box is out to left of other box': {
                boxParameters: {
                    x: 0,
                    y: 200,
                    width: 20,
                    height: 20
                },
                otherBoxParameters: {
                    x: 100,
                    y: 200,
                    width: 20,
                    height: 20
                },
                expectedResult: false
            },
            'should return true when the other box has identical x, y, width and height': {
                boxParameters: {
                    x: 100,
                    y: 200,
                    width: 20,
                    height: 20
                },
                otherBoxParameters: {
                    x: 100,
                    y: 200,
                    width: 20,
                    height: 20
                },
                expectedResult: true
            },
            'should return true when the other box has identical x and y but different width and height': {
                boxParameters: {
                    x: 100,
                    y: 200,
                    width: 20,
                    height: 20
                },
                otherBoxParameters: {
                    x: 100,
                    y: 200,
                    width: 2000,
                    height: 2000
                },
                expectedResult: true
            },
            'should return true when right edge overlaps left edge of other box by 1px': {
                boxParameters: {
                    x: 10,
                    y: 2,
                    width: 21,
                    height: 20
                },
                otherBoxParameters: {
                    x: 20,
                    y: 2,
                    width: 21,
                    height: 20
                },
                expectedResult: true
            }
        }, function (scenario, description) {
            it(description, function () {
                var box = new BoundingBox(
                        scenario.boxParameters.x,
                        scenario.boxParameters.y,
                        scenario.boxParameters.width,
                        scenario.boxParameters.height
                    ),
                    otherBox = new BoundingBox(
                        scenario.otherBoxParameters.x,
                        scenario.otherBoxParameters.y,
                        scenario.otherBoxParameters.width,
                        scenario.otherBoxParameters.height
                    );

                expect(box.intersectsBoundingBox(otherBox)).to.equal(scenario.expectedResult);
            });
        });
    });
});
