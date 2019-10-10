import { NgModule } from "@angular/core";
import { TemplateFormsExampleComponent } from "./template-forms-example.component";
import { Route, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

const templateFormsRoute: Route[] = [
  {
    path: "template-forms",
    component: TemplateFormsExampleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(templateFormsRoute)
  ],
  declarations: [TemplateFormsExampleComponent]
})
export class TemplateFormsExampleModule {}
