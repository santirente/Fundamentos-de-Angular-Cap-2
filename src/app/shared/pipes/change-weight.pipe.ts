import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeWeight'
})
export class ChangeWeightPipe implements PipeTransform {

  transform(value: any, ...args: Array<any>): number{
    console.log(args[0].indexOf(value))
    let number = 999
    return value.weight < 12 && value.weight > 8 ? value.weight : number - (args[0].indexOf(value))
  }

}
