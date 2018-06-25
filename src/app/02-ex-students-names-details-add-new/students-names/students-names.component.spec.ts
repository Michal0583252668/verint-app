import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsNamesComponent } from './students-names.component';

describe('StudentsNamesComponent', () => {
  let component: StudentsNamesComponent;
  let fixture: ComponentFixture<StudentsNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
