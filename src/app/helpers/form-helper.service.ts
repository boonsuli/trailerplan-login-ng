import {FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class FormHelperService {
  constructor() {
  }

  public resetFormValue(form: FormGroup, field: string): void {
    const controls = form?.controls;
    console.log(controls[field].errors)
    if(field && field.trim()) {
      controls[field].reset();
    } else{
      form?.reset();
      controls[field].markAsPristine();
      controls[field].markAsUntouched();
    }
  }
}



