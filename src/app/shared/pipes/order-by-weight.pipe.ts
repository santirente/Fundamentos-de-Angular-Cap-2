import { Pipe, PipeTransform } from '@angular/core';
import { PeriodicElement } from 'src/app/features/home/domain/element.model';

@Pipe({
  name: 'orderByWeight'
})
export class OrderByWeightPipe implements PipeTransform {

  transform(value: Array<PeriodicElement>): Array<PeriodicElement> {
    return value.sort((a, b) =>  b.weight - a.weight)
  }

}
