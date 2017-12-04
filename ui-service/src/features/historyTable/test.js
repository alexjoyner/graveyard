import React from 'react';
import { shallow } from 'enzyme';
import {HistoryTable} from "./index";


describe('Feature/History Table', () => {
    let component;
    beforeEach(() => {
        component = shallow(<HistoryTable />);
    });
   it('renders without exploding', () => {
       expect(component.length).toEqual(1);
   });
   describe('History table styles', () => {
       it('contains a .pure-table', () => {
           expect(component.find('.pure-table').length).toEqual(1);
       });
   });
   it('contains a single table', () => {
      expect(component.find('table').length).toEqual(1);
   });
   describe('columns', () => {
       it('has only two columns', () => {
           expect(component.find('th').length).toEqual(2);
       });
       it('has a column named timestamp', () => {
           expect(component.contains(<th>Timestamp</th>)).toEqual(true);
       });
       it('has a column named value', () => {
           expect(component.contains(<th>Value</th>)).toEqual(true);
       });
   });
   describe('rows', () => {
       it('has a function to get default row when no data is passed', () => {
       });
       it('has a default row when their is no data to display', () => {
           expect(component.contains(
               <tbody>
               <tr>
                   <td colSpan={2}>Sorry, Nothing to display</td>
               </tr>
               </tbody>
           )).toEqual(true);
       });
       it('displays the correct values from a state with data');
   })
});