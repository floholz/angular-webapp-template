import { Pipe, PipeTransform } from '@angular/core';
import {FormControl} from "@angular/forms";

@Pipe({
  name: 'formControlName'
})
export class FormControlNamePipe implements PipeTransform {

  transform(value: FormControl, ...args: unknown[]): string | undefined{
    const formGroup = value['_parent'].controls;
    return Object.keys(formGroup).find(name => value === formGroup[name]);
  }

}
