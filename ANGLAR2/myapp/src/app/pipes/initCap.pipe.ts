import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'initCap',
  standalone: true,
})

export class InitCapPipe implements PipeTransform {
  transform(value: any, ...arg: any[]) :string {
      return value[0].toUpperCase() + value.slice(1).toLowerCase()
  }
}