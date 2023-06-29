import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'formControl'
})
export class FormControlPipe implements PipeTransform {
  transform(value: AbstractControl, ...args: unknown[]): FormControl {
    return value as FormControl;
  }
}
