import {Pipe} from 'angular2/core';

// # Filter Array of Objects
@Pipe({ name: 'roFilter' })
export class SearchFilterPipe {
  transform(value: any[], args) {
    if (!args[0]) {
      return value;
    } else if (value) {
      let result = value.filter(item => {
        console.log(item);
        console.log(args);
        for (let key in item) {
          if ((typeof item[key] === 'string' || item[key] instanceof String) &&
            ((item[key]).toLowerCase().indexOf(args.toLowerCase()) !== -1)) {
            console.log('KEY: ', key);
            return true;
          }
        }
      });
      console.log(result);
      return result;
    }
  }
}