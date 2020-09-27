import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVarComponent } from './add-var.component';

describe('AddVarComponent', () => {
  let component: AddVarComponent;
  let fixture: ComponentFixture<AddVarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
