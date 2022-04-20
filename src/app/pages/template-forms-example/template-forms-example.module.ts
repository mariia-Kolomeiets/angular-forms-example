import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { TemplateFormsExampleComponent } from './template-forms-example.component';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '../../material/material.module';

const templateFormsRoute: Route[] = [
  {
    path: 'template-forms',
    component: TemplateFormsExampleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(templateFormsRoute),
    MaterialModule,
  ],
  declarations: [TemplateFormsExampleComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TemplateFormsExampleModule {}
