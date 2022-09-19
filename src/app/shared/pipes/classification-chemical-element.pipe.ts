import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classificationChemicalElement'
})
export class ClassificationChemicalElementPipe implements PipeTransform {

  transform(value: unknown): unknown {
    const foo = 'bar';
    return foo;
  }

}
