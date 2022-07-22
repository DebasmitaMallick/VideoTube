// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appShared]'
// })
// export class SharedDirective {

//   constructor() { }

// }

import { Directive , Input } from '@angular/core';
import {Validator,AbstractControl , ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';


@Directive({
  selector: '[compare]',
  providers:[{provide: NG_VALIDATORS, useExisting:CompareValidatorDirective, multi: true}]
})
export class CompareValidatorDirective  implements Validator{
  
  @Input('compare') controlNameToCompare : any;//string


  validate(c: AbstractControl): ValidationErrors | null {
    const controlToCompare = c.root.get(this.controlNameToCompare);

    if(controlToCompare){
      const  Subscription: Subscription= controlToCompare.valueChanges.subscribe(()=>{
        c.updateValueAndValidity();
        Subscription.unsubscribe();
      });
    }
    return controlToCompare && controlToCompare.value !== c.value?{'compare': true}: null;
  }



}

