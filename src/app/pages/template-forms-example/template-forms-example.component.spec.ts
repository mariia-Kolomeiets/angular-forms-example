import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormsExampleComponent } from './template-forms-example.component';

describe('TemplateFormsExampleComponent', () => {
  let component: TemplateFormsExampleComponent;
  let fixture: ComponentFixture<TemplateFormsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
