import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-template-forms-example',
  templateUrl: './template-forms-example.component.html',
  styleUrls: ['./template-forms-example.component.sass']
})
export class TemplateFormsExampleComponent implements OnInit {
  user = {
    firstName: "",
    password: ""
  };
  standalone: string;
  cities = [
    { id: 1, name: "Kharkiv" },
    { id: 2, name: "Kiev" },
    { id: 3, name: "Lviv" },
  ];
  selectedCity: number;
  shouldUseCity: boolean;
  genderOptions = [
    { gender: "m", label: "male" },
    { gender: "f", label: "female" },
  ];
  selectedGender: {
    gender: string;
    label: string;
  };

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(form: FormGroup) {
    alert(JSON.stringify(form.value, null, 2));
  }

}
