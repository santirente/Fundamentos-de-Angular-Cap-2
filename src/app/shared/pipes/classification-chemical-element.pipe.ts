import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classificationChemicalElement'
})
export class ClassificationChemicalElementPipe implements PipeTransform {

  private classificationChemicalElements = [
    {
      category: 'Alcalinos',
      elements: ['li', 'na', 'k', 'rb', 'cs', 'fr']
    },
    {
      category: 'Alcalinoterreos',
      elements: ['be', 'mg', 'ca', 'sr', 'ba', 'ra']
    },
    {
      category: 'Metales de transición',
      elements: ['sc', 'ti', 'v', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd', 'ag', 'cd', 'la', 'hf', 'ta', 'w', 're', 'os', 'ir', 'pt', 'au', 'hg', 'ac', 'rf', 'db', 'sg', 'bh', 'hs', 'mt', 'ds', 'rg', 'cn', 'fl', 'lv', 'la', 'ce', 'pr', 'nd', 'pm', 'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu']
    },
    {
      category: 'Otros metales',
      elements: ['b', 'al', 'ga', 'in', 'tl', 'ce', 'pb', 'bi']
    },
    {
      category: 'Metaloides',
      elements: ['si', 'ge', 'sn', 'sb', 'te', 'po']
    },
    {
      category: 'No metales',
      elements: ['h', 'c', 'n', 'o', 'f', 'p', 's', 'se', 'as', 'br', 'i', 'at']
    },
    {
      category: 'Gases nobles',
      elements: ['he', 'ne', 'ar', 'kr', 'xe', 'rn']
    },
    {
      category: 'Lantánidos',
      elements: ['la', 'ce', 'pr', 'nd', 'pm', 'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu']
    },
    {
      category: 'Actínidos',
      elements: ['ac', 'th', 'pa', 'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 'no', 'lr']
    }
  ]

  transform(value: string): string {
    if(typeof value === 'string')
      return this.getClassificationChemicalElement(value);
    return 'Sin clasificar';
  }

  /**
   * Categoría del elemento químico, por ejemplo Alcalinos, Alcalinoterreos, etc.
   * @param symbol Simbolo del elemento químico, por ejemplo H, He, C, N, etc.
   * @returns
   */
  getClassificationChemicalElement(symbol: string): string {
    let classification = 'Sin clasificar';
    this.classificationChemicalElements.forEach(element => {
      if (element.elements.includes(symbol.toLowerCase())) {
        classification = element.category;
      }
    });
    return classification;
  }

}
