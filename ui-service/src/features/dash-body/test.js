import React from 'react';
import { shallow } from 'enzyme';
import { DashBody} from "./index";
import { Graph } from '../graph';
import { HistoryTable } from '../historyTable';
describe('Feature/DashBody', () => {
    let component;
    beforeEach(() => {
        component = shallow(<DashBody />);
    });
    describe('DashBody styles', () => {
       it('should have a class of .GraphBody', () => {
          expect(component.find('.GraphBody').length).toEqual(1);
       });
    });
    it('renders without exploding', () => {
        expect(component.length).toEqual(1);
    });
    it('displays a history table', () => {
        expect(component.find(HistoryTable).length).toEqual(1);
    });
    it('displays two graphs', () => {
        expect(component.find(Graph).length).toEqual(2);
    });
    it('displays an analog gauge graph');
    it('displays a bar graph');
});
