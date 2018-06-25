import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsDetailsAddComponent } from './students-details-add.component';

describe('StudentsDetailsAddComponent', () => {
  let component: StudentsDetailsAddComponent;
  let fixture: ComponentFixture<StudentsDetailsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsDetailsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
