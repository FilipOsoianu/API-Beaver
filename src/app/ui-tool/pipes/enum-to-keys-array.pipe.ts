import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'enumToKeysArray'})
export class EnumToKeysArrayPipe implements PipeTransform {
  transform(data: object) {
    return Object.keys(data);
  }
}
