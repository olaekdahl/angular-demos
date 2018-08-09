import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'popular'
})
export class PopularPipe implements PipeTransform {

  transform(value: boolean, name: string): string {
    return value ? `<img width='30px' title='${name}' src='/assets/up.png'/>` : `<img width='30px' title='${name}'  src='/assets/down.jpg'/>`;
  }

}
