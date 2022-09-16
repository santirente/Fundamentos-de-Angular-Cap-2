import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexTable'
})
export class IndexTablePipe implements PipeTransform {

  transform(value: any, ...args: Array<any>): number {
    return args[0].indexOf(value);
  }

}
