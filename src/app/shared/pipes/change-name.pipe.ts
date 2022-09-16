import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeName'
})
export class ChangeNamePipe implements PipeTransform {

  transform(value: string): string {
    const name= 'Santiago'
    if(value === '' || value === undefined) {
      return value;
    }
    return name
  }

}
