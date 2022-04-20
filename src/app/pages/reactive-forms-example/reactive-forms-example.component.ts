import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators
} from "@angular/forms";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

// It should not be placed here
function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Component({
  selector: "app-reactive-forms-example",
  templateUrl: "./reactive-forms-example.component.html",
  styleUrls: ["./reactive-forms-example.component.scss"]
})
export class ReactiveFormsExampleComponent implements OnDestroy {
  private componentIsDestroyed$ = new Subject<void>();

  form: FormGroup;

  genderOptions = [
    { gender: "m", label: "male" },
    { gender: "f", label: "female" }
  ];
  cities = [
    { id: 1, name: "Kharkiv" },
    { id: 2, name: "Kiev" },
    { id: 3, name: "Lviv" }
  ];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ["", [
        Validators.required,
        forbiddenNameValidator(/Dmytro/)
      ]],
      password: ["", Validators.required],
      shouldUseCity: [false],
      gender: [null, Validators.required],
      city: [""]
    });

    this.form
      .get("shouldUseCity")
      .valueChanges.pipe(takeUntil(this.componentIsDestroyed$))
      .subscribe(shouldUseCity => {
        if (!shouldUseCity) {
          this.form.get("city").setValue("");
        }
      });
  }

  get shouldUseCity() {
    return this.form.get("shouldUseCity").value;
  }

  get firstName() {
    return this.form.get("firstName");
  }

  get gender() {
    return this.form.get("gender").value;
  }

  ngOnDestroy(): void {
    // This code is usually moved to some abstract component
    // so you can extends those component and use componentIsDestroyed$
    // in any component
    this.componentIsDestroyed$.next();
    this.componentIsDestroyed$.complete();
  }

  onFormSubmit() {
    alert(JSON.stringify(this.form.value, null, 2));
  }
}
