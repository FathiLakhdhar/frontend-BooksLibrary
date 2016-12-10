import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: string[]): any {
    return value.filter(item => item.args[0]== args[1] );
  }

}
