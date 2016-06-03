import {Pipe} from 'angular2/core';

// # Filter Array of Objects
@Pipe({ name: 'roFilter' })
export class SearchFilterPipe {
  /*
    value: the array of elements to filter
    args: The string to use to filter
  */
  transform(value: any[], args) {

    /*
      If there are no arguments passed in, dont filter anything
    */
    if (!args[0]) {
      return value;
    } else if (value) {
      /*
        If there was arguments passed in & there is an array to filter,
        begin the filtering of the elements
      */
      let result = value.filter(item => {
        /*
          For every item in the array,
        */
        for (let key in item) {
          /*
            loop over each of the string values.  If the argument is contained in
            any of the string values, the item passes the filter.
          */
          if ((typeof item[key] === 'string' || item[key] instanceof String) &&
            ((item[key]).toLowerCase().indexOf(args.toLowerCase()) !== -1)) {
            return true;
          }
        }
      });
      /*
        Return all of the items that passed the filter
      */
      return result;
    }
  }
}