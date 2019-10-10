import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsExampleModule } from "./pages/reactive-forms-example/reactive-forms-example.module";
import { TemplateFormsExampleModule } from "./pages/template-forms-example/template-forms-example.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsExampleModule,
    TemplateFormsExampleModule
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
