import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popular'
})
export class PopularPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? "<img width='30px' src='/assets/up.png'/>" : "<img width='30px' src='/assets/down.jpg'/>";
  }

}
