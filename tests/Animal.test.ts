import {expect} from 'chai';
import {Animal} from "../client/utils/Animal";

describe('Animal', () => {
    let testAnimal;
    beforeEach(() =>{
        testAnimal = new Animal({
            type: 'test',
            speed: 100
        })
    });
    it('should run the correct speed', () => {
        expect(testAnimal.run()).to.equal('Your test ran at a speed of 100');
    });
});