"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Animal_1 = require("../client/utils/Animal");
describe('Animal', function () {
    var testAnimal;
    beforeEach(function () {
        testAnimal = new Animal_1.Animal({
            type: 'test',
            speed: 100
        });
    });
    it('should run the correct speed', function () {
        chai_1.expect(testAnimal.run()).to.equal('Your test ran at a speed of 100');
    });
});
//# sourceMappingURL=Animal.test.js.map