import {Pipe} from 'angular2/core';

// # Filter Array of Objects
@Pipe({ name: 'roFilter' })
export class SearchFilterPipe {
  transform(value, args) {
    console.log('ARGS: ', args);
    if (!args[0]) {
      return value;
    } else if (value) {
      return value.filter(item => {
        for (let key in item) {
          if ((typeof item[key] === 'string' || item[key] instanceof String) &&
            ((item[key]).toLowerCase().indexOf(args[0].toLowerCase()) !== -1)) {
            return true;
          }
        }
      });
    }
  }
}